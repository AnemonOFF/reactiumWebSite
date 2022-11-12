import { apiRows } from "./common";
import { DocData } from "./types";

const TextDoc: DocData = {
    name: 'Text',
    import: 'import {Text} from \'reactiumui\';',
    apis: [
        {
            name: 'Text props',
            rows: [
                apiRows['children'],
                { attribute: 'h1', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h1 tag in html of element' },
                { attribute: 'h2', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h2 tag in html of element' },
                { attribute: 'h3', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h3 tag in html of element' },
                { attribute: 'h4', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h4 tag in html of element' },
                { attribute: 'h5', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h5 tag in html of element' },
                { attribute: 'h6', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add h6 tag in html of element' },
                { attribute: 'b', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add b tag in html of element' },
                { attribute: 'i', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add i tag in html of element' },
                { attribute: 'span', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add span tag in html of element' },
                { attribute: 'em', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add em tag in html of element' },
                { attribute: 'blockquote', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add blockquote tag in html of element' },
                { attribute: 'fontSize', isRequired: false, type: ['CSSFontSize'], default: 'false', version: '1.0.0', description: 'CSS font-size parameter' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', "default", 'string'], default: 'default', version: '1.0.0', description: 'CSS color parameter' },
                { attribute: 'gradient', isRequired: false, type: ['string[]'], default: undefined, version: '1.0.0', description: 'Set color of text as gradient' },
                { attribute: 'weight', isRequired: false, type: ['FontWeight'], default: undefined, version: '1.0.0', description: 'CSS font-weight parameter' },
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

export default TextDoc;