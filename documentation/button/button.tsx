import { apiRows } from "../common";
import { DocData } from "../types";
import Codes from "./codes";
import ExampleColors from "./colors";
import ExampleCompact from "./compact";
import ExampleFontAndBorder from "./fontAndBorder";
import ExampleIcons from "./icons";
import ExampleRoundness from "./roundness";
import ExampleSizes from "./sizes";
import ExampleTypes from "./types";

const ButtonDoc: DocData = {
    name: 'Button',
    import: 'import {Button} from \'reactiumui\'',
    apis: [
        {
            name: 'Button props',
            rows: [
                apiRows['children'],
                { attribute: 'type', isRequired: false, type: ['border', 'solid', 'light', 'text', 'flat', 'ghost'], default: 'solid', version: '1.0.0-beta.1', description: 'Variants of button style' },
                { attribute: 'roundness', isRequired: false, type: ['default', 'square', 'round'], default: 'default', version: '1.0.0-beta.1', description: 'Variants of border radius' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'Set button color, depends on type' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0-beta.1', description: 'Set color as gradient' },
                { attribute: 'icon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Put icon in left side' },
                { attribute: 'rightIcon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Put icon in right side' },
                { attribute: 'iconSize', isRequired: false, type: ['number', 'string'], default: '18px', version: '1.0.0-beta.1', description: 'Set left icon size (width and height)' },
                { attribute: 'rightIconSize', isRequired: false, type: ['number', 'string'], default: '18px', version: '1.0.0-beta.1', description: 'Set right icon size (width and height)' },
                { attribute: 'size', isRequired: false, type: ['Space', 'number', 'string'], default: 'xs', version: '1.0.0-beta.1', description: 'Padding inside button' },
                { attribute: 'compact', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Make button more compact' },
                { attribute: 'fontSize', isRequired: false, type: ['FontSize', 'number', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'CSS font-size parameter' },
                { attribute: 'fontWeight', isRequired: false, type: ['FontWeight', 'number'], default: undefined, version: '1.0.0-beta.1', description: 'CSS font-weight parameter' },
                { attribute: 'borderWidth', isRequired: false, type: ['BorderWidth', 'number', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'CSS border-width parameter' },
                { attribute: 'onClick', isRequired: false, type: ['(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void'], default: undefined, version: '1.0.0-beta.1.1', description: 'HTML onClick attribute'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Types',
            uid: 'types',
            code: <ExampleTypes />,
            codeString: Codes['types'],
            // codeFilePath: 'documentation/button/types.tsx'
        },
        {
            name: 'Roundness',
            uid: 'roundness',
            code: <ExampleRoundness />,
            codeString: Codes['roundness'],
            // codeFilePath: 'documentation/button/roundness.tsx'
        },
        {
            name: 'Colors',
            uid: 'colors',
            code: <ExampleColors />,
            codeString: Codes['colors'],
            // codeFilePath: 'documentation/button/colors.tsx'
        },
        {
            name: 'Sizes',
            uid: 'sizes',
            code: <ExampleSizes />,
            codeString: Codes['sizes'],
            // codeFilePath: 'documentation/button/sizes.tsx'
        },
        {
            name: 'Compact',
            uid: 'compact',
            code: <ExampleCompact />,
            codeString: Codes['compact'],
            // codeFilePath: 'documentation/button/compact.tsx'
        },
        {
            name: 'Font and border',
            uid: 'fontandborder',
            code: <ExampleFontAndBorder />,
            codeString: Codes['fontandborder'],
            // codeFilePath: 'documentation/button/fontAndBorder.tsx'
        },
        {
            name: 'Icons',
            uid: 'icons',
            code: <ExampleIcons />,
            codeString: Codes['icons'],
            // codeFilePath: 'documentation/button/icons.tsx'
        }
    ]
}

export default ButtonDoc;