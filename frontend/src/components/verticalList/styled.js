import { styled } from "styled-components";

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100% !important;
  width: fit-content;
  padding-left: 60px;
  padding-right: 100px;
  justify-content: space-evenly;
  overflow: auto;
  border-right: 1px solid gray;
`;

const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;  
  margin-left: 20px;
  margin-right: 20px;
`;

const FullSize = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Vertical, Horizontal, FullSize };
