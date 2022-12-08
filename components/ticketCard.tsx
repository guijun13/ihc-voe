import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Latam from '../public/logo-latam-airlines.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Link from 'next/link';

export default function TicketCard() {
  return (
    <div className="flex flex-col md:flex-row m-4 flex flex-row items-center justify-between mx-4 px-8 py-4 rounded-xl bg-gray-light text-white min-h-full">
      <div>
        <div className="m-4 flex flex-row items-center justify-around">
          <div className="m-4">
            <div className="flex flex-col items-center justify-around mx-4 py-1 bg-purple text-white min-h-full-purple rounded-xl ">
              <Typography>Ida</Typography>
            </div>
            <Image src={Latam} height={50} alt="Latam logo" />
          </div>
          <div className="m-4 flex flex-col items-center justify-around">
            <div className="flex flex-row items-center">
              <LocationOnIcon className="text-black" />
              <Typography variant="h6" className="text-black">
                GRU - São Paulo
              </Typography>
            </div>
            <div className="flex flex-row items-center">
              <LocationOnIcon className="text-black" />
              <Typography variant="h6" className="text-black">
                BSB - Brasília
              </Typography>
            </div>
          </div>
          <div className="m-4 flex flex-col items-center justify-around">
            <div className="flex flex-row items-center">
              <AccessTimeFilledIcon className="text-black" />
              <Typography className="text-black">14:00</Typography>
            </div>
            <div className="flex flex-row items-center">
              <AccessTimeFilledIcon className="text-black" />
              <Typography className="text-black">15:00</Typography>
            </div>
          </div>
          <div className="m-3 items-center justify-around">
            <BusinessCenterIcon className="text-green" />
          </div>
        </div>
        <div className="m-4 flex flex-row items-center justify-around">
          <div className="m-4">
            <div className="flex flex-col items-center justify-around mx-4 py-1 bg-purple text-white min-h-full-purple rounded-xl ">
              <Typography>Volta</Typography>
            </div>
            <Image src={Latam} height={50} alt="Latam logo" />
          </div>
          <div className="m-4 flex flex-col items-center justify-around">
            <div className="flex flex-row items-center">
              <LocationOnIcon className="text-black" />
              <Typography variant="h6" className="text-black">
                GRU - São Paulo
              </Typography>
            </div>
            <div className="flex flex-row items-center">
              <LocationOnIcon className="text-black" />
              <Typography variant="h6" className="text-black">
                BSB - Brasília
              </Typography>
            </div>
          </div>
          <div className="m-4 flex flex-col items-center justify-around">
            <div className="flex flex-row items-center">
              <AccessTimeFilledIcon className="text-black" />
              <Typography className="text-black">14:00</Typography>
            </div>
            <div className="flex flex-row items-center">
              <AccessTimeFilledIcon className="text-black" />
              <Typography className="text-black">15:00</Typography>
            </div>
          </div>
          <div className="m-3 items-center justify-around">
            <BusinessCenterIcon className="text-green" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex flex-row items-center justify-around">
        <Typography className="text-black" variant="h6">
          R$ 1.000,00
        </Typography>
        <Link href="/checkout">
          <Button variant="contained" className="flex rounded-xl bg-purple text-white m-4">
            Comprar
          </Button>
        </Link>
      </div>
    </div>
  );
}
