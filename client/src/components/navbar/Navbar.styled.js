import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: 8%;
  /* border: solid red; */
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 15px;
  height: 15px;
  color: rgb(255, 209, 96);
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0.2rem;
`;

export const Line = styled.hr`
  width: 9px;

  /* background-color: #f8b525; */
  margin: 0 0.2rem 0 0;
  border: 0.5px solid #ffd160;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
`;
