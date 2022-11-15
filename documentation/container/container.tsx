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
            uid: 'default',
            code: (
                <Container all={400} css={{m: '$xs'}}>
                    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>Simple container with card</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all={400} css={{m: '$xs'}}>
    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>Simple container with card</Text>
    </Card>
</Container>`
        },
        {
            isResponsive: true,
            name: 'Fixed width',
            uid: 'fixedwidth',
            code: (
                <Container all={400} fixed css={{m: '$xs'}}>
                    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>I`m fixed. Try to change my size!</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all={400} fixed css={{m: '$xs'}}>
    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>I\`m fixed. Try to change my size!</Text>
    </Card>
</Container>`
        },
        {
            isResponsive: true,
            name: 'Centralized',
            uid: 'centralized',
            code: (
                <Container all={400} center css={{m: '$xs'}}>
                    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                        <Text h4 color='$white'>Look, I am in center!</Text>
                    </Card>
                </Container>
            ),
            exampleCode: `<Container all={400} center css={{m: '$xs'}}>
    <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
        <Text h4 color='$white'>Look, I am in center!</Text>
    </Card>
</Container>`
        },
        {
            name: 'Positions',
            uid: 'positions',
            isFramed: true,
            isResponsive: true,
            description: 'Change elements count by pressing \'+1\' and \'-1\' buttons and look what`s happening. That`s working same for width',
            code: (
                <ExampleOverflow />
            ),
            exampleCode: `import { useState } from "react";
import { Card, Container, Text } from "../../reactiumui";

const ExampleOverflow: React.FunctionComponent = () => {
    const [count, setCount] = useState(8);

    return (
        <div style={{position: 'relative', height: '200vh', paddingLeft: '150px'}}>
            <Container all='$breakpoints$xs' position='fixed' preventOverScreen css={{zIndex: '$1', top: 10, left: 10}}>
                <Card css={{ p: 10 }} color="primary">
                    {Array.from({length: count}, (_, i) => <Text color="white" key={i}>Element {i}</Text>)}
                </Card>
            </Container>
            <button onClick={() => setCount(old => ++old)}>Add</button>
            <button onClick={() => setCount(old => --old)}>Remove</button>
        </div>
    )
}

export default ExampleOverflow;`
        }
    ],
};

export default ContainerDoc;