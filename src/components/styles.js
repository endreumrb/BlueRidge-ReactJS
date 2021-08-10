import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
  }
`;

export const Cabecalho = styled.header`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${(props) => props.imgUrl})
`;

export const Logo = styled.img`
  width: 10%;
  margin-bottom: 3rem;
`;

export const Titulo = styled.h1`
  margin-bottom: 1rem;
`;

export const SubTitulo = styled.h2`
  font-weight: 200;
  margin-bottom: 5rem;
`;

export const Formulario = styled.form`

.entradaEmail,
.entradaEnviar {
  height: 3rem;
  padding: 0 1rem;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  color: #000000;
  font-size: .95rem;
}

.entradaEmail {
  width: 25rem;
  margin: 0 3rem 1rem 0;

  &:hover {
    border: 1px solid #111111;
  
  &:focus {
    border: 1px solid #111111;
  }
}

.entradaEnviar {
  width: 12rem;
  background-color: #DDDDDD;
  
  &hover {
    border: 1px solid #111111;
    background-color: #CCCCCC;
  }
}
`;

export const DescriçãoEntradas = styled.h3`
  font-weight: 100;
  margin-bottom: 4rem;
`;
