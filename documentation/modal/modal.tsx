import { apiRows } from "../common";
import { DocData } from "../types";
import Codes from "./codes";
import ExampleDefault from "./default";
import ExampleInsideContainer from "./insideContainer";
import ExamplePlacements from "./placements";
import ExampleSize from "./size";
import ExampleStyleVariants from "./styleVariants";

const ModalDoc: DocData = {
    name: 'Modal',
    import: 'import {Modal} from \'reactiumui\';',
    apis: [
        {
            name: 'Modal props',
            rows: [
                apiRows['children'],
                { attribute: 'isOpen', isRequired: true, type: ['boolean'], default: undefined, version: '1.0.0-beta.1', description: 'Drawer open state' },
                { attribute: 'size', isRequired: false, type: ['number'], default: '378', version: '1.0.0-beta.1', description: 'Width or height (depends on placement) of drawer' },
                { attribute: 'placement', isRequired: false, type: ['top', 'bottom', 'left', 'right'], default: 'right', version: '1.0.0-beta.1', description: 'Placement of drawer' },
                { attribute: 'onWrapperClick', isRequired: false, type: ['(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void'], default: undefined, version: '1.0.0-beta.1', description: 'Wrapper on click event' },
                { attribute: 'border', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Turn on drawer border' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Make drawer view like square (disable border radius)' },
                { attribute: 'disableWrapper', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Disable wrapper (background) render' },
                { attribute: 'disableBlur', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Disable wrapper (background) blur' },
                { attribute: 'disableShadow', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Remove shadow of drawer element' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                { attribute: 'wrapperCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0-beta.1', description: 'Override wrapper CSS styles' },
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            code: <ExampleDefault />,
            codeString: Codes['default'],
            // codeFilePath: 'documentation/modal/default.tsx'
        },
        {
            name: 'Style variants',
            uid: 'stylevariants',
            code: <ExampleStyleVariants />,
            codeString: Codes['stylevariants'],
            // codeFilePath: 'documentation/modal/stylevariants.tsx'
        },
        {
            name: 'Placements',
            uid: 'placements',
            code: <ExamplePlacements />,
            codeString: Codes['placements'],
            // codeFilePath: 'documentation/modal/placements.tsx'
        },
        {
            name: 'Size',
            uid: 'size',
            code: <ExampleSize />,
            codeString: Codes['size'],
            // codeFilePath: 'documentation/modal/size.tsx'
        },
        {
            name: 'Inside container',
            uid: 'insidecontainer',
            code: <ExampleInsideContainer />,
            codeString: Codes['insidecontainer'],
            // codeFilePath: 'documentation/modal/insidecontainer.tsx'
        }
    ]
}

export default ModalDoc;