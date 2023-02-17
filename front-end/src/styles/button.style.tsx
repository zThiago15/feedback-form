import styled from "styled-components"

export const StyledButton = styled.button`
  position: relative;
  z-index: 10;

  color: white;
  font-size: 18px;
  background-color: ${({theme}) => theme.colors.yellow};

  padding: 15px;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background-color: #FCCC2A;
  }

  :disabled {
    background-color: #EAC64D;
    cursor: not-allowed;
  }
`;