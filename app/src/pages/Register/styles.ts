import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    padding-bottom: 24px;
  }
`;

export const Content = styled.main`
  max-width: 420px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;

  a {
    color: #666360;
    display: block;
    margin-bottom: 24px;
    text-decoration: none;
    transition: color 0.2s;

    /* flex para alinhar conteúdo*/
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#80aaff')};
    }
  }
`;

export const Section = styled.section`
  height: 398px;
  padding: 2em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  form {
    padding: 10px;

    button {
      margin-top: 35px;
    }
  }
`;
