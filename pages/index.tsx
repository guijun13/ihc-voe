import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import MainSearch from '../components/mainSearch';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Voe</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Header />

      <main>
        <MainSearch />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
