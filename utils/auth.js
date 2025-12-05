import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";
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
            firstName: 'Credentials',
            lastName: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "Enter password" }
            },
            async authorize(credentials, req) {
                console.log("Trying to connect to the database...")
                connectDB();

                // Add your custom logic to validate credentials and return a user object
                const user = await User.findOne({ email: credentials.email });

                console.log("User ===> ", user);

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
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    
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

            if (user?.firstName && user?.lastName) {
                token.name = user.firstName + ' ' + user.lastName;
            }

            if (user?.image) {
                token.image = user.image;
            }

            if (user?.coverImage) {
                token.coverImage = user.coverImage;
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

            if (token?.name) {
                session.user.name = token.name;
            }

            if (token?.profileId) {
                session.user.profileId = token.profileId;
            }

            if (token?.image) {
                session.user.image = token.image;
            }

            if (token?.coverImage) {
                session.user.coverImage = token.coverImage;
            }

            // console.log("Final Session ===> ", session);

            return session
        },
        async signIn({ user, account, profile }) {
            // console.log("User ===> ", user);
            // console.log("Account ===> ", account);
            // console.log("Profile ===> ", profile);

            return true; // Continue with the sign-in process
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