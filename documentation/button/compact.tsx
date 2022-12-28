import { Button } from "reactiumui";

const ExampleCompact: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="solid" compact>Solid button</Button>
            <Button type="border" compact>Border button</Button>
            <Button type="flat" compact>Flat button</Button>
            <Button type="ghost" compact>Ghost button</Button>
            <Button type="light" compact>Light button</Button>
            <Button type="text" compact>Text button</Button>
        </div>
    )
}

export default ExampleCompact;