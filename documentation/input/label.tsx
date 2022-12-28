import { Input } from "reactiumui";

const ExampleLabel: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input label="custom label" placeholder="yoursite" prefix="https://" postfix=".com" />
        </div>
    )
}

export default ExampleLabel;