import { Button } from "reactiumui";

const ExampleColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="solid" color="primary">Primary button</Button>
            <Button type="solid" gradient={['blue', 'red']}>Gradient button</Button>
            <Button type="border" color="warning">Warning button</Button>
            <Button type="flat" color="secondary">Secondary button</Button>
            <Button type="flat" gradient={['blue', 'red']}>Gradient flat button</Button>
            <Button type="solid" color="error">Error button</Button>
            <Button type="ghost" color="success">Success button</Button>
            <Button type="text" color="#F250A4">Custom button</Button>
            <Button type="text" gradient={['blue', 'red']}>Gradient text button</Button>
            <Button type="light" gradient={['blue', 'red']}>Gradient light button</Button>
        </div>
    )
}

export default ExampleColors;