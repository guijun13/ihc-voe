import { Button, TextField, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import Footer from '../components/footer';
import Header from '../components/header';

const Checkout: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col">
              <Typography variant="h3" className="title">
                Dados do Passageiro
              </Typography>

              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Nome"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="CPF"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Email"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Endereço de cobrança"
                  className="bg-white rounded-xl w-full"
                />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="Cidade"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
                <div className="inputBox">
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="Estado"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <Typography variant="h3" className="title">
                Pagamento
              </Typography>

              <div className="flex">
                <div className="inputBox1">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Pix
                  </Button>
                </div>
                <div className="inputBox1">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Cartão de crédito
                  </Button>
                </div>
                <div className="inputBox1">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Boleto
                  </Button>
                </div>
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Nome do Cartão"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Número do cartão"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="inputBox">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Data de validade"
                  className="bg-white rounded-xl w-full"
                />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="Ano"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
                <div className="inputBox">
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="CVV"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
              </div>
              <Link href="/waitingPayment">
                <Button
                  size="large"
                  variant="contained"
                  className="flex rounded-xl bg-purple text-white my-4 hover:bg-purple"
                >
                  Confirmar compra
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
