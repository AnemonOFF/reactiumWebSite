import { Card, Container, Text } from "../../reactiumui";

const ExampleCentralized: React.FunctionComponent = () => {
    return (
        <Container all={400} center css={{m: '$xs'}}>
            <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                <Text h4 color='$white'>Look, I am in center!</Text>
            </Card>
        </Container>
    )
}

export default ExampleCentralized;