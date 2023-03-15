import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const StyledSubmitButton = styled.button`
    width: 100%;
    background-color: ${colors.black};
    border: solid 1px ${colors.black};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 6px 0px;
    color: ${colors.white};
    cursor: pointer;
    border-radius: 3px;
    transition: .3s;
    :hover{
        background-color: ${colors.white};
        color: ${colors.black};
    }
`;
