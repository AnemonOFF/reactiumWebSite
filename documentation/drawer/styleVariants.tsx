import { useState } from "react";
import { Text, Drawer } from "../../reactiumui";

const ExampleStyleVariants: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState<'default' | 'cloud'>('default');
    const [border, setBorder] = useState(false);
    const [disableBlur, setDisableBlur] = useState(false);
    const [disableShadow, setDisableShadow] = useState(false);
    const [disableWrapper, setDisableWrapper] = useState(false);
    const [square, setSquare] = useState(false);

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: 20}}>
            <button onClick={() => setIsOpen(old => !old)}>{isOpen ? 'Close' : 'Open'}</button>
            <Drawer isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} type={type} disableBlur={disableBlur} border={border} square={square} disableShadow={disableShadow} disableWrapper={disableWrapper} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
            <div>
                <label htmlFor="typeDefault">
                    <input type='radio' id='typeDefault' name='type' value='default' onChange={() => setType('default')} checked={type == 'default'} />default
                </label>
                <label htmlFor="typeCloud">
                    <input type='radio' id='typeCloud' name='type' value='cloud' onChange={() => setType('cloud')} checked={type == 'cloud'} />cloud
                </label>
            </div>
            <label htmlFor='border'>
                <input type='checkbox' id='border' onChange={() => setBorder(old => !old)} checked={border} />border
            </label>
            <label htmlFor='blur'>
                <input type='checkbox' id='blur' onChange={() => setDisableBlur(old => !old)} checked={disableBlur} />disable blur
            </label>
            <label htmlFor='shadow'>
                <input type='checkbox' id='shadow' onChange={() => setDisableShadow(old => !old)} checked={disableShadow} />disable shadow
            </label>
            <label htmlFor='wrapper'>
                <input type='checkbox' id='wrapper' onChange={() => setDisableWrapper(old => !old)} checked={disableWrapper} />disable wrapper
            </label>
            <label htmlFor='square'>
                <input type='checkbox' id='square' onChange={() => setSquare(old => !old)} checked={square} />square
            </label>
        </div>
    )
}

export default ExampleStyleVariants;