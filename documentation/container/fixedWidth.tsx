import { Card, Container, Text } from "../../reactiumui";

const ExampleFixedWidth: React.FunctionComponent = () => {
    return (
        <Container all={400} fixed css={{m: '$xs'}}>
            <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                <Text h4 color='$white'>I`m fixed. Try to change my size!</Text>
            </Card>
        </Container>
    )
}

export default ExampleFixedWidth;