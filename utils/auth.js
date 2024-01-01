import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import connectDB from '@/utils/db';
import User from '@/models/userModel';

// Hash Password
export async function hashPassword(inputPassword) {
    const saltRounds = 12;

    const hash = await bcrypt.hash(inputPassword, saltRounds);

    return hash;
};

// Compare Password
export async function passwordCheck(inputPassword, hashedPassword) {
    const isPasswordMatch = await bcrypt.compare(inputPassword, hashedPassword);

    return isPasswordMatch;
};

// Next-Auth Auth Options
export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign-in form (e.g., 'Sign in with...')
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "Enter password" }
            },
            async authorize(credentials, req) {

                connectDB();

                // Add your custom logic to validate credentials and return a user object
                const user = await User.findOne({ email: credentials.email });

                // console.log("User ===> ", user);

                if (!user) {
                    throw new Error("User not found");
                }

                const isPasswordMatch = await passwordCheck(credentials.password, user.password);

                if (!isPasswordMatch) {
                    throw new Error("Invalid password. Try again");
                }

                // console.log("User ===> ", user);

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        // error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: null, // Will disable the new account creation screen
    },
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
            // console.log("User ===> ", user);
            // console.log("JWT Token ===> ", token);
            // console.log("JWT Account ===> ", account);
            // console.log("JWT Profile ===> ", profile);

            if (user?.role) {
                token.role = user.role;
            }

            if (user?.profileId) {
                token.profileId = user.profileId;
            }

            if (account?.provider === "google") {
                // Set the Google ID in the token
                token.googleId = account.providerAccountId;
                token.profileId = account.providerAccountId;
            }

            if (account?.provider === "facebook") {
                // Set the Google ID in the token
                token.facebookId = account.providerAccountId;
                token.profileId = account.providerAccountId + '123';
            }

            // console.log("Final Token ==> ", token);

            return token
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            return baseUrl
        },
        async session({ session, token, user }) {
            // console.log("Session ===> ", session);
            // console.log("Session Token ===> ", token);
            // console.log("Session User ==> ", user);

            // Send properties to the client, like an access_token and user id from a provider.
            // session.accessToken = token.accessToken
            session.user.id = token.sub;

            if (token?.role) {
                session.user.role = token.role;
            }

            if (token?.googleId) {
                // Set the Google ID in the token
                session.user.googleId = token.googleId;

            }

            if (token?.facebookId) {
                // Set the Google ID in the token
                session.user.facebookId = token.facebookId;

            }

            if (token?.profileId) {
                session.user.profileId = token.profileId;
            }

            // console.log("Final Session ===> ", session);

            return session
        },
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                // console.log("Account ==> ", account);
                // console.log("Profile ==> ", profile);

                connectDB();

                // Check if the user already exists in the database
                const existingUser = await User.findOne({ email: profile.email });

                if (existingUser) {
                    // console.log("User already exists in the database:", existingUser);
                    return true; // Allow sign-in for existing user
                } else {
                    // If the user doesn't exist, create a new user in the database
                    // console.log("User doesn't exists");
                    const newUser = new User({
                        name: profile.name,
                        email: profile.email,
                        password: 'PasswordNotSet2023#', // Provide a default password
                        dob: new Date('2000-01-01'), // Provide a default date of birth
                        googleId: account.providerAccountId, // Save the google id
                        image: profile.photo,
                        profileId: account.providerAccountId, // Save the google id as profile id (21 digits)
                    });

                    // console.log("New User before creation ===> ", newUser);

                    // Save the new user to the database
                    await newUser.save();

                    // console.log("New user created:", newUser);

                    return true; // Allow sign-in for the new user
                }
            } else if (account.provider === "facebook") {
                // console.log("Account ==> ", account);
                // console.log("Profile ==> ", profile);

                connectDB();

                // Check if the user already exists in the database
                const existingUser = await User.findOne({ email: profile.email });

                if (existingUser) {
                    // console.log("User already exists in the database:", existingUser);
                    return true; // Allow sign-in for existing user
                } else {
                    // If the user doesn't exist, create a new user in the database
                    // console.log("User doesn't exists");
                    const newUser = new User({
                        name: profile.name,
                        email: profile.email,
                        password: 'PasswordNotSet2023#', // Provide a default password
                        dob: new Date('2000-01-01'), // Provide a default date of birth
                        facebookId: account.providerAccountId, // Save the google id
                        image: profile.picture.data.url,
                        profileId: account.providerAccountId + '123', // Save the google id as profile id (18 digits + 3 digits)
                    });

                    // console.log("New User before creation ===> ", newUser);

                    // Save the new user to the database
                    await newUser.save();

                    // console.log("New user created:", newUser);

                    return true; // Allow sign-in for the new user
                }
            }
            return true
        }
    },
};

// Admin Check
export const isAdmin = (user) => {
    if (user?.role === 'admin') {
        return true;
    }

    return false;
}