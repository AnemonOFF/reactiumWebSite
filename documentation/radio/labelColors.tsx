import { Radio } from "../../reactiumui"

const ExampleLabelColors: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Radio labelColor="primary">Primary radio</Radio>
            <Radio color="warning" labelColor="warning">Warning radio</Radio>
            <Radio color="error" labelColor="error">Error radio</Radio>
            <Radio color="success" labelColor="success">Success radio</Radio>
            <Radio color="#F250A4" labelColor="#F250A4">Custom radio</Radio>
            <Radio gradient={['blue', 'red']} labelGradient={['blue', 'red']}>Gradient radio</Radio>
        </div>
    )
}

export default ExampleLabelColors;