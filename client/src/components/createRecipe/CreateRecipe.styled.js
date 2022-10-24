import styled from 'styled-components';

export const ContainerCreateRecipe = styled.div`
  /* border: solid red; */
  width: 100vw;
  height: 100vh;
  color: #fff;
  padding: 0.7rem;
`;

export const InputForm = styled.input`
  margin: 1rem;
  padding: 15px 10px;
  border: 0;
  border-bottom: 1px solid gray;
  background-color: transparent;
  color: #fff;
  outline: none;
  max-width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 95%;
  margin: 0 auto;
`;

export const TextArea = styled.textarea`
  padding: 15px 10px;
  max-width: 300px;
  border: 0;
  border-bottom: 1px solid gray;
  outline: none;
  margin: 1rem;
  background-color: transparent;
  color: #fff;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 10px;
  border: 0;
  backdrop-filter: blur(10px);
  cursor: pointer;
  height: 40px;
  font-weight: 600;
  font-size: 15px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  max-width: 300px;
  margin: 1rem 0;
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
`;

export const Item = styled.li`
  border: 0;
  padding: 5px;
  margin: 0.2rem;
  border-radius: 0.2rem;
  background: linear-gradient(to right, rgb(209 173 87), rgb(162 123 39));
  color: #111110;
  font-size: 12px;
  cursor: auto;
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
  @media (min-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 800px) {
    padding: 10px;
  }
`;

export const ContainerItems = styled.ul`
  border: 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 800px) {
  }
`;

export const Span = styled.span`
  color: red;
  padding: 5px;
  cursor: pointer;
  @media (min-width: 800px) {
    padding: 10px 5px;
  }
`;

export const ContainerFormInputs = styled.div`
  @media (min-width: 800px) {
    /* border: solid green; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 30%;
  }
`;
