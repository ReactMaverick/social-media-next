import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';

// Redirect to /0
export default async function Home({ params }) {
  const session = await getServerSession(authOptions);

  // console.log('Request sent user:', session);

  if (session?.user?.profileId) {
    redirect('/0/newsfeed');
  } else {
    redirect('/0');
  }

}

