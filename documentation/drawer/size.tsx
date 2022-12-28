import { useState } from "react";
import { Drawer, Text, Input, Button } from "reactiumui";

const ExampleSize: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState<number>(378);

    return (
        <div style={{width: 'max-content'}}>
            <Input type="number" value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
            <Button onClick={() => setIsOpen(old => !old)}>Open</Button>
            <Drawer isOpen={isOpen} size={size} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </div>
    )
}

export default ExampleSize;