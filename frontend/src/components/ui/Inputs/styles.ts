import styled from "styled-components";

import { colors } from "../../../styles/colors";

export const StyledAuthInput = styled.input`
    width: 100%;
    padding: 6px 12px;
    margin: 12px 0;
    border: solid 1px ${colors.gray};
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    ::placeholder{
        color: ${colors.black};
        opacity: .5;
    }
`