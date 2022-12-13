import { Checkbox } from "../../reactiumui"

const ExampleSize: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Checkbox size="xxs">Xxs checkbox</Checkbox>
            <Checkbox size="xs">Xs checkbox</Checkbox>
            <Checkbox size="sm">Sm checkbox</Checkbox>
            <Checkbox size="md">Md checkbox</Checkbox>
            <Checkbox size="lg">Lg checkbox</Checkbox>
            <Checkbox size="xl">Xl checkbox</Checkbox>
            <Checkbox size="xxl">Xxl checkbox</Checkbox>
            <Checkbox size={50}>Custom 50px checkbox</Checkbox>
            <Checkbox size="5em">Custom 5em checkbox</Checkbox>
        </div>
    )
}

export default ExampleSize;