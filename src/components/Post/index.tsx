import { Text, View } from "react-native";
import { Container, TextContainer, Title } from "./styles";

interface PostProps{
    id: string;
    userId: string;  
    title: string;
    body: string;
}

export function Post({title, body}: PostProps){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <TextContainer>
                {body}
            </TextContainer>
        </Container>
    )
}