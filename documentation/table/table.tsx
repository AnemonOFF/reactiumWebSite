import { apiRows } from "../common";
import { DocData } from "../types";
import ExampleDynamicPagination from "./dynamicPagination";
import ExampleInfinityScroll from "./infinityScroll";
import ExamplePagination from "./pagination";
import ExampleSelect from "./select";
import ExampleSort from "./sort";
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
                { attribute: 'clickable', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Wherther table rows can be clicked by the user' },
                { attribute: 'select', isRequired: false, type: ['single', 'multiple'], default: undefined, version: '1.0.0', description: 'Rows select type' },
                { attribute: 'hideCheckboxColumn', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Hide column with checkboxes on multiple select type' },
                { attribute: 'selectedUids', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Selected rows uids (controlled component)' },
                { attribute: 'defaultSelectedUids', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Initial selected rows uids (uncontrolled)' },
                { attribute: 'onSelectChange', isRequired: false, type: ['(selectedUids: string[]) => void'], default: undefined, version: '1.0.0', description: 'Select row event' },
                { attribute: 'resizableColumns', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Whether use can resize table columns' },
                { attribute: 'rowsPerPage', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Count of rows on page' },
                { attribute: 'totalRows', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Total rows count. Required when onLoadMore is undefined' },
                { attribute: 'onLoadMore', isRequired: false, type: ['OnLoadMoreEvent'], default: undefined, version: '1.0.0', description: 'On load more rows event. Should return ReactNode with rowsPerPage TableRows and totalRows count' },
                { attribute: 'page', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Set current page (controlled element)' },
                { attribute: 'onPageChange', isRequired: false, type: ['(page: number) => void'], default: undefined, version: '1.0.0', description: 'On page changing event' },
                { attribute: 'initialPage', isRequired: false, type: ['number'], default: '1', version: '1.0.0', description: 'Initial page' },
                { attribute: 'infinityScrollHeight', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Enable infinity scroll pagination mode and setting max wrapper height and overflow.' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['blur'],
                apiRows['css'],
                { attribute: 'wrapperCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override wrapper CSS styles' },
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
                { attribute: 'uid', isRequired: false, type: ['string'], default: 'Auto index', version: '1.0.0', description: 'Unique identifier in grid' },
                { attribute: 'sort', isRequired: false, type: ['boolean', '((a: ReactNode, b: ReactNode) => number)'], default: undefined, version: '1.0.0', description: 'Whether column be sortable. You can set custom comparer' },
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
                { attribute: 'uid', isRequired: false, type: ['string'], default: 'Auto index', version: '1.0.0', description: 'Unique identifier in grid' },
                { attribute: 'disableSelection', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Forbid row selection' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableFooter props',
            rows: [
                apiRows['children'],
                { attribute: 'spaceToBody', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between table footer and body' },
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
            isFramed: true,
            isResponsive: true,
            code: <ExampleStyleVariants />,
            codeFilePath: 'documentation/table/styleVariants.tsx'
        },
        {
            name: 'Sorting',
            uid: 'sorting',
            code: <ExampleSort />,
            codeFilePath: 'documentation/table/sort.tsx'
        },
        {
            name: 'Select',
            uid: 'select',
            code: <ExampleSelect />,
            codeFilePath: 'documentation/table/select.tsx'
        },
        {
            name: 'Pagination',
            uid: 'pagination',
            code: <ExamplePagination />,
            codeFilePath: 'documentation/table/pagination.tsx'
        },
        {
            name: 'Dynamic pagination',
            uid: 'dynamicpagination',
            code: <ExampleDynamicPagination />,
            codeFilePath: 'documentation/table/dynamicPagination.tsx'
        },
        {
            name: 'Infinity scroll',
            uid: 'infinityscroll',
            code: <ExampleInfinityScroll />,
            codeFilePath: 'documentation/table/infinityScroll.tsx'
        },
    ]
}

export default TableDoc;