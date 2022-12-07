import {
  FlightTakeoff,
  CompareArrows,
  FlightLand,
  CalendarMonth,
  PeopleAlt,
  AirlineSeatReclineNormal,
  Search,
} from '@mui/icons-material';
import {
  Typography,
  TextField,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import Link from 'next/link';

export default function MainSearch() {
  return (
    <div className="flex flex-col items-center justify-around mx-4 px-8 py-4 rounded-xl bg-purple text-white min-h-full">
      <div className="flex flex-col md:flex-row flex flex-row w-full justify-between">
        <div className="flex flex-col md:flex-row items-center mx-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-center pb-4">
                <FlightTakeoff className="flex flex-col md:flex-row items-center"/>
                <Typography variant="body1" className="ml-center">
                  Origem
                </Typography>
              </div>
              <TextField
                className="bg-white rounded-xl ml-auto"
                id="outlined-basic"
                placeholder="Insira a cidade de origem"
                variant="outlined"
              />
            </div>
            <CompareArrows className="mx-auto" />
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-center pb-4">
                <FlightLand className="flex flex-col md:flex-row items-center"/>
                <Typography variant="body1" className="ml-center">
                  Destino
                </Typography>
              </div>
              <TextField
                className="bg-white rounded-xl ml-auto"
                id="outlined-basic"
                placeholder="Insira a cidade de destino"
                variant="outlined"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mx-4">
          <div className="flex flex-col md:flex-row mr-4">
            <div className="flex flex-col md:flex-row items-center pb -4">
              <CalendarMonth className="flex flex-col md:flex-row items-center ml-4"/>
              <Typography variant="body1" className="ml-4">
                Ida
              </Typography>
            </div>
            <TextField
              className="bg-white rounded-xl ml-4 "
              id="outlined-basic"
              placeholder="Insira a data de ida"
              variant="outlined"
            />
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col md:flex-row items-center pb-4">
              <CalendarMonth className="flex flex-col md:flex-row items-center"/>
              <Typography variant="body1" className="ml-center">
                Volta
              </Typography>
            </div>
            <TextField
              className="bg-white rounded-xl items-center"
              id="outlined-basic"
              placeholder="Insira a data de volta"
              variant="outlined"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mx-4">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center pb-4">
              <PeopleAlt className="flex flex-col md:flex-row items-center"/>
              <Typography variant="body1" className="ml-auto">
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

        <div className="flex flex-col md:flex-row items-center mx-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row items-center pb-4">
              <AirlineSeatReclineNormal />
              <Typography variant="body1" className="ml-auto">
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
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
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
        </FormControl >
        <Link href="/ticket-list">
          <Button
            className="flex flex-col md:flex-row rounded-xl bg-white text-purple my-4"
            variant="contained"
            startIcon={<Search />}
          >
            Buscar
          </Button>
        </Link>
      </div>
    </div>
  );
}
