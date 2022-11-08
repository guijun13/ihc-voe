import { Typography } from '@mui/material';
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
                <input type="text" placeholder="Nome" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="CPF" />
              </div>
              <div className="inputBox">
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Endereço de cobrança" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <input type="text" placeholder="Cidade" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Estado" />
                </div>
              </div>
            </div>

            <div className="col">
              <Typography variant="h3" className="title">
                Pagamento
              </Typography>

              <div className="flex">
                <div className="inputBox1">
                  <input type="submit" value="Pix" className="submit-btn" />
                </div>
                <div className="inputBox1">
                  <input type="submit" value="Cartão de Crédito" className="submit-btn" />
                </div>
                <div className="inputBox1">
                  <input type="submit" value="Boleto" className="submit-btn" />
                </div>
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Nome no Cartão" />
              </div>
              <div className="inputBox">
                <input type="number" placeholder="Número do cartão" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Data de Validade" />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <input type="text" placeholder="Ano" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
              <Link href="/waitingPayment">
                <input type="submit" value="Confirmar Compra" className="submit-btn" />
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
