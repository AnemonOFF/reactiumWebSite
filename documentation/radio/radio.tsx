import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleColors from "./colors";
import ExampleDefault from "./default";
import ExampleDisabled from "./disabled";
import ExampleIcons from "./icons";
import ExampleIndeterminate from "./indeterminate";
import ExampleLabelColors from "./labelColors";
import ExampleRoundness from "./roundness";
import ExampleSize from "./size";

const RadioDoc: DocData = {
    name: 'Radio',
    import: 'import {Radio} from \'reactiumui\';',
    apis: [
        {
            name: 'Radio props',
            rows: [
                apiRows['children'],
                { attribute: 'size', isRequired: false, type: ['Space', 'number', 'string'], default: '21px', version: '1.0.0-beta.1', description: 'Size of radio and label' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'Set radio color' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0-beta.1', description: 'Set color as gradient' },
                { attribute: 'labelColor', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'Set color of radio`s label' },
                { attribute: 'labelGradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0-beta.1', description: 'Set labelColor as gradient' },
                { attribute: 'icon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Replace radio with icon' },
                { attribute: 'checkedIcon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0-beta.1', description: 'Replace radio with icon on checked' },
                { attribute: 'disabled', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Disabled input prop' },
                { attribute: 'checked', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0-beta.1', description: 'Checked input prop (controlled)' },
                { attribute: 'onChange', isRequired: false, type: ['(e: ChangeEvent<HTMLInputElement>) => void'], default: undefined, version: '1.0.0-beta.1', description: 'OnChange input prop (controlled)' },
                { attribute: 'initialChecked', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Checked input prop on radio initial (uncontrolled)' },
                { attribute: 'indeterminate', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Indeterminate state (controlled)' },
                { attribute: 'round', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Round border radius' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set border radius to zero' },
                apiRows['css'],
                { attribute: 'labelCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0-beta.1', description: 'Override label CSS styles' },
                apiRows['html'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            code: <ExampleDefault />,
            codeFilePath: 'documentation/radio/default.tsx'
        },
        {
            name: 'Disabled',
            uid: 'disabled',
            code: <ExampleDisabled />,
            codeFilePath: 'documentation/radio/disabled.tsx'
        },
        {
            name: 'Roundness',
            uid: 'roundness',
            code: <ExampleRoundness />,
            codeFilePath: 'documentation/radio/roundness.tsx'
        },
        {
            name: 'Size',
            uid: 'size',
            code: <ExampleSize />,
            codeFilePath: 'documentation/radio/size.tsx'
        },
        {
            name: 'Colors',
            uid: 'colors',
            code: <ExampleColors />,
            codeFilePath: 'documentation/radio/colors.tsx'
        },
        {
            name: 'Label colors',
            uid: 'labelcolors',
            code: <ExampleLabelColors />,
            codeFilePath: 'documentation/radio/labelColors.tsx'
        },
        {
            name: 'Indeterminate',
            uid: 'indeterminate',
            code: <ExampleIndeterminate />,
            codeFilePath: 'documentation/radio/indeterminate.tsx'
        },
        {
            name: 'Icons',
            uid: 'icons',
            code: <ExampleIcons />,
            codeFilePath: 'documentation/radio/icons.tsx'
        }
    ]
}

export default RadioDoc;