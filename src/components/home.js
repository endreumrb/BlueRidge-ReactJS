import logo from '../images/logo.png';
import cafe from '../images/cafe.jpg';

import React, { Fragment } from 'react';

import { Cabecalho, GlobalStyle, Logo, Titulo, SubTitulo, Formulario, DescriçãoEntradas } from './styles'



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
    </Fragment>
  );
}

export default Home;
