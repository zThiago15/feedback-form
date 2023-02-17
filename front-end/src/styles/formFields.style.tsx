import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #DCDCDC;  
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  color: #2D2D2D;
  font-size: 18px;

  ::placeholder {
    color: #2D2D2D;
    opacity: 1; /* Firefox */
  }

  @media screen and (min-width: 1024px){
      width: 30em;

    }
`;

export const StyledTextarea = styled.textarea`
  border: 1px solid #DCDCDC;  
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #2D2D2D;

  ::placeholder {
    color: #2D2D2D;
    opacity: 1; /* Firefox */
  }

  width: 100%;
  max-width: 100%;
  min-width: 60%;

  height: 150px;
  max-height: 200px;
  min-height: 150px;

  @media screen and (min-width: 1024px){
    width: 30em;
  }
`;