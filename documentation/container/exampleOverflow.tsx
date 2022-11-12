import { useState } from "react";
import { Card, Container, Text } from "../../reactiumui";

const ExampleOverflow: React.FunctionComponent = () => {
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
}

export default ExampleOverflow;