import { Button } from "reactiumui";

const ExampleFontAndBorder: React.FunctionComponent = () => {
    return (
        <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
            <Button type="solid" fontSize="lg">Lg font button</Button>
            <Button type="solid" fontSize="md" fontWeight="extrabold">Extrabold md button</Button>
            <Button type="border" fontWeight="thin">Thin button</Button>
            <Button type="border" borderWidth="normal">Border normal button</Button>
            <Button type="border" borderWidth="bold">Border bold button</Button>
            <Button type="border" borderWidth="black">Border black button</Button>
        </div>
    )
}

export default ExampleFontAndBorder;