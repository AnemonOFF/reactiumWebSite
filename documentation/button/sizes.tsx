import { Button } from "../../reactiumui";

const ExampleSizes: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="solid" size="xxs">Xxs button</Button>
            <Button type="solid" size="xs">Xs button</Button>
            <Button type="solid" size="sm">Sm button</Button>
            <Button type="solid" size="md">Md button</Button>
            <Button type="solid" size="lg">Lg button</Button>
            <Button type="solid" size="xl">Xl button</Button>
            <Button type="solid" size="xxl">Xxl button</Button>
            <Button type="solid" size={50}>Custom 50px button</Button>
            <Button type="solid" size="5em">Custom 5em button</Button>
        </div>
    )
}

export default ExampleSizes;