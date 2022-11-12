import { Card, Container, Text } from '../../reactiumui';
import { apiBreakpointsRows, apiRows } from '../common';
import { DocData } from '../types';
import ExampleOverflow from './exampleOverflow';

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
            code: (
                <Container all='$breakpoints$xs'>
                    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>Simple container with card</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all='$breakpoints$xs'>
    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>Simple container with card</Text>
    </Card>
</Container>`
        },
        {
            isResponsive: true,
            name: 'Fixed width',
            code: (
                <Container all='$breakpoints$xs' fixed>
                    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>I`m fixed. Try to change my size!</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all='$breakpoints$xs' fixed>
    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>I\`m fixed. Try to change my size!</Text>
    </Card>
</Container>`
        },
        {
            isResponsive: true,
            name: 'Centralized',
            code: (
                <Container all='$breakpoints$xs' center>
                    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>Look, I am in center!</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all='$breakpoints$xs' center>
    <Card css={{ minWidth: 250, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>Look, I am in center!</Text>
    </Card>
</Container>`
        },
        {
            isResponsive: false,
            name: 'Positions',
            description: 'Click on button and try to scroll / change browser width and height',
            code: (
                <ExampleOverflow />
            ),
            exampleCode: `const ExampleOverflow: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const a = Array.from({length: 20}, (_, i) => <Text key={i} h4 color='$white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>);

    return (
        <div style={{position: 'relative'}}>
            <button onClick={() => setIsOpen(old => !old)}>Toggle</button>
            {isOpen && <Container all='$breakpoints$xs' position='absolute' preventOverScreen css={{zIndex: '$10'}}>
                <Card css={{ p: 10 }} color="primary">
                    {a}
                </Card>
            </Container>}
        </div>
    )
}`
        }
    ],
};

export default ContainerDoc;