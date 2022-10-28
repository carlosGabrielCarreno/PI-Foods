import styled, { keyframes } from 'styled-components';

export const rotatingText = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  color: #ffd160;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95vw;
  height: 95vh;
  gap: 1rem;
`;

export const Animation = styled.div`
  animation: ${rotatingText} 1s linear infinite;
`;
