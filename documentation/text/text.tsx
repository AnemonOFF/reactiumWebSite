import { apiRows } from "../common";
import { DocData } from "../types";
import Codes from "./codes";
import ExampleColorsAndGradient from "./colorsAndGradient";
import ExampleQuote from "./quote";
import ExampleTags from "./tags";

const TextDoc: DocData = {
    name: 'Text',
    import: 'import {Text} from \'reactiumui\';',
    apis: [
        {
            name: 'Text props',
            rows: [
                apiRows['children'],
                { attribute: 'h1', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h1 tag in html of element' },
                { attribute: 'h2', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h2 tag in html of element' },
                { attribute: 'h3', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h3 tag in html of element' },
                { attribute: 'h4', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h4 tag in html of element' },
                { attribute: 'h5', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h5 tag in html of element' },
                { attribute: 'h6', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add h6 tag in html of element' },
                { attribute: 'b', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add b tag in html of element' },
                { attribute: 'i', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add i tag in html of element' },
                { attribute: 'span', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add span tag in html of element' },
                { attribute: 'p', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add p tag in html of element' },
                { attribute: 'em', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add em tag in html of element' },
                { attribute: 'blockquote', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0-beta.1', description: 'Add blockquote tag in html of element' },
                { attribute: 'fontSize', isRequired: false, type: ['CSSFontSize'], default: 'false', version: '1.0.0-beta.1', description: 'CSS font-size parameter' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', "default", 'string'], default: 'default', version: '1.0.0-beta.1', description: 'CSS color parameter' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0-beta.1', description: 'Set color of text as gradient' },
                { attribute: 'weight', isRequired: false, type: ['FontWeight'], default: undefined, version: '1.0.0-beta.1', description: 'CSS font-weight parameter' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Tags',
            uid: 'tags',
            description: 'You can set any text tag you want, or more than one',
            code: <ExampleTags />,
            codeString: Codes['tags'],
            // codeFilePath: 'documentation/text/tags.tsx'
        },
        {
            name: 'Quote',
            uid: 'quote',
            description: 'To make quote just set \'blockquote\' tag. To remove quote symbols, set \'blockquote\' tag to \'clear\'',
            code: <ExampleQuote />,
            codeString: Codes['quote'],
            // codeFilePath: 'documentation/text/quote.tsx'
        },
        {
            name: 'Colors and gradient',
            uid: 'colorsandgradient',
            description: 'You can set any color / gradient you want or themed colors without \'$\' symbol',
            code: <ExampleColorsAndGradient />,
            codeString: Codes['colorsandgradient'],
            // codeFilePath: 'documentation/text/colorsAndGradient.tsx'
        }
    ]
}

export default TextDoc;