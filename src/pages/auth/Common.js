import styled from 'styled-components';

import Input from '../../styled-components/Input';
import Text from '../../styled-components/Text';

export const Logo = styled(Text)`
    margin-bottom: 57px;
    font-size: 18px;
`;
export const Title = styled(Text)`
    margin-bottom: 46px;
    font-size: 18px;
`;
export const FullInput = styled(Input)`
    width: 276px;
    height: 43px;
    text-align: center;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextUnderline = styled(Text)`
    text-decoration: underline;
`;
