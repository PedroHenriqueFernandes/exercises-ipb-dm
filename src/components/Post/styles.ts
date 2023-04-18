import { Text, View } from "react-native";
import styled from 'styled-components/native'

export const Container = styled(View)`
    gap: 8px;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: #333333;
`;

export const TextContainer = styled(Text)`
    color: #F2F2F2;    
`;

export const Title = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: #F2F2F2;
    text-align: center;
`;