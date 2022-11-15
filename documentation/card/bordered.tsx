import { Card, Text } from "../../reactiumui";

const ExampleBordered: React.FunctionComponent = () => {
    return (
        <Card css={{p: 10}} border>
            <Text>Card with border</Text>
        </Card>
    )
}

export default ExampleBordered;