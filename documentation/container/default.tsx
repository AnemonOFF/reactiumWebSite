import { Card, Container, Text } from "../../reactiumui";

const ExampleDefault: React.FunctionComponent = () => {
    return (
        <Container all={400} css={{m: '$xs'}}>
            <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                <Text h4 color='$white'>Simple container with card</Text>
            </Card>
        </Container>
    )
}

export default ExampleDefault;