import { apiRows } from '../common';
import { DocData } from '../types';
import ExampleBackground from './background';
import ExampleBordered from './bordered';
import Codes from './codes';
import ExampleDefault from './default';
import ExamplePressable from './pressable';
import ExampleSquare from './square';
import ExampleTypes from './types';

const CardDoc: DocData = {
    name: 'Card',
    import: 'import {Card} from \'reactiumui\';',
    apis: [
        {
            name: 'Card props',
            rows: [
                apiRows['children'],
                { attribute: 'type', isRequired: false, type: ['cloud', 'flat'], default: 'flat', version: '1.0.0-beta.1', description: 'Component look variants' },
                { attribute: 'border', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Whether the card should be bordered' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Set border radius to 0' },
                { attribute: 'transparent', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Whether the card background should be transparent' },
                { attribute: 'solid', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Whether the card background should be solid' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0-beta.1', description: 'Set the card background color' },
                { attribute: 'isPressable', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Whether the card should be pressable' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            description: 'By default card will fill full width of its parent element',
            isResponsive: false,
            code: <ExampleDefault />,
            codeString: Codes['default'],
            // codeFilePath: 'card/default.tsx'
        },
        {
            name: 'Types',
            uid: 'types',
            isResponsive: false,
            code: <ExampleTypes />,
            codeString: Codes['types'],
            // codeFilePath: 'card/types.tsx'
        },
        {
            name: 'Bordered',
            uid: 'bordered',
            isResponsive: false,
            description: 'Card can be with it`s own border',
            code: <ExampleBordered />,
            codeString: Codes['bordered'],
            // codeFilePath: 'card/bordered.tsx'
        },
        {
            name: 'Background',
            uid: 'background',
            isResponsive: false,
            description: 'You can set card background color that you want',
            code: <ExampleBackground />,
            codeString: Codes['background'],
            // codeFilePath: 'card/background.tsx'
        },
        {
            name: 'Square',
            uid: 'square',
            isResponsive: false,
            code: <ExampleSquare />,
            codeString: Codes['square'],
            // codeFilePath: 'card/square.tsx'
        },
        {
            name: 'Pressable',
            uid: 'pressable',
            isResponsive: false,
            code: <ExamplePressable />,
            codeString: Codes['pressable'],
            // codeFilePath: 'card/pressable.tsx'
        }
    ]
}

export default CardDoc;