import styled from "styled-components"

export const StyledButton = styled.button`
  position: relative;
  z-index: 10;

  color: white;
  font-size: 18px;
  background-color: #FAD34F;

  padding: 15px;
  border: none;
  border-radius: 40px;
  cursor: pointer;

  :hover {
    background-color: #FCCC2A;
  }

  :disabled {
    :hover {
      background-color: #EAC64D;
    }
    cursor: not-allowed;
  }
`;