import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 350px;

    justify-content: space-evenly;
    align-items: center;

    margin: 20px 10em;

    @media only screen and (max-width: 1024px){
        main {
            flex-direction: row;
        }
    }
`;