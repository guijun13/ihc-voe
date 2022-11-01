import { LocalActivity, LocalFireDepartment, Luggage, Person } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Button, IconButton } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/logo.svg';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Voe</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

      <header className="flex justify-between w-full px-8 py-6">
        <div>
          <Image alt="Voe logo" src={Logo} />
        </div>
        <div className="flex">
          <Button variant="text" startIcon={<LocalActivity />}>
            Milhas
          </Button>
          <Button variant="text" startIcon={<Luggage />}>
            Pacotes
          </Button>
          <Button variant="text" startIcon={<LocalFireDepartment />}>
            Ofertas
          </Button>
        </div>
        <div className="flex">
          <IconButton aria-label="Home">
            <HomeIcon />
          </IconButton>
          <div className="flex">
            <Button variant="text">Registrar</Button>
            <Button variant="text">Entrar</Button>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1></h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
