import { Button, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import ResumeCard from "../components/resumeCard";

const Checkout: NextPage = () => {
  return (
    <>
      <Header />
      <ResumeCard/>
      <div className="container m-auto">
        <form action="">
          <div className="row">
            <div className="col">
              <Typography variant="h3" className="title">
                Dados do Passageiro
              </Typography>

              <div className="flex mb-4 mx-4">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Nome"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="flex mb-4 mx-4">
                <TextField
                  type="number"
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="CPF"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="flex mb-4 mx-4">
                <TextField
                  type="email"
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Email"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="flex mb-4 mx-4">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Endereço de cobrança"
                  className="bg-white rounded-xl w-full"
                />
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row mb-4 mx-4">
                  <TextField
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="Cidade"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
                <div className="flex mb-4 mx-4">
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

              <div className="flex flex-col lg:flex-row justify-around">
                <div className="flex flex-col lg:flex-row mx-4">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Pix
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row mx-4">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex flex-col lg:flex-row rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Cartão de crédito
                  </Button>
                </div>
                <div className="flex flex-col lg:flex-row mx-4">
                  <Button
                    size="large"
                    variant="contained"
                    className="flex flex-col lg:flex-row rounded-xl bg-purple text-white my-4 hover:bg-purple"
                  >
                    Boleto
                  </Button>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mb-4 mx-4">
                <TextField
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Nome do Cartão"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="flex flex-col lg:flex-row mb-4 mx-4">
                <TextField
                  type="number"
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Número do cartão"
                  className="bg-white rounded-xl w-full"
                />
              </div>
              <div className="flex flex-col lg:flex-row flex-col mb-4 mx-4">
                <Typography variant="body1">Data de validade</Typography>
                <TextField
                  type="month"
                  variant="outlined"
                  id="outlined-basic"
                  placeholder="Data de validade"
                  className="bg-white rounded-xl w-full"
                />
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:flex-row mb-4 mx-4">
                  <TextField
                    type="number"
                    variant="outlined"
                    id="outlined-basic"
                    placeholder="CVV"
                    helperText="Número de 3 dígitos na parte de trás do seu cartão"
                    className="bg-white rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center">
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
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
