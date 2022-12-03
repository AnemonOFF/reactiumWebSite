import { useState } from "react";
import { Drawer, Text } from "../../reactiumui";

const ExampleSize: React.FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState<number>(378);

    return (
        <>
            <label htmlFor="size">
                <input type={'number'} id="size" min={0} value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
            </label>
            <button onClick={() => setIsOpen(old => !old)}>Open</button>
            <Drawer isOpen={isOpen} size={size} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </>
    )
}

export default ExampleSize;