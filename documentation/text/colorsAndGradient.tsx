import { Container, Text } from "reactiumui";

const ExampleColorsAndGradient: React.FunctionComponent = () => {

    return (
        <Container>
            <Text color="primary" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text color="success" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text color="error" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text color="warn" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text color="$pink600" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Text gradient={['$green600', '$blue600', '$red600']} fontSize="$3xl" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </Container>
    )
}

export default ExampleColorsAndGradient;