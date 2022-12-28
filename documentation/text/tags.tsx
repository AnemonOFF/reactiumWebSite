import { Container, Text } from "reactiumui";

const ExampleTags: React.FunctionComponent = () => {

    return (
        <Container>
            <Text h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text p h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text h6 em>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text i b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </Container>
    )
}

export default ExampleTags;