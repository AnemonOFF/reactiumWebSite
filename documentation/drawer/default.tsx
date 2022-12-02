import { useState } from "react";
import { Drawer, Text } from "../../reactiumui";

const ExampleDefault: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button onClick={() => setIsOpen(old => !old)}>
            {isOpen ? "Close" : "Open"}
            <Drawer isOpen={isOpen} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </button>
    )
}

export default ExampleDefault;