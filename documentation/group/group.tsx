import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleButtons from "./buttons";
import Codes from "./codes";
import ExampleCombo from "./combo";
import ExampleInputs from "./inputs";

const GroupDoc: DocData = {
    name: 'Group',
    import: 'import {Group} from \'reactiumui\';',
    apis: [
        {
            name: 'Group props',
            rows: [
                apiRows['children'],
                { attribute: 'borderWidth', isRequired: false, type: ['number', 'string'], default: '1px', version: '1.0.0-beta.1', description: 'Set it if you use items with custom border-width CSS property' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Buttons',
            uid: 'buttons',
            code: <ExampleButtons />,
            codeString: Codes['buttons'],
            // codeFilePath: 'documentation/group/buttons.tsx'
        },
        {
            name: 'Inputs',
            uid: 'inputs',
            code: <ExampleInputs />,
            codeString: Codes['inputs'],
            // codeFilePath: 'documentation/group/inputs.tsx'
        },
        {
            name: 'Combo',
            uid: 'combo',
            code: <ExampleCombo />,
            codeString: Codes['combo'],
            // codeFilePath: 'documentation/group/combo.tsx'
        }
    ]
}

export default GroupDoc;