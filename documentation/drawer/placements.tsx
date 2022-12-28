import { useState } from "react";
import { Drawer, Text, Button, Group } from "reactiumui";

const ExamplePlacements: React.FunctionComponent = () => {
    const [opened, setOpened] = useState<'top' | 'bottom' | 'left' | 'right'>();
    const placements: ('top' | 'bottom' | 'left' | 'right')[] = ['top', 'bottom', 'left', 'right'];

    return (
        <>
            <Group>
                {placements.map(p => (
                    <Button key={p} onClick={() => setOpened(p)} type="border">
                        {p}
                    </Button>
                ))}
            </Group>
            <Drawer isOpen={opened !== undefined} placement={opened} onWrapperClick={() => setOpened(undefined)} css={{p: '$md'}}>
                <Text h2>Hello world!</Text>
            </Drawer>
        </>
    )
}

export default ExamplePlacements;