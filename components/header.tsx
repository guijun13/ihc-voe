import { LocalActivity, Luggage, LocalFireDepartment } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.svg';

export default function Header() {
  return (
    <div className="flex justify-between w-full px-8 py-6 top-0">
      <Link href="/">
        <Image alt="Voe logo" src={Logo} />
      </Link>
      <div className="flex">
        <Button className="text-black" variant="text" startIcon={<LocalActivity />}>
          Milhas
        </Button>
        <Button className="text-black" variant="text" startIcon={<Luggage />}>
          Pacotes
        </Button>
        <Button className="text-black" variant="text" startIcon={<LocalFireDepartment />}>
          Ofertas
        </Button>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <IconButton aria-label="Home">
            <HomeIcon />
          </IconButton>
        </Link>
        <div className="flex">
          <Link href="/login">
            <Button className="text-black" variant="text">
              Registrar
            </Button>
          </Link>
          <Link href="/login">
            <Button className="text-black" variant="text">
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
