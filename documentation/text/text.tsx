import { Container, Text } from "../../reactiumui";
import { apiRows } from "../common";
import { DocData } from "../types";

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
                { attribute: 'p', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Add p tag in html of element' },
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
        {
            name: 'Tags',
            uid: 'tags',
            description: 'You can set any text tag you want, or more than one',
            isResponsive: false,
            code: (
                <Container>
                    <Text h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text p h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text h6 em>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text i b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </Container>
            ),
            exampleCode: `<Container>
    <Text h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text p h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text h6 em>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text i b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
</Container>`
        },
        {
            name: 'Quote',
            uid: 'quote',
            description: 'To make quote just set \'blockquote\' tag',
            isResponsive: false,
            code: (
                <Text blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            ),
            exampleCode: `<Text blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>`
        },
        {
            name: 'Colors and gradient',
            uid: 'colorsandgradient',
            description: 'You can set any color / gradient you want or themed colors without \'$\' symbol',
            isResponsive: false,
            code: (
                <Container>
                    <Text color="primary" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text color="success" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text color="error" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text color="warn" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text color="$pink600" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                    <Text gradient={['$green600', '$blue600', '$red600']} fontSize="$3xl" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </Container>
            ),
            exampleCode: `<Container>
    <Text color="primary" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text color="success" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text color="error" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text color="warn" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text color="$pink600" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
    <Text gradient={['$green600', '$blue600', '$red600']} fontSize="$3xl" weight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
</Container>`
        }
    ]
}

export default TextDoc;