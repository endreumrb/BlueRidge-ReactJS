import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #000000;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${(props) => props.imgUrl});
`;

export const Logo = styled.img`
  width: 10%;
  margin-bottom: 3rem;
`;

export const Titulo = styled.h1`
  margin-bottom: 1rem;
  color: #FFFFFF;
`;

export const SubTitulo = styled.h2`
  font-weight: 200;
  margin-bottom: 5rem;
  color: #FFFFFF;
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
  }
  
  &:focus {
    border: 1px solid #111111;
  }
}

.entradaEnviar {
  width: 12rem;
  background-color: #DDDDDD;
  
  &:hover {
    border: 1px solid #111111;
    background-color: #CCCCCC;
  }
}
`;

export const DescriçãoEntradas = styled.h3`
  font-weight: 100;
  margin-bottom: 4rem;
  color: #FFFFFF;
`;

export const SecaoCards = styled.section`
  margin: 4rem 10rem 7rem 10rem;
  display: flex;
`;

export const ImagemCard = styled.img`
  margin: 1rem 0;
  width: 15%;
  user-select: none;
`;

export const Card = styled.div`
  display: flex;
  margin: 1.5rem .5rem;
  border: 1px solid #DDDDDD;
  padding: 0.5rem;
  flex-direction: column;
  flex: 1;

  div {
    text-align: center;
  }

  h4 {
    display: inline-block;
    height: 5rem;
  }

  p {
    margin: .5rem 0;
  }
`;

export const SecaoMarcas = styled(SecaoCards)`
  border-top: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  padding: 1rem .5rem;
  margin-bottom: 5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImagemMarca = styled(ImagemCard)`
  width: 70%;
  padding: 0 0.25rem;
`;

export const SecaoFrase = styled(SecaoCards)`

  justify-content: center;
  
  div {
    width: 70%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: .75rem;
    margin-bottom: 4rem;
  }

  button {
      width: 12rem;
      background-color: #E0B34F;
      height: 3rem;
      padding: 0 1rem;
      border-radius: 5px;
      outline: none;
      border: none;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
      margin-bottom: 1rem;
      font-size: .95rem;
      
      &:hover {
        transition-duration: .35s;
        background-color: #BD9235;
      }
  }
`;

export const Rodape = styled.footer`

  margin: 0 10rem 0.25rem 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  a {
    margin-left: 1rem;
    text-decoration: none;
    font-weight: 400;
  }

`