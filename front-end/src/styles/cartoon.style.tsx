import styled from 'styled-components';

export const StyledGreenCartoon = styled.img`
    position: absolute;
    top: 6.5em;
    right: 2em;

    width: 3em;

    @media screen and (min-width: 1024px) {
        width: 5em;
        top: 4em;
        right: 19em;

        transform: rotate(295deg);
    }
`;

export const StyledPinkCartoon = styled.img`
    position: absolute;
    width: 10em;

    bottom: 0;
    right: 0;
`;

export const StyledYellowCartoon = styled.img`
    position: absolute;
    left: 0;
    top: 10em;

    width: 5em;

    @media screen and (min-width: 1024px) {
        width: 10em;
    }
`;