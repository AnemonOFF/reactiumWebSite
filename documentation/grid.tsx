import { apiBreakpointsRows, apiRows } from "./common";
import { DocData } from "./types";

const requiredChildrenProp = apiRows['children'];
requiredChildrenProp.isRequired = true;

const GridDoc: DocData = {
    name: 'Grid',
    import: 'import {Grid, GridItem, GridRow} from \'reactiumui\';',
    apis: [
        {
            name: 'Grid props',
            rows: [
                requiredChildrenProp,
                { attribute: 'fixed', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in grid'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in grid'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in grid'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: '5', version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'GridRow props',
            rows: [
                requiredChildrenProp,
                { attribute: 'fixed', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in row'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in row'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in row'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                { attribute: 'direction', isRequired: false, type: ['FlexDirection'], default: undefined, version: '1.0.0', description: 'CSS flex-direction parameter'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'GridItem props',
            rows: [
                apiRows['children'],
                ...apiBreakpointsRows,
                { attribute: 'fixed', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in row'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in row'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in row'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'display', isRequired: false, type: ['Display'], default: undefined, version: '1.0.0', description: 'CSS display parameter'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                { attribute: 'direction', isRequired: false, type: ['FlexDirection'], default: undefined, version: '1.0.0', description: 'CSS flex-direction parameter'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        
    ]
}

export default GridDoc;