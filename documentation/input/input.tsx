import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleColors from "./colors";
import ExampleCompact from "./compact";
import ExampleDefault from "./default";
import ExampleFontAndBorder from "./fontAndBorder";
import ExampleLabel from "./label";
import ExamplePrePost from "./prepost";
import ExampleSizes from "./sizes";
import ExampleTextColors from "./textColors";

const InputDoc: DocData = {
    name: 'Input',
    import: 'import {Input} from \'reactiumui\';',
    apis: [
        {
            name: 'Input props',
            rows: [
                apiRows['children'],
                { attribute: 'variants', isRequired: false, type: ['default'], default: 'default', version: '1.0.0-beta.1', description: 'Variants of input visual style' },
                { attribute: 'roundness', isRequired: false, type: ['default', 'square', 'round'], default: 'default', version: '1.0.0-beta.1', description: 'Variants of border radius' },
                { attribute: 'prefix', isRequired: false, type: ['string', 'ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Prefix inside input' },
                { attribute: 'postfix', isRequired: false, type: ['string', 'ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Postfix (sufix) inside input' },
                { attribute: 'label', isRequired: false, type: ['string'], default: undefined, version: '1.0.0-beta.1', description: 'Label text outside input' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: 'primary', version: '1.0.0-beta.1', description: 'Set input color' },
                { attribute: 'textColor', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: 'text', version: '1.0.0-beta.1', description: 'Set input text color' },
                { attribute: 'size', isRequired: false, type: ['Space', 'number', 'string'], default: 'xs', version: '1.0.0-beta.1', description: 'Padding inside input' },
                { attribute: 'iconSize', isRequired: false, type: ['number', 'string'], default: '18px', version: '1.0.0-beta.1', description: 'Set icons size (width and height)' },
                { attribute: 'fontSize', isRequired: false, type: ['FontSize', 'number', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'CSS font-size parameter' },
                { attribute: 'fontWeight', isRequired: false, type: ['FontWeight', 'number'], default: undefined, version: '1.0.0-beta.1', description: 'CSS font-weight parameter' },
                { attribute: 'borderWidth', isRequired: false, type: ['BorderWidth', 'number', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'CSS border-width parameter' },
                { attribute: 'placeholder', isRequired: false, type: ['string'], default: undefined, version: '1.0.0-beta.1', description: 'HTML placeholder attribute' },
                { attribute: 'onChange', isRequired: false, type: ['(e: ChangeEvent<HTMLInputElement>) => void'], default: undefined, version: '1.0.0-beta.1.1', description: 'HTML onChange attribute' },
                { attribute: 'type', isRequired: false, type: ['HTMLInputTypeAttribute'], default: undefined, version: '1.0.0-beta.1.1', description: 'HTML type attribute' },
                { attribute: 'value', isRequired: false, type: ['string', 'number', 'readonly string[]'], default: undefined, version: '1.0.0-beta.1.1', description: 'HTML value attribute' },
                { attribute: 'compact', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Make input more compact' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            code: <ExampleDefault />,
            codeFilePath: 'documentation/input/default.tsx'
        },
        {
            name: 'Compact',
            uid: 'compact',
            code: <ExampleCompact />,
            codeFilePath: 'documentation/input/compact.tsx'
        },
        {
            name: 'Pre(-post)fix',
            uid: 'prepostfix',
            code: <ExamplePrePost />,
            codeFilePath: 'documentation/input/prepost.tsx'
        },
        {
            name: 'Colors',
            uid: 'colors',
            code: <ExampleColors />,
            codeFilePath: 'documentation/input/colors.tsx'
        },
        {
            name: 'Text colors',
            uid: 'textcolors',
            code: <ExampleTextColors />,
            codeFilePath: 'documentation/input/textColors.tsx'
        },
        {
            name: 'Label',
            uid: 'label',
            code: <ExampleLabel />,
            codeFilePath: 'documentation/input/label.tsx'
        },
        {
            name: 'Sizes',
            uid: 'sizes',
            code: <ExampleSizes />,
            codeFilePath: 'documentation/input/sizes.tsx'
        },
        {
            name: 'Font and border',
            uid: 'fontandborder',
            code: <ExampleFontAndBorder />,
            codeFilePath: 'documentation/input/fontAndBorder.tsx'
        }
    ]
}

export default InputDoc;