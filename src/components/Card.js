import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Div = styled.div`
  background-color: pink;
  width: 250px;
`;

const Card = ({ data }) => {
  const { removeItem } = useContext(TodoContext);
  return (
    <Div onClick={() => removeItem(data)}>
      Title: Create project
      <br />
      Prority: 1<h1>{data}</h1>
    </Div>
  );
};

export default Card;
