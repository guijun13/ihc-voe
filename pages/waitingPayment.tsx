import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';

const WaitingPayment: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className="rect">
          <h1 className="bg-white">Pagamento em análise!</h1>
          <h2 className="bg-white">
            Você receberá uma confirmação no seu e-mail cadastrado.
            <br />
            Aproveite sua viagem!
          </h2>
        </div>
      </div>
      <div>
        <div className="rect2">
          <h2 className="bg-white">Minhas passagens</h2>
        </div>
      </div>
      <div>
        <div className="rect3">
          <h2 className="bg-white">Home</h2>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WaitingPayment;
