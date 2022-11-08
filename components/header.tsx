import { LocalActivity, Luggage, LocalFireDepartment } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import Logo from '../public/logo.svg';

export default function Header() {
  return (
    <header className="flex justify-between w-full px-8 py-6 top-0">
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
  );
}
