import { Radio } from "reactiumui";

const ExampleSize: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Radio size="xxs">Xxs radio</Radio>
            <Radio size="xs">Xs radio</Radio>
            <Radio size="sm">Sm radio</Radio>
            <Radio size="md">Md radio</Radio>
            <Radio size="lg">Lg radio</Radio>
            <Radio size="xl">Xl radio</Radio>
            <Radio size="xxl">Xxl radio</Radio>
            <Radio size={50}>Custom 50px radio</Radio>
            <Radio size="5em">Custom 5em radio</Radio>
        </div>
    )
}

export default ExampleSize;