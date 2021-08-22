import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, illo
          ex autem quam voluptates provident excepturi, voluptatibus, enim nihil
          sint nobis aut itaque architecto corporis earum saepe? Doloremque,
          voluptas dignissimos.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, illo
          ex autem quam voluptates provident excepturi, voluptatibus, enim nihil
          sint nobis aut itaque architecto corporis earum saepe? Doloremque,
          voluptas dignissimos.
        </p>
        <Link href='/about'>
          <a className={styles.btn}>see about page</a>
        </Link>
      </div>
    </>
  );
}
