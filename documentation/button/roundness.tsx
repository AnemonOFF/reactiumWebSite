import { Button } from "../../reactiumui";

const ExampleRoundness: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="solid" roundness="default">Solid button</Button>
            <Button type="border" roundness="round">Border round button</Button>
            <Button type="solid" roundness="square">Solid square button</Button>
            <Button type="flat" roundness="round">Flat round button</Button>
            <Button type="solid" roundness="round">Solid round button</Button>
            <Button type="border" roundness="square">Border square button</Button>
        </div>
    )
}

export default ExampleRoundness;