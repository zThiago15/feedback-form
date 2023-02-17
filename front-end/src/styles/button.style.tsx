import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 5px;
  color: white;
  background-color: ${({theme}) => theme.colors.yellow}
`;