import { Container, Text } from "reactiumui";

const ExampleQuote: React.FunctionComponent = () => {

    return (
        <Container>
            <Text blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text blockquote='clear' css={{mt: '$xs'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </Container>
    )
}

export default ExampleQuote;