import { Checkbox } from "reactiumui";

const ExampleLabelColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Checkbox labelColor="primary">Primary checkbox</Checkbox>
            <Checkbox color="warning" labelColor="warning">Warning checkbox</Checkbox>
            <Checkbox color="error" labelColor="error">Error checkbox</Checkbox>
            <Checkbox color="success" labelColor="success">Success checkbox</Checkbox>
            <Checkbox color="#F250A4" labelColor="#F250A4">Custom checkbox</Checkbox>
            <Checkbox gradient={['blue', 'red']} labelGradient={['blue', 'red']}>Gradient checkbox</Checkbox>
        </div>
    )
}

export default ExampleLabelColors;