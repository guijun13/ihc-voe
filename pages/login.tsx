import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <div className="center">
        <h1>Entrar</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>E-mail</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Senha</label>
          </div>
          <div className="pass">
            Esqueci minha senha.{' '}
            <a className="pass_link" href="#">
              Clique aqui
            </a>
          </div>
          <input type="submit" value="Entrar" />
          {/* <!-- 
      <div className="signup_link">
        Not a member? <a href="#">Signup</a>
      </div> 
      --> */}
        </form>

        <h1>Crie sua conta</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>E-mail</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Senha</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <span></span>
            <label>Confirmar senha</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Nome completo</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>CPF</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Endereço</label>
          </div>
          <input type="submit" value="Cadastrar" />
          {/* <div className="signup_link">
        Not a member? <a href="#">Signup</a>
      </div>  */}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
