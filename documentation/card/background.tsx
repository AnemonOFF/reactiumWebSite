import { Card, Container, Text } from "../../reactiumui";

const ExampleBackground: React.FunctionComponent = () => {
    return (
        <Container>
            <Card css={{p: 10, my: 10}} color='primary'><Text>Primary card</Text></Card>
            <Card css={{p: 10, my: 10}} color='success'><Text>Success card</Text></Card>
            <Card css={{p: 10, my: 10}} color='error'><Text>Error card</Text></Card>
            <Card css={{p: 10, my: 10}} color='warning'><Text>Warning card</Text></Card>
            <Card css={{p: 10, my: 10}} color='$pink600'><Text>Pink card</Text></Card>
            <Card css={{p: 10, my: 10}} transparent><Text>Transparent card</Text></Card>
        </Container>
    )
}

export default ExampleBackground;