import { useState } from "react";
import { Modal, Text, Button, Input } from "reactiumui";

const ExampleSize: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState<number>(378);
    const [height, setHeight] = useState<number>(378);

    return (
        <div style={{width: 'max-content'}}>
            <Input type={'number'} value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
            <Input type={'number'} value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
            <Button onClick={() => setIsOpen(old => !old)}>Open</Button>
            <Modal isOpen={isOpen} width={width} height={height} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Modal>
        </div>
    )
}

export default ExampleSize;