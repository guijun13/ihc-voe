import {
  AirlineSeatReclineNormal,
  CalendarMonth,
  CompareArrows,
  FlightLand,
  FlightTakeoff,
  LocalActivity,
  LocalFireDepartment,
  Luggage,
  PeopleAlt,
  Person,
  Search,
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import {
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/logo.svg';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Voe</title>
        <link rel="icon" href="/logo.ico" />
      </Head>

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

      <main className="flex flex-col items-center justify-around mx-4 px-8 py-4 rounded-xl bg-purple text-white">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col items-center mx-4">
            <div className="flex">
              <div className="flex flex-col">
                <div className="flex pb-4">
                  <FlightTakeoff />
                  <Typography variant="body1" className="ml-4">
                    Origem
                  </Typography>
                </div>
                <TextField
                  className="bg-white rounded-xl"
                  id="outlined-basic"
                  placeholder="Insira a cidade de origem"
                  variant="outlined"
                />
              </div>
              <CompareArrows className="flex mx-4" />
              <div className="flex flex-col">
                <div className="flex pb-4">
                  <FlightLand />
                  <Typography variant="body1" className="ml-4">
                    Destino
                  </Typography>
                </div>
                <TextField
                  className="bg-white rounded-xl"
                  id="outlined-basic"
                  placeholder="Insira a cidade de destino"
                  variant="outlined"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mx-4">
            <div className="flex flex-col">
              <div className="flex pb-4">
                <CalendarMonth />
                <Typography variant="body1" className="ml-4">
                  Ida
                </Typography>
              </div>
              <TextField
                className="bg-white rounded-xl"
                id="outlined-basic"
                placeholder="Insira a data de ida"
                variant="outlined"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex pb-4">
                <CalendarMonth />
                <Typography variant="body1" className="ml-4">
                  Volta
                </Typography>
              </div>
              <TextField
                className="bg-white rounded-xl"
                id="outlined-basic"
                placeholder="Insira a data de volta"
                variant="outlined"
              />
            </div>
          </div>

          <div className="flex items-center mx-4">
            <div className="flex flex-col">
              <div className="flex pb-4">
                <PeopleAlt />
                <Typography variant="body1" className="ml-4">
                  Passageiros
                </Typography>
              </div>
              <TextField
                select
                label="Insira os passageiros"
                className="bg-white rounded-xl"
                id="outlined-select-seat-class"
              >
                <MenuItem value={'Economica'}>1 adulto</MenuItem>
              </TextField>
            </div>
          </div>

          <div className="flex items-center mx-4">
            <div className="flex flex-col">
              <div className="flex pb-4">
                <AirlineSeatReclineNormal />
                <Typography variant="body1" className="ml-4">
                  Classe
                </Typography>
              </div>
              <TextField
                select
                label="Insira a classe"
                className="bg-white rounded-xl"
                id="outlined-select-seat-class"
              >
                <MenuItem value={'Economica'}>Economica</MenuItem>
              </TextField>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <FormControl className="mt-4">
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="ida e volta"
              name="radio-buttons-group"
            >
              <FormControlLabel value="ida e volta" control={<Radio />} label="Ida e volta" />
              <FormControlLabel value="somente ida" control={<Radio />} label="Somente ida" />
              <FormControlLabel value="multidestinos" control={<Radio />} label="Multidestinos" />
            </RadioGroup>
          </FormControl>

          <Button
            className="flex rounded-xl bg-white text-purple my-4"
            variant="contained"
            startIcon={<Search />}
          >
            Buscar
          </Button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  );
};

export default Home;
