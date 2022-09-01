import styled from 'styled-components';
import { FaRegHeart, FaArrowRight } from 'react-icons/fa';

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 5px;

  h2 {
    color: #1a202c;
    font-size: 1.625rem;
  }
  p {
    color: #717171;
    font-size: 1.125rem;
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.125rem;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.625rem;
    }
  }
`;

const SeeMore = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #574ae8;
    margin-right: 0.2rem;
    transition: 0.4s;
    &:hover {
      margin-right: 0.5rem;
    }
  }
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #717171;
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    p {
      font-size: 0.875rem;
    }
  }
`;

import React from 'react';

export default function Card(props) {
  return (
    <CardWrapper>
      <div>
        <CardDetails>
          <p>{props.date}</p>
          <span>
            <FaRegHeart
              size={20}
              style={{ color: '#574AE8', cursor: 'pointer' }}
            />
          </span>
        </CardDetails>
      </div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <SeeMore>
        <a href={props.url} target="_blank">
          Read More
        </a>
        <FaArrowRight style={{ color: '#574AE8' }} />
      </SeeMore>
    </CardWrapper>
  );
}
