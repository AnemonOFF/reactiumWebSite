import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    colors: `import { Input } from "reactiumui";
    import { MdKeyboardVoice } from "react-icons/md";
    
    const ExampleColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Input color="secondary" placeholder="yoursite" postfix=".com" />
                <Input color="green600" placeholder="voice search" postfix={<MdKeyboardVoice />} />
            </div>
        )
    }
    
    export default ExampleColors;`,
    compact: `import { Input } from "reactiumui";

    const ExampleCompact: React.FunctionComponent = () => {
        return (
            <Input compact placeholder="compact" />
        )
    }
    
    export default ExampleCompact;`,
    default: `import { Input } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <Input placeholder="default" />
        )
    }
    
    export default ExampleDefault;`,
    fontandborder: `import { Input } from "reactiumui";
    import { MdKeyboardVoice } from "react-icons/md";
    
    const ExampleFontAndBorder: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Input placeholder="xs font" fontSize="xs" />
                <Input placeholder="sm extrabold font" fontSize="sm" fontWeight="extrabold" />
                <Input placeholder="md font" fontSize="md" />
                <Input placeholder="lg font + normal border" fontSize="lg" borderWidth="normal" />
                <Input placeholder="xl font extrabold" size="xl" fontSize="xl" borderWidth="extrabold" postfix={<MdKeyboardVoice />} iconSize={30} />
            </div>
        )
    }
    
    export default ExampleFontAndBorder;`,
    label: `import { Input } from "reactiumui";

    const ExampleLabel: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Input label="custom label" placeholder="yoursite" prefix="https://" postfix=".com" />
            </div>
        )
    }
    
    export default ExampleLabel;`,
    prepost: `import { Input } from "reactiumui";
    import { MdKeyboardVoice } from "react-icons/md";
    
    const ExamplePrePost: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Input placeholder="yoursite" prefix="https://" postfix=".com" />
                <Input placeholder="voice search" postfix={<MdKeyboardVoice />} />
            </div>
        )
    }
    
    export default ExamplePrePost;`,
    sizes: `import { Input } from "reactiumui";

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
    
    export default ExampleSizes;`,
    textcolors: `import { Input } from "reactiumui";
    import { MdKeyboardVoice } from "react-icons/md";
    
    const ExampleTextColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Input textColor="secondary" placeholder="yoursite" postfix=".com" />
                <Input textColor="green600" placeholder="voice search" postfix={<MdKeyboardVoice />} />
            </div>
        )
    }
    
    export default ExampleTextColors;`,
}

export default Codes;