import { useState } from "react";
import { Drawer, Text, Button } from "reactiumui";

const ExampleDefault: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Button onClick={() => setIsOpen(old => !old)}>
            Open
            <Drawer isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </Button>
    )
}

export default ExampleDefault;