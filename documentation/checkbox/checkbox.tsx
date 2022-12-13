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

const GroupDoc: DocData = {
    name: 'Checkbox',
    import: 'import {Checkbox} from \'reactiumui\';',
    apis: [
        {
            name: 'Checkbox props',
            rows: [
                apiRows['children'],
                { attribute: 'size', isRequired: false, type: ['Space', 'number', 'string'], default: '21px', version: '1.0.0', description: 'Size of checkbox and label' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0', description: 'Set checkbox color' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Set color as gradient' },
                { attribute: 'labelColor', isRequired: false, type: ['ThemedColors', 'default', 'string'], default: undefined, version: '1.0.0', description: 'Set color of checkbox`s label' },
                { attribute: 'labelGradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Set labelColor as gradient' },
                { attribute: 'icon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0', description: 'Replace checkbox with icon' },
                { attribute: 'checkedIcon', isRequired: false, type: ['ReactNode'], default: undefined, version: '1.0.0', description: 'Replace checkbox with icon on checked' },
                { attribute: 'disabled', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Disabled input prop' },
                { attribute: 'checked', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0', description: 'Checked input prop (controlled)' },
                { attribute: 'onChange', isRequired: false, type: ['(e: ChangeEvent<HTMLInputElement>) => void'], default: undefined, version: '1.0.0', description: 'OnChange input prop (controlled)' },
                { attribute: 'initialChecked', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Checked input prop on checkbox initial (uncontrolled)' },
                { attribute: 'indeterminate', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Indeterminate state (controlled)' },
                { attribute: 'round', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Round border radius' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set border radius to zero' },
                apiRows['css'],
                { attribute: 'labelCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override label CSS styles' },
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
            codeFilePath: 'documentation/checkbox/default.tsx'
        },
        {
            name: 'Disabled',
            uid: 'disabled',
            code: <ExampleDisabled />,
            codeFilePath: 'documentation/checkbox/disabled.tsx'
        },
        {
            name: 'Roundness',
            uid: 'roundness',
            code: <ExampleRoundness />,
            codeFilePath: 'documentation/checkbox/roundness.tsx'
        },
        {
            name: 'Size',
            uid: 'size',
            code: <ExampleSize />,
            codeFilePath: 'documentation/checkbox/size.tsx'
        },
        {
            name: 'Colors',
            uid: 'colors',
            code: <ExampleColors />,
            codeFilePath: 'documentation/checkbox/colors.tsx'
        },
        {
            name: 'Label colors',
            uid: 'labelcolors',
            code: <ExampleLabelColors />,
            codeFilePath: 'documentation/checkbox/labelColors.tsx'
        },
        {
            name: 'Indeterminate',
            uid: 'indeterminate',
            code: <ExampleIndeterminate />,
            codeFilePath: 'documentation/checkbox/indeterminate.tsx'
        },
        {
            name: 'Icons',
            uid: 'icons',
            code: <ExampleIcons />,
            codeFilePath: 'documentation/checkbox/icons.tsx'
        }
    ]
}

export default GroupDoc;