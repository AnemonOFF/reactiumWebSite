import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleButtons from "./buttons";

const GroupDoc: DocData = {
    name: 'Group',
    import: 'import {Group} from \'reactiumui\';',
    apis: [
        {
            name: 'Group props',
            rows: [
                apiRows['children'],
                { attribute: 'borderWidth', isRequired: false, type: ['number', 'string'], default: '1px', version: '1.0.0', description: 'Set it if you use items with custom border-width CSS property' },
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
            codeFilePath: 'documentation/group/buttons.tsx'
        }
    ]
}

export default GroupDoc;