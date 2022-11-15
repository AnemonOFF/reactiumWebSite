import { Card, Container, Text } from "../../reactiumui";

const ExampleTypes: React.FunctionComponent = () => {
    return (
        <Container>
            <Card css={{p: 10, my: 10}} type={'cloud'}><Text>Cloud card</Text></Card>
            <Card css={{p: 10, my: 10}} type={'flat'}><Text>Flat card</Text></Card>
        </Container>
    )
}

export default ExampleTypes;