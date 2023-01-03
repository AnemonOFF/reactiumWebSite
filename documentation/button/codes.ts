import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    colors: `import { Button } from "reactiumui";

    const ExampleColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Button type="solid" color="primary">Primary button</Button>
                <Button type="solid" gradient={['blue', 'red']}>Gradient button</Button>
                <Button type="border" color="warning">Warning button</Button>
                <Button type="flat" color="secondary">Secondary button</Button>
                <Button type="flat" gradient={['blue', 'red']}>Gradient flat button</Button>
                <Button type="solid" color="error">Error button</Button>
                <Button type="ghost" color="success">Success button</Button>
                <Button type="text" color="#F250A4">Custom button</Button>
                <Button type="text" gradient={['blue', 'red']}>Gradient text button</Button>
                <Button type="light" gradient={['blue', 'red']}>Gradient light button</Button>
            </div>
        )
    }
    
    export default ExampleColors;`,
    compact: `import { Button } from "reactiumui";

    const ExampleCompact: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Button type="solid" compact>Solid button</Button>
                <Button type="border" compact>Border button</Button>
                <Button type="flat" compact>Flat button</Button>
                <Button type="ghost" compact>Ghost button</Button>
                <Button type="light" compact>Light button</Button>
                <Button type="text" compact>Text button</Button>
            </div>
        )
    }
    
    export default ExampleCompact;`,
    fontandborder: `import { Button } from "reactiumui";

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
    
    export default ExampleFontAndBorder;`,
    icons: `import { Button } from "reactiumui";
    import { AiFillCaretDown, AiFillSetting } from "react-icons/ai";
    
    const ExampleIcons: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Button icon={<AiFillSetting />}>Default icon</Button>
                <Button type="light" icon={<AiFillSetting />}>Icon with light button</Button>
                <Button type="text" rightIcon={<AiFillSetting />}>Right icon with text button</Button>
                <Button type="border" rightIcon={<AiFillCaretDown />}>Right icon</Button>
                <Button type="flat" icon={<AiFillSetting />} rightIcon={<AiFillCaretDown />}>Both icons</Button>
                <Button type="ghost" icon={<AiFillSetting />} iconSize={40}>Custom icon size</Button>
            </div>
        )
    }
    
    export default ExampleIcons;`,
    roundness: `import { Button } from "reactiumui";

    const ExampleRoundness: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Button type="solid" roundness="default">Solid button</Button>
                <Button type="border" roundness="round">Border round button</Button>
                <Button type="solid" roundness="square">Solid square button</Button>
                <Button type="flat" roundness="round">Flat round button</Button>
                <Button type="solid" roundness="round">Solid round button</Button>
                <Button type="border" roundness="square">Border square button</Button>
            </div>
        )
    }
    
    export default ExampleRoundness;`,
    sizes: `import { Button } from "reactiumui";

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
    
    export default ExampleSizes;`,
    types: `import { Button } from "reactiumui";

    const ExampleTypes: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Button type="border">Border button</Button>
                <Button type="solid">Solid button</Button>
                <Button type="text">Text button</Button>
                <Button type="ghost">Ghost button</Button>
                <Button type="flat">Flat button</Button>
                <Button type="light">Light button</Button>
            </div>
        )
    }
    
    export default ExampleTypes;`,
}

export default Codes;