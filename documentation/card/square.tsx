import { Card, Container, Text } from "reactiumui";

const ExampleSquare: React.FunctionComponent = () => {
    return (
        <Container>
            <Card css={{p: 10, my: 10}} square>
                <Text>Square card</Text>
            </Card>
            <Card css={{p: 10, my: 10}} type='flat' square>
                <Text>Square flat card</Text>
            </Card>
        </Container>
    )
}

export default ExampleSquare;