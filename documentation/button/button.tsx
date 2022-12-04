import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleColors from "./colors";
import ExampleFontAndBorder from "./fontAndBorder";
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
                { attribute: 'type', isRequired: false, type: ['border', 'solid', 'light', 'text', 'flat', 'ghost'], default: 'solid', version: '1.0.0', description: 'Variants of button style' },
                { attribute: 'roundness', isRequired: false, type: ['default', 'square', 'round'], default: 'default', version: '1.0.0', description: 'Variants of border radius' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0', description: 'Set button color, depends on type' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Set color as gradient' },
                { attribute: 'size', isRequired: false, type: ['Space', 'number', 'string'], default: 'xs', version: '1.0.0', description: 'Padding inside button' },
                { attribute: 'fontSize', isRequired: false, type: ['FontSize', 'number', 'string'], default: undefined, version: '1.0.0', description: 'CSS font-size parameter' },
                { attribute: 'fontWeight', isRequired: false, type: ['FontWeight', 'number'], default: undefined, version: '1.0.0', description: 'CSS font-weight parameter' },
                { attribute: 'borderWidth', isRequired: false, type: ['BorderWidth', 'number', 'string'], default: undefined, version: '1.0.0', description: 'CSS border-width parameter' },
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
            codeFilePath: 'documentation/button/types.tsx'
        },
        {
            name: 'Roundness',
            uid: 'roundness',
            code: <ExampleRoundness />,
            codeFilePath: 'documentation/button/roundness.tsx'
        },
        {
            name: 'Colors',
            uid: 'colors',
            code: <ExampleColors />,
            codeFilePath: 'documentation/button/colors.tsx'
        },
        {
            name: 'Sizes',
            uid: 'sizes',
            code: <ExampleSizes />,
            codeFilePath: 'documentation/button/sizes.tsx'
        },
        {
            name: 'Font and border',
            uid: 'fontandborder',
            code: <ExampleFontAndBorder />,
            codeFilePath: 'documentation/button/fontAndBorder.tsx'
        }
    ]
}

export default ButtonDoc;