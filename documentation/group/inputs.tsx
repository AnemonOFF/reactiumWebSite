import { Input, Group } from "reactiumui";

const ExampleInputs: React.FunctionComponent = () => {
    return (
        <Group>
            <Input placeholder="first" />
            <Input placeholder="second" />
            <Input placeholder="third" />
        </Group>
    )
}

export default ExampleInputs;