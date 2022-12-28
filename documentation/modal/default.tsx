import { useState } from "react";
import { Modal, Text, Button } from "reactiumui";

const ExampleDefault: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Button onClick={() => setIsOpen(old => !old)}>
            Open
            <Modal isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Modal>
        </Button>
    )
}

export default ExampleDefault;