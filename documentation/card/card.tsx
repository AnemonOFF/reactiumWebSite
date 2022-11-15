import { Card, Container, Text } from '../../reactiumui';
import { apiRows } from '../common';
import { DocData } from '../types';

const CardDoc: DocData = {
    name: 'Card',
    import: 'import {Card} from \'reactiumui\';',
    apis: [
        {
            name: 'Card props',
            rows: [
                apiRows['children'],
                { attribute: 'type', isRequired: false, type: ['cloud', 'flat'], default: 'flat', version: '1.0.0', description: 'Component look variants' },
                { attribute: 'border', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Whether the card should be bordered' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set border radius to 0' },
                { attribute: 'transparent', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Whether the card background should be transparent' },
                { attribute: 'solid', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Whether the card background should be solid' },
                { attribute: 'color', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0', description: 'Set the card background color' },
                { attribute: 'isPressable', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Whether the card should be pressable' },
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
            code: (
                <Card css={{p: 10}}>
                    <Text>Default card component</Text>
                </Card>
            ),
            exampleCode: `<Card>
    <Text>Default card component</Text>
</Card>`
        },
        {
            name: 'Types',
            uid: 'types',
            isResponsive: false,
            code: (
                <Container>
                    <Card css={{p: 10, my: 10}} type={'cloud'}><Text>Cloud card</Text></Card>
                    <Card css={{p: 10, my: 10}} type={'flat'}><Text>Flat card</Text></Card>
                </Container>
            ),
            exampleCode: `<Container>
    <Card type={'cloud'}><Text>Cloud card</Text></Card>
    <Card type={'flat'}><Text>Flat card</Text></Card>
</Container>`
        },
        {
            name: 'Bordered',
            uid: 'bordered',
            isResponsive: false,
            description: 'Card can be with it`s own border',
            code: (
                <Card css={{p: 10}} border>
                    <Text>Card with border</Text>
                </Card>
            ),
            exampleCode: `<Card border>
    <Text>Card with border</Text>
</Card>`
        },
        {
            name: 'Background',
            uid: 'background',
            isResponsive: false,
            description: 'You can set card background color that you want',
            code: (
                <Container>
                    <Card css={{p: 10, my: 10}} color='primary'><Text>Primary card</Text></Card>
                    <Card css={{p: 10, my: 10}} color='success'><Text>Success card</Text></Card>
                    <Card css={{p: 10, my: 10}} color='error'><Text>Error card</Text></Card>
                    <Card css={{p: 10, my: 10}} color='warning'><Text>Warning card</Text></Card>
                    <Card css={{p: 10, my: 10}} color='$pink600'><Text>Pink card</Text></Card>
                    <Card css={{p: 10, my: 10}} transparent><Text>Transparent card</Text></Card>
                </Container>
            ),
            exampleCode: `<Container>
    <Card color='primary'><Text>Primary card</Text></Card>
    <Card color='success'><Text>Success card</Text></Card>
    <Card color='error'><Text>Error card</Text></Card>
    <Card color='warning'><Text>Warning card</Text></Card>
    <Card color='$pink600'><Text>Pink card</Text></Card>
    <Card transparent><Text>Transparent card</Text></Card>
</Container>`
        },
        {
            name: 'Square',
            uid: 'square',
            isResponsive: false,
            code: (
                <Container>
                    <Card css={{p: 10, my: 10}} square>
                        <Text>Square card</Text>
                    </Card>
                    <Card css={{p: 10, my: 10}} type='flat' square>
                        <Text>Square flat card</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Card css={{p: 10}} square>
    <Text>Square card</Text>
</Card>`
        },
        {
            name: 'Pressable',
            uid: 'pressable',
            isResponsive: false,
            code: (
                <Card css={{p: 10}} isPressable>
                    <Text>Press me!</Text>
                </Card>
            ),
            exampleCode: `<Card css={{p: 10}} isPressable>
    <Text>Press me!</Text>
</Card>`
        }
    ]
}

export default CardDoc;