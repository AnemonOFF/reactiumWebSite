import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    colorsandgradient: `import { Container, Text } from "reactiumui";

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
    
    export default ExampleColorsAndGradient;`,
    quote: `import { Container, Text } from "reactiumui";

    const ExampleQuote: React.FunctionComponent = () => {
    
        return (
            <Container>
                <Text blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                <Text blockquote='clear' css={{mt: '$xs'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            </Container>
        )
    }
    
    export default ExampleQuote;`,
    tags: `import { Container, Text } from "reactiumui";

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
    
    export default ExampleTags;`,
}

export default Codes;