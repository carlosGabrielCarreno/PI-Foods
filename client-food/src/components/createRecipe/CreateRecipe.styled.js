import styled from 'styled-components';

export const ContainerCreateRecipe = styled.div`
  border-radius: 0.5rem;
  width: 96%;
  height: 100%;
  color: #fff;
  padding: 0.8rem;
  max-width: 1200px;
  border: 1px solid rgb(248, 181, 37);
  margin: 0.8rem auto;
  overflow: hidden;
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
  height: 100%;
  margin: 0 auto;
  transition: all 2s ease;
  @media (min-width: 850px) {
    height: 100vh;
  }
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
  margin: 0.5rem 0;

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

export const SpanCheck = styled(Span)`
  color: grey;
`;

export const ContainerFormInputs = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 30%;
  }
`;

export const ListItemChecked = styled.ul`
  margin: 1rem;
  position: relative;
`;

export const MessageAlert = styled.span`
  &.alert {
    max-width: 300px;
    color: #fff;
    font-size: 12px;
    padding: 8px 4px;
    border-radius: 5px;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
  }
`;
