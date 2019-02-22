import React from "react";
import styled from 'styled-components'

const Div = styled.div`
  background-color: pink;
  width: 250px;
`

const Card = ({data}) => {
  return (
    <Div>
      Title: Create project
      <br />
      Prority: 1
      <h1>{data}</h1>
    </Div>
  );
};

export default Card;
