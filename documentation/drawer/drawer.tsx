import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleDefault from "./default";

const TextDoc: DocData = {
    name: 'Drawer',
    import: 'import {Drawer} from \'reactiumui\';',
    apis: [
        {
            name: 'Drawer props',
            rows: [
                apiRows['children'],
                { attribute: 'isOpen', isRequired: true, type: ['boolean'], default: undefined, version: '1.0.0', description: 'Drawer open state' },
                { attribute: 'type', isRequired: false, type: ['default', 'cloud'], default: 'default', version: '1.0.0', description: 'Drawer view variants' },
                { attribute: 'border', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Turn on drawer border' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make drawer view like square (disable border radius)' },
                { attribute: 'disableWrapper', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Disable wrapper (background) render' },
                { attribute: 'disableBlur', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Disable wrapper (background) blur' },
                { attribute: 'disableShadow', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Remove shadow of drawer element' },
                apiRows['css'],
                { attribute: 'wrapperCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override wrapper CSS styles' },
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            code: <ExampleDefault />,
            codeFilePath: 'documentation/drawer/default.tsx'
        }
    ]
}

export default TextDoc;