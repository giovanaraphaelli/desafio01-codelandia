import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 3rem 1rem;
  @media (max-width: 600px) {
    gap: 30px;
  }
`;
export default Container;
