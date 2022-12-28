import { Card, Text } from "reactiumui";

const ExamplePressable: React.FunctionComponent = () => {
    return (
        <Card css={{p: 10}} isPressable>
            <Text>Press me!</Text>
        </Card>
    )
}

export default ExamplePressable;