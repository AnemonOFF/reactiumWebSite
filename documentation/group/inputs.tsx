import { Input, Group } from "../../reactiumui"

const ExampleInputs: React.FunctionComponent = () => {
    return (
        <Group>
            <Input html={{placeholder: 'first'}} />
            <Input html={{placeholder: 'second'}} />
            <Input html={{placeholder: 'third'}} />
        </Group>
    )
}

export default ExampleInputs;