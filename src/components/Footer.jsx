import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;

  a {
    color: #574ae8;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        developed by{' '}
        <a href="https://giovanaraphaelli.vercel.app/" target="_blank">
          @girapha
        </a>
      </p>
    </FooterWrapper>
  );
}
