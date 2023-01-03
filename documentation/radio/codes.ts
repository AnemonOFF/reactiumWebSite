import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    colors: `import { Radio } from "reactiumui";

    const ExampleColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Radio color="primary">Primary radio</Radio>
                <Radio color="warning">Warning radio</Radio>
                <Radio color="error">Error radio</Radio>
                <Radio color="success">Success radio</Radio>
                <Radio color="#F250A4">Custom radio</Radio>
                <Radio gradient={['blue', 'red']}>Gradient radio</Radio>
            </div>
        )
    }
    
    export default ExampleColors;`,
    default: `import { Radio } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <Radio>
                Default radio
            </Radio>
        )
    }
    
    export default ExampleDefault;`,
    disabled: `import { Radio } from "reactiumui";

    const ExampleDisabled: React.FunctionComponent = () => {
        return (
            <>
                <Radio disabled>Disabled radio</Radio>
            </>
        )
    }
    
    export default ExampleDisabled;`,
    icons: `import { AiFillSetting } from "react-icons/ai";
    import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
    import { Radio } from "reactiumui";
    
    const ExampleIcons: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Radio icon={<AiFillSetting />}>Icon radio</Radio>
                <Radio icon={<MdFavoriteBorder />} checkedIcon={<MdFavorite />}>Checkable icon radio</Radio>
                <Radio icon={<MdFavoriteBorder />} color="success">Success radio</Radio>
            </div>
        )
    }
    
    export default ExampleIcons;`,
    indeterminate: `import { Radio } from "reactiumui";

    const ExampleIndeterminate: React.FunctionComponent = () => {
        return (
            <Radio indeterminate>Indeterminate radio</Radio>
        )
    }
    
    export default ExampleIndeterminate;`,
    labelcolors: `import { Radio } from "reactiumui";

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
    
    export default ExampleLabelColors;`,
    roundness: `import { Radio } from "reactiumui";

    const ExampleRoundness: React.FunctionComponent = () => {
        return (
            <>
                <Radio square>Square radio</Radio>
                <Radio roundness>Round radio</Radio>
            </>
        )
    }
    
    export default ExampleRoundness;`,
    size: `import { Radio } from "reactiumui";

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
    
    export default ExampleSize;`,
}

export default Codes;