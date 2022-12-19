import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleCompact from "./compact";
import ExampleDefault from "./default";

const InputDoc: DocData = {
    name: 'Input',
    import: 'import {Input} from \'reactiumui\';',
    apis: [
        {
            name: 'Input props',
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
            codeFilePath: 'documentation/input/default.tsx'
        },
        {
            name: 'Compact',
            uid: 'compact',
            code: <ExampleCompact />,
            codeFilePath: 'documentation/input/compact.tsx'
        }
    ]
}

export default InputDoc;