import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 15px 0;
    border-bottom: solid 1px ${colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledContainer = styled.div`
    a:last-child{
        margin-left: 10px;
    }
`