import styled from 'styled-components';

export const DetailContainer = styled.div`
  /* border: solid red; */
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border: 1px solid rgb(248, 181, 37);
  border-radius: 0.5rem;
  @media (min-width: 860px) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 100px;
  padding: 15px 10px;
  border: 1px;
  margin: 0.2rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(to right, #ffd160, #f8b525);
  color: #111110;
  :hover {
    background: linear-gradient(#f8b525, #ffd160);
    color: rgb(24 23 23 / 95%);
  }
  /*  @media (min-width: 860px) {
    padding: 10px 10px;
  } */
`;

export const TitleDetail = styled.h2`
  font-size: 16px;
  color: #fbc13e;
  margin: 0.3rem 0;
  @media (min-width: 400px) {
    font-size: 20px;
    margin: 0.5rem 0;
  }
`;

export const ImgDetail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  max-width: 409px;
  max-height: 302px;
  /*  @media (min-width: 700px) {
    width: 100%;
    height: 300px;
  }*/
  @media (min-width: 1000px) {
    margin: 2rem 0;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;

export const Item = styled.li`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 0.2rem;
`;

export const ContainerInfoDetail = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 860px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
  }
`;
