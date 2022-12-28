import { Radio } from "reactiumui";

const ExampleColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Radio color="primary">Primary radio</Radio>
            <Radio color="warning">Warning radio</Radio>
            <Radio color="error">Error radio</Radio>
            <Radio color="success">Success radio</Radio>
            <Radio color="#F250A4">Custom radio</Radio>
            <Radio gradient={['blue', 'red']}>Gradient radio</Radio>
        </div>
    )
}

export default ExampleColors;