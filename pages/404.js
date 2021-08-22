import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    //   redirecting
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div className='not-found'>
      <h1>Ooooooooops</h1>
      <p>
        page cannot be found
        <Link href='/'>
          <a> go to homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
