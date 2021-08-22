import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <Image src='/logo.png' width={126} height={77} alt='s' />
      <div className='logo'></div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninjas</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;
