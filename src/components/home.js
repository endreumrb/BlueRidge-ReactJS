import './home.css';
import logo from '../images/logo.png';
import cafe from '../images/cafe.jpg';

function Home() {
  return (
    <header className="cabecalho">
      <img src={logo} alt="" className="logo" />
      <h1 className="titulo">O Café mais querido entre os brasileiros</h1>
      <h2 className="sub-titulo">Tem origem em uma das melhores regiões para plantação de cafés especiais no Brasil</h2>
      <form method="get">
        <label for="">
          <input type="email" className="entradaEmail" placeholder="Digite seu melhor e-mail" autocomplete="off" />
        </label>
        <input type="submit" className="EntradaEnviar" value="Vamos Começar" ></input>
      </form>
      <h3 className="descEntradas">Recebe seu primeiro café gratuitamente. Sem risco, ou necessidade de cartão de crédito.</h3>
    </header>
  );
}

export default Home;
