import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    bordered: `import { Card, Text } from "reactiumui";

    const ExampleBordered: React.FunctionComponent = () => {
        return (
            <Card css={{p: 10}} border>
                <Text>Card with border</Text>
            </Card>
        )
    }
    
    export default ExampleBordered;`,
    background: `import { Card, Container, Text } from "reactiumui";

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
    
    export default ExampleBackground;`,
    default: `import { Card, Text } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <Card css={{p: 10}}>
                <Text>Default card component</Text>
            </Card>
        )
    }
    
    export default ExampleDefault;`,
    pressable: `import { Card, Text } from "reactiumui";

    const ExamplePressable: React.FunctionComponent = () => {
        return (
            <Card css={{p: 10}} isPressable>
                <Text>Press me!</Text>
            </Card>
        )
    }
    
    export default ExamplePressable;`,
    square: `import { Card, Container, Text } from "reactiumui";

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
    
    export default ExampleSquare;`,
    types: `import { Card, Container, Text } from "reactiumui";

    const ExampleTypes: React.FunctionComponent = () => {
        return (
            <Container>
                <Card css={{p: 10, my: 10}} type={'cloud'}><Text>Cloud card</Text></Card>
                <Card css={{p: 10, my: 10}} type={'flat'}><Text>Flat card</Text></Card>
            </Container>
        )
    }
    
    export default ExampleTypes;`,
}

export default Codes;