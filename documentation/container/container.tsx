import { apiBreakpointsRows, apiRows } from '../common';
import { DocData } from '../types';
import ExampleCentralized from './centralized';
import ExampleDefault from './default';
import ExampleFixedWidth from './fixedWidth';
import ExamplePositions from './positions';

const ContainerDoc: DocData = {
    name: 'Container',
    import: "import {Container} from 'reactiumui';",
    description: 'A component for setting fix size wrapper with any position type.',
    apis: [
        {
            name: 'Container props',
            rows: [
                apiRows['children'],
                { attribute: 'fixed', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Container won`t adapt to media width'},
                { attribute: 'center', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Center container across parent width'},
                { attribute: 'position', isRequired: false, type: ['Position'], default: undefined, version: '1.0.0', description: 'Set css position attribute. \'Fixed-overflow\' used to prevent pushing out of screen bounds fixed containers'},
                { attribute: 'preventOverScreen', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Used to prevent pushing out of screen bounds fixed and absolute containers'},
                ...apiBreakpointsRows,
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    useCases: [
        "Limit width of content on breakpoints",
        "Set content custom position like fixed, absolute, etc.",
    ],
    examples: [
        {
            isResponsive: true,
            name: 'Default',
            uid: 'default',
            code: <ExampleDefault />,
            codeFilePath: 'documentation/container/default.tsx'
        },
        {
            isResponsive: true,
            name: 'Fixed width',
            uid: 'fixedwidth',
            code: <ExampleFixedWidth />,
            codeFilePath: 'documentation/container/fixedWidth.tsx'
        },
        {
            isResponsive: true,
            name: 'Centralized',
            uid: 'centralized',
            code: <ExampleCentralized />,
            codeFilePath: 'documentation/container/centralized.tsx'
        },
        {
            name: 'Positions',
            uid: 'positions',
            isFramed: true,
            isResponsive: true,
            description: 'Change elements count by pressing \'+1\' and \'-1\' buttons and look what`s happening. That`s working same for width',
            code: <ExamplePositions />,
            codeFilePath: 'documentation/container/positions.tsx'
        }
    ],
};

export default ContainerDoc;