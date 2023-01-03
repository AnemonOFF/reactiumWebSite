import { apiRows } from "../common";
import { DocData } from "../types";
import Codes from "./codes";
import ExampleCustomColumns from "./customColumns";
import ExampleDefault from "./default";
import ExampleFixedAndPixels from "./fixedAndPixels";
import ExampleGap from "./gap";
import ExampleRows from "./rows";

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
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0-beta.1', description: 'Count of columns in grid'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0-beta.1', description: 'Gap between rows in grid'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0-beta.1', description: 'Gap between columns in grid'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: '5', version: '1.0.0-beta.1', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0-beta.1', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0-beta.1', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0-beta.1', description: 'CSS align-content parameter'},
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
                { attribute: 'fixed', isRequired: false, type: ['boolean', 'max'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in row'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in row'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                { attribute: 'uid', isRequired: false, type: ['string'], default: 'auto index', version: '1.0.0', description: 'Unique identifier in grid'},
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
                { attribute: 'all', isRequired: false, type: ['number', 'boolean'], default: 'false', version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for all breakpoints'},
                { attribute: 'xs', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for xs devices (650px)'},
                { attribute: 'sm', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for sm devices (960px)'},
                { attribute: 'md', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for md devices (1280px)'},
                { attribute: 'lg', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for xl devices (1400px)'},
                { attribute: 'xl', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for lg devices (1920px)'},
                { attribute: 'fixed', isRequired: false, type: ['boolean', 'max'], default: 'false', version: '1.0.0', description: 'Item will be with fixed width. If \'max\' - max-width'},
                { attribute: 'uid', isRequired: false, type: ['string'], default: 'auto index', version: '1.0.0', description: 'Unique identifier in grid'},
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
            isResponsive: true,
            code: <ExampleDefault />,
            codeString: Codes['default'],
            // codeFilePath: 'documentation/grid/default.tsx'
        },
        {
            name: 'Custom columns',
            uid: 'customcolumns',
            description: 'By default, grid have 12 columns, if you want custom count, just set it by \'columns\' tag. To create new row, just fill previous.',
            isResponsive: true,
            code: <ExampleCustomColumns />,
            codeString: Codes['customcolumns'],
            // codeFilePath: 'documentation/grid/customColumns.tsx'
        },
        {
            name: 'Rows',
            uid: 'rows',
            description: 'If you want to use habitual rows, you can. Moreover, you can set custom count of columns for each row',
            isResponsive: true,
            code: <ExampleRows />,
            codeString: Codes['rows'],
            // codeFilePath: 'documentation/grid/rows.tsx'
        },
        {
            name: 'Gap',
            uid: 'gap',
            description: 'To set space size between items, use columnGap, rowGap or gap (combines the previous two) tags. Of course, you can set for each GridRow custom value of columnGap',
            isResponsive: true,
            code: <ExampleGap />,
            codeString: Codes['gap'],
            // codeFilePath: 'documentation/grid/gap.tsx'
        },
        {
            name: 'Fixed and pixels',
            uid: 'fixedandpixels',
            description: 'If you want to make one of the item be fixed with width in pixels, set flat \'fixed\' and set width as columns. To make this item responsive, set \'fixed\' to \'max\'',
            isResponsive: true,
            code: <ExampleFixedAndPixels />,
            codeString: Codes['fixedandpixels'],
            // codeFilePath: 'documentation/grid/fixedAndPixels.tsx'
        }
    ]
}

export default GridDoc;