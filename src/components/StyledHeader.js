import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding-bottom: 15px;
  background-color: lightcyan;
  box-shadow: 0 0 10px grey;
  & > .header-title {
    color: darkblue;
  }
  & > .header-text {
    font-style: italic;
  }
`;