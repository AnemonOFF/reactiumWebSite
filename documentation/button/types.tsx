import { Button } from "reactiumui";

const ExampleTypes: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="border">Border button</Button>
            <Button type="solid">Solid button</Button>
            <Button type="text">Text button</Button>
            <Button type="ghost">Ghost button</Button>
            <Button type="flat">Flat button</Button>
            <Button type="light">Light button</Button>
        </div>
    )
}

export default ExampleTypes;