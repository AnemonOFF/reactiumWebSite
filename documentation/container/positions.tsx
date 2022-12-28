import { useState } from "react";
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

export default ExamplePositions;