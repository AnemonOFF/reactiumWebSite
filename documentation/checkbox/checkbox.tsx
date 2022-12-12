import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleDefault from "./default";

const GroupDoc: DocData = {
    name: 'Checkbox',
    import: 'import {Checkbox} from \'reactiumui\';',
    apis: [
        {
            name: 'Checkbox props',
            rows: [
                apiRows['children'],
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
            codeFilePath: 'documentation/checkbox/default.tsx'
        }
    ]
}

export default GroupDoc;