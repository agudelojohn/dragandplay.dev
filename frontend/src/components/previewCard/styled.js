import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0,0,0,0.6);
  }
`;

export { CardWrapper };
