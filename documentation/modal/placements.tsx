import { useState } from "react";
import { Modal, Text, Button, Input, Radio } from "reactiumui";

type Placement = 'center' | 'top' | 'bottom' | 'left' | 'right';
const placements: Placement[] = ['center', 'top', 'bottom', 'left', 'right'];

const ExamplePlacements: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [placement, setPlacement] = useState<Placement>('center');
    const [x, setX] = useState<number>();
    const [y, setY] = useState<number>();

    const onPlacementChange = (p: Placement) => {
        setPlacement(p);
        setX(undefined);
        setY(undefined);
    }

    return (
        <>
            <Button onClick={() => setIsOpen(old => !old)}>{isOpen ? 'Close' : 'Open'}</Button>
            {placements.map(p => (
                <Radio key={p} checked={placement == p} onChange={() => onPlacementChange(p)}>{p}</Radio>
            ))}
            <div style={{width: 'max-content'}}>
                <Input type={'number'} value={x ?? ''} onChange={(e) => setX(parseInt(e.target.value))} placeholder="x" />
                <Input type={'number'} value={y ?? ''} onChange={(e) => setY(parseInt(e.target.value))} placeholder="y" />
            </div>
            <Modal isOpen={isOpen} placement={placement} x={x} y={y} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Modal>
        </>
    )
}

export default ExamplePlacements;