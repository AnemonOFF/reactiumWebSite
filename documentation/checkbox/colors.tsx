import { Checkbox } from "reactiumui";

const ExampleColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Checkbox color="primary">Primary checkbox</Checkbox>
            <Checkbox color="warning">Warning checkbox</Checkbox>
            <Checkbox color="error">Error checkbox</Checkbox>
            <Checkbox color="success">Success checkbox</Checkbox>
            <Checkbox color="#F250A4">Custom checkbox</Checkbox>
            <Checkbox gradient={['blue', 'red']}>Gradient checkbox</Checkbox>
        </div>
    )
}

export default ExampleColors;