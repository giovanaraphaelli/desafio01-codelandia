import React from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

const HeaderContainer = styled.header`
  width: 100%;
  height: 250px;
  background: linear-gradient(88.27deg, #574ae8 0%, #3ea1db 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  padding: 1rem;
`;

const HeaderNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;

    a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  input {
    color: #fff;
    font-size: 1.2rem;
    width: 100%;
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }
  }

  @media (max-width: 600px) {
    input {
      color: #fff;
      font-size: 0.875rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderNav>
          <ul>
            <li>
              <a href="">Codelândia</a>
            </li>
            <li>
              <a href="">blog</a>
            </li>
          </ul>
        </HeaderNav>
        <InputWrapper>
          <GoSearch color="#FFF" size={24} />
          <input type="text" name="" id="" placeholder="Search the blog" />
        </InputWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
