import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";
import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleCloudZebra from "./cloudZebra";
import ExampleHoverableAndBordered from "./hoverableAndBordered";
import ExampleStyleVariants from "./styleVariants";

const TableDoc: DocData = {
    name: 'Table',
    import: `import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from \'reactiumui\';`,
    apis: [
        {
            name: 'Table props',
            rows: [
                apiRows['children'],
                { attribute: 'type', isRequired: false, type: ['default', 'square', 'circle'], default: 'default', version: '1.0.0', description: 'Variants of table view' },
                { attribute: 'cloud', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make shadow and padding for table' },
                { attribute: 'bordered', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make table bordered' },
                { attribute: 'hoverable', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Wherther table rows can be hovered by the user' },
                { attribute: 'zebra', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Create zebra stripes in table' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['blur'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableBody props',
            rows: [
                apiRows['children'],
                { attribute: 'spaceBetweenRows', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between table rows' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableCell props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableColumn props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableHeader props',
            rows: [
                apiRows['children'],
                { attribute: 'spaceToBody', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between table header and body' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableRow props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
    ],
    examples: [
        {
            name: 'Style variants',
            uid: 'stylevariants',
            code: <ExampleStyleVariants />,
            codeFilePath: 'documentation/table/styleVariants.tsx'
        },
        {
            name: 'Cloud zebra',
            uid: 'cloudzebra',
            code: <ExampleCloudZebra />,
            codeFilePath: 'documentation/table/cloudZebra.tsx'
        },
        {
            name: 'Hoverable and bordered',
            uid: 'hoverableandbordered',
            code: <ExampleHoverableAndBordered />,
            codeFilePath: 'documentation/table/hoverableAndBordered.tsx'
        }
    ]
}

export default TableDoc;