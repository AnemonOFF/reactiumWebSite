import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    colors: `import { Checkbox } from "reactiumui";

    const ExampleColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Checkbox color="primary">Primary checkbox</Checkbox>
                <Checkbox color="warning">Warning checkbox</Checkbox>
                <Checkbox color="error">Error checkbox</Checkbox>
                <Checkbox color="success">Success checkbox</Checkbox>
                <Checkbox color="#F250A4">Custom checkbox</Checkbox>
                <Checkbox gradient={['blue', 'red']}>Gradient checkbox</Checkbox>
            </div>
        )
    }
    
    export default ExampleColors;`,
    default: `import { Checkbox } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <Checkbox>
                Default checkbox
            </Checkbox>
        )
    }
    
    export default ExampleDefault;`,
    disabled: `import { Checkbox } from "reactiumui";

    const ExampleDisabled: React.FunctionComponent = () => {
        return (
            <>
                <Checkbox disabled>Disabled checkbox</Checkbox>
            </>
        )
    }
    
    export default ExampleDisabled;`,
    icons: `import { AiFillSetting } from "react-icons/ai";
    import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
    import { Checkbox } from "reactiumui";
    
    const ExampleIcons: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Checkbox icon={<AiFillSetting />}>Icon checkbox</Checkbox>
                <Checkbox icon={<MdFavoriteBorder />} checkedIcon={<MdFavorite />}>Checkable icon checkbox</Checkbox>
                <Checkbox icon={<MdFavoriteBorder />} color="success">Success checkbox</Checkbox>
            </div>
        )
    }
    
    export default ExampleIcons;`,
    indeterminate: `import { Checkbox } from "reactiumui";

    const ExampleIndeterminate: React.FunctionComponent = () => {
        return (
            <Checkbox indeterminate>Indeterminate checkbox</Checkbox>
        )
    }
    
    export default ExampleIndeterminate;`,
    labelcolors: `import { Checkbox } from "reactiumui";

    const ExampleLabelColors: React.FunctionComponent = () => {
        return (
            <div style={{display: 'flex', gap: 15, flexWrap: 'wrap', alignItems: 'center'}}>
                <Checkbox labelColor="primary">Primary checkbox</Checkbox>
                <Checkbox color="warning" labelColor="warning">Warning checkbox</Checkbox>
                <Checkbox color="error" labelColor="error">Error checkbox</Checkbox>
                <Checkbox color="success" labelColor="success">Success checkbox</Checkbox>
                <Checkbox color="#F250A4" labelColor="#F250A4">Custom checkbox</Checkbox>
                <Checkbox gradient={['blue', 'red']} labelGradient={['blue', 'red']}>Gradient checkbox</Checkbox>
            </div>
        )
    }
    
    export default ExampleLabelColors;`,
    roundness: `import { Checkbox } from "reactiumui";

    const ExampleRoundness: React.FunctionComponent = () => {
        return (
            <>
                <Checkbox square>Square checkbox</Checkbox>
                <Checkbox round>Round checkbox</Checkbox>
            </>
        )
    }
    
    export default ExampleRoundness;`,
    size: `import { Checkbox } from "reactiumui";

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
    
    export default ExampleSize;`,
}

export default Codes;