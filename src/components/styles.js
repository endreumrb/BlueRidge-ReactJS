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

  @media(max-width: 768px) {
    width: 15%
  }
`;

export const Titulo = styled.h1`
  margin: 0 1rem 1rem 1rem;
  color: #FFFFFF;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SubTitulo = styled.h2`
  font-weight: 200;
  margin: 0 1rem 5rem 1rem;
  color: #FFFFFF;
  text-align: center;
  
  @media(max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
  
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

  @media(min-width: 426px) and (max-width: 768px) {
    padding: 0 .5rem;
    font-size: .75rem;
  }

  @media(max-width: 425px) {
    padding: 0 .25rem;
    font-size: .65rem;
  }
}

.entradaEmail {
  width: 25rem;
  margin: 0 3rem 1rem 0;

  @media(min-width: 426px) and (max-width: 768px) {
    width: 20rem;
  }

  @media(max-width: 425px) {
    width: 15rem;
    margin: 0 1rem 2rem 0;
  }

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

  @media(min-width: 426px) and (max-width: 768px) {
    width: 9rem;
  }

  @media(max-width: 425px) {
    width: 7rem;
  }
  
  &:hover {
    border: 1px solid #111111;
    background-color: #CCCCCC;
  }
}
`;

export const DescriçãoEntradas = styled.h3`
  font-weight: 100;
  margin: 0 1rem 4rem 1rem;
  color: #FFFFFF;
  text-align: center;

  @media(max-width: 768px) {
    font-size: .75rem;
  }
`;

export const SecaoCards = styled.section`
  margin: 4rem 10rem 7rem 10rem;
  display: flex;

  @media(min-width: 769px) and (max-width: 1024px) {
    margin: 2rem 5rem 4rem 5rem;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const ImagemCard = styled.img`
  margin: 1rem 0 2rem 0;
  width: 15%;
  user-select: none;

  @media(max-width: 768px) {
    width: 12%;
  }
`;

export const Card = styled.div`
  display: flex;
  margin: 1.5rem .5rem;
  border: 1px solid #DDDDDD;
  padding: 0.5rem;
  flex-direction: column;
  flex: 1;

  @media(max-width: 768px) {
    margin: 1.5rem 0;
    border: none;
    border-top: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
    padding: 0.5rem 1rem 0.5rem 1rem;
  }

  div {
    text-align: center;
  }

  h4 {
    display: inline-block;
    height: 5rem;
  }

  p {
    margin: 3rem 0 .5rem 0;
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

  @media(max-width: 768px) {
    flex-direction: row;
  }
`;

export const ImagemMarca = styled(ImagemCard)`
  width: 70%;
  padding: 0 .25rem;
  margin: 1rem;

  @media(min-width: 426px) and (max-width: 768px) {
    width: 90%
  }

  @media(max-width: 425px) {
    width: 90%
  }
`;

export const SecaoFrase = styled(SecaoCards)`
  justify-content: center;

  @media(max-width: 768px) {
    align-items: center;
  }

  div {
    width: 70%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    @media(max-width: 768px) {
      width: 90%;
      margin-bottom: 2rem;
    }

  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 2rem;

    @media(max-width: 768px) {
      font-size: 1.25rem;
    }
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
      font-size: 1rem;
      
      &:hover {
        transition-duration: .35s;
        background-color: #BD9235;
      }

      @media(max-width: 768px) {
        width: 9rem;
        font-size: .75rem;
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

    @media(max-width: 426px) {
      font-size: .75rem;
    }
  }

  @media(min-width: 769px) and (max-width: 1024px) {
    margin: 0 5rem 0.25rem 5rem;
  }

  @media(max-width: 768px) {
    margin: 0 1rem 0.25rem 0rem;
  }

`