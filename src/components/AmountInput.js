import styled from "styled-components";
import InputWhite from "../styled-components/InputWhite";
import { marginLg, inputHeightLg } from '../constants/dimentions';

const AmountInput = styled(InputWhite)`
    height: 59px;
    text-align: center;
    margin: 22px 0;
    box-shadow: 0 0px 10px grey;
    border: none;
    outline: none;
`;

export default AmountInput;
