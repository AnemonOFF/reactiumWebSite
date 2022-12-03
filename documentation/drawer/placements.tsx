import { useState } from "react";
import { Drawer, Text } from "../../reactiumui";

const ExamplePlacements: React.FunctionComponent = () => {
    const [opened, setOpened] = useState<'top' | 'bottom' | 'left' | 'right'>();
    const placements: ('top' | 'bottom' | 'left' | 'right')[] = ['top', 'bottom', 'left', 'right'];

    return (
        <>
            {placements.map(p => (
                <button key={p} onClick={() => setOpened(p)}>
                    {p}
                </button>
            ))}
            <Drawer isOpen={opened !== undefined} placement={opened} onWrapperClick={() => setOpened(undefined)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </>
    )
}

export default ExamplePlacements;