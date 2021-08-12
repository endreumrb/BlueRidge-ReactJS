import logo from '../images/logo.png';
import cafe from '../images/cafe.jpg';
import copo from '../images/copo_cafe.png';
import logoMarca from '../images/marca_2.png';

import React, { Fragment } from 'react';

import { Cabecalho, GlobalStyle, Logo, Titulo, SubTitulo, Formulario, DescriçãoEntradas, SecaoCards, Card, ImagemCard, SecaoMarcas, ImagemMarca, SecaoFrase, Rodape } from './styles'


function Home() {
  return (
    <Fragment>
      <GlobalStyle />
      <Cabecalho imgUrl={cafe}>
        <Logo src={logo} />
        <Titulo>O Café mais querido entre os brasileiros</Titulo>
        <SubTitulo>Tem origem em uma das melhores regiões para plantação de cafés especiais no Brasil</SubTitulo>
        <Formulario>
          <label for="">
            <input type="email" className="entradaEmail" placeholder="Digite seu melhor e-mail" autocomplete="off" />
          </label>
          <input type="submit" className="entradaEnviar" value="Vamos Começar" ></input>
        </Formulario>
        <DescriçãoEntradas>Recebe seu primeiro café gratuitamente. Sem risco, ou necessidade de cartão de crédito.</DescriçãoEntradas>
      </Cabecalho>
      <SecaoCards>
        <Card>
          <div><ImagemCard src={copo} /></div>
          <h4>Cup of Excellence traz novidades na edição 2021</h4>
          <p>Principal concurso de qualidade para cafés especiais do mundo amplia possibilidade de comercialização de lotes; produtores podem enviar suas amostras até 8 de setembro.</p>
        </Card>
        <Card>
          <div><ImagemCard src={copo} /></div>
          <h4>BSCA apresenta modernização para setor de cafés especiais no brasil</h4>
          <p>O Brasil comemora, hoje, 24 de maio, o Dia Nacional do Café, cultura que contribuiu para o processo de modernização e industrialização do país.</p>
        </Card>
        <Card>
          <div><ImagemCard src={copo} /></div>
          <h4>Fórum mundial busca renda próspera e de bem-estar a produtores de café</h4>
          <p>“Buscaremos a definição sobre o conceito de prosperidade para produtores de café e quais ações e cooperações internacionais são necessárias para, de fato, se alcançá-la".</p>
        </Card>
      </SecaoCards>
      <SecaoMarcas>
        <div><ImagemMarca src={logoMarca} /></div>
        <div><ImagemMarca src={logoMarca} /></div>
        <div><ImagemMarca src={logoMarca} /></div>
        <div><ImagemMarca src={logoMarca} /></div>
        <div><ImagemMarca src={logoMarca} /></div>
        <div><ImagemMarca src={logoMarca} /></div>
      </SecaoMarcas>
      <SecaoFrase>
        <div>
          <h2>“Blue Ridge Coffee é a melhor do mercado, isso pois já provamos dos melhores.”</h2>
          <h3>Endreu Benites, Fundador da Blue Ridge Coffe</h3>
          <button>Venha conhecer</button>
        </div>
      </SecaoFrase>
      <Rodape>
        <a href="home">Termos de Serviço</a>
        <a href="home">Política de Uso</a>
      </Rodape>
    </Fragment>
  );
}

export default Home;
