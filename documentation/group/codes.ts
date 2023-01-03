import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    buttons: `import { Button, Group } from "reactiumui";

    const ExampleButtons: React.FunctionComponent = () => {
        return (
            <Group>
                <Button type="border">first</Button>
                <Button type="border">second</Button>
                <Button type="border">third</Button>
            </Group>
        )
    }
    
    export default ExampleButtons;`,
    combo: `import { Input, Group, Button } from "reactiumui";
    import { MdKeyboardVoice } from "react-icons/md";
    import { AiOutlineSearch } from "react-icons/ai";
    
    const ExampleCombo: React.FunctionComponent = () => {
        return (
            <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center' }}>
                <Group>
                    <Input placeholder="first" />
                    <Button>search</Button>
                </Group>
                <Group>
                    <Input placeholder="first" postfix={<MdKeyboardVoice />} />
                    <Button icon={<AiOutlineSearch />} />
                </Group>
            </div>
        )
    }
    
    export default ExampleCombo;`,
    inputs: `import { Input, Group } from "reactiumui";

    const ExampleInputs: React.FunctionComponent = () => {
        return (
            <Group>
                <Input placeholder="first" />
                <Input placeholder="second" />
                <Input placeholder="third" />
            </Group>
        )
    }
    
    export default ExampleInputs;`,
}

export default Codes;