import { useState } from "react";
import { Text, Modal, Button, Radio, Checkbox } from "reactiumui";

const ExampleStyleVariants: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [border, setBorder] = useState(false);
    const [disableBlur, setDisableBlur] = useState(false);
    const [disableShadow, setDisableShadow] = useState(false);
    const [disableWrapper, setDisableWrapper] = useState(false);
    const [square, setSquare] = useState(false);

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
            <Button onClick={() => setIsOpen(old => !old)}>{isOpen ? 'Close' : 'Open'}</Button>
            <Modal isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} disableBlur={disableBlur} border={border} square={square} disableShadow={disableShadow} disableWrapper={disableWrapper} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Modal>
            <Checkbox onChange={() => setBorder(old => !old)} checked={border}>border</Checkbox>
            <Checkbox onChange={() => setDisableBlur(old => !old)} checked={disableBlur} >disable blur</Checkbox>
            <Checkbox onChange={() => setDisableShadow(old => !old)} checked={disableShadow}>disable shadow</Checkbox>
            <Checkbox onChange={() => setDisableWrapper(old => !old)} checked={disableWrapper}>disable wrapper</Checkbox>
            <Checkbox onChange={() => setSquare(old => !old)} checked={square}>square</Checkbox>
        </div>
    )
}

export default ExampleStyleVariants;