import { redirect } from 'next/navigation';

// Redirect to /0
export default async function Home({ params }) {
  redirect('/0');
}

