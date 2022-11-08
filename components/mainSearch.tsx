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

export default function MainSearch() {
  return (
    <div className="flex flex-col items-center justify-around mx-4 px-8 py-4 rounded-xl bg-purple text-white min-h-full">
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
    </div>
  );
}
