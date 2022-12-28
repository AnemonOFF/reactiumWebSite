import { Input } from "reactiumui";

const ExampleSizes: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Input placeholder="xs" size="xs" />
            <Input placeholder="sm" size="sm" />
            <Input placeholder="md" size="md" />
            <Input placeholder="lg" size="lg" />
            <Input placeholder="xl" size="xl" />
            <Input placeholder="xxl" size="xxl" />
            <Input placeholder="50px" size={50} />
            <Input placeholder="5em" size="5em" />
        </div>
    )
}

export default ExampleSizes;