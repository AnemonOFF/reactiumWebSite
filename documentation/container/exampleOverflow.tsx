import { useState } from "react";
import { Card, Container, Text } from "../../reactiumui";

const ExampleOverflow: React.FunctionComponent = () => {
    const [count, setCount] = useState(8);

    return (
        <div style={{position: 'relative', height: '200vh', padding: '10px'}}>
            <button onClick={() => setCount(old => ++old)}>+1</button>
            <button onClick={() => setCount(old => --old)}>-1</button>
            <Container all='$breakpoints$xs' position='fixed' preventOverScreen css={{zIndex: '$1', top: 40, left: 10}}>
                <Card css={{ p: 10 }} color="primary">
                    {Array.from({length: count}, (_, i) => <Text color="white" key={i}>Element_number_{i}</Text>)}
                </Card>
            </Container>
        </div>
    )
}

export default ExampleOverflow;