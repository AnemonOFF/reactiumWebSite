import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    centralized: `import { Card, Container, Text } from "reactiumui";

    const ExampleCentralized: React.FunctionComponent = () => {
        return (
            <Container all={400} center css={{m: '$xs'}}>
                <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                    <Text h4 color='$white'>Look, I am in center!</Text>
                </Card>
            </Container>
        )
    }
    
    export default ExampleCentralized;`,
    default: `import { Card, Container, Text } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <Container all={400} css={{m: '$xs'}}>
                <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                    <Text h4 color='$white'>Simple container with card</Text>
                </Card>
            </Container>
        )
    }
    
    export default ExampleDefault;`,
    fixedwidth: `import { Card, Container, Text } from "reactiumui";

    const ExampleFixedWidth: React.FunctionComponent = () => {
        return (
            <Container all={400} fixed css={{m: '$xs'}}>
                <Card css={{ minWidth: 200, minHeight: 200, p: 10 }} color="primary">
                    <Text h4 color='$white'>I\`m fixed. Try to change my size!</Text>
                </Card>
            </Container>
        )
    }
    
    export default ExampleFixedWidth;`,
    positions: `import { useState } from "react";
    import { Card, Container, Text, Button } from "reactiumui";
    
    const ExamplePositions: React.FunctionComponent = () => {
        const [count, setCount] = useState(8);
    
        return (
            <div style={{position: 'relative', height: '200vh', padding: '10px'}}>
                <div style={{display: 'flex', gap: 5}}>
                    <Button onClick={() => setCount(old => ++old)} type="ghost" compact>+1</Button>
                    <Button onClick={() => setCount(old => --old)} type="ghost" compact>-1</Button>
                </div>
                <Container all='$breakpoints$xs' position='fixed' preventOverScreen css={{zIndex: '$1', top: 40, left: 10, width: 'initial'}}>
                    <Card css={{ p: 10 }} color="primary">
                        {Array.from({length: count}, (_, i) => <Text color="white" key={i}>Element_number_{i}</Text>)}
                    </Card>
                </Container>
            </div>
        )
    }
    
    export default ExamplePositions;`,
}

export default Codes;