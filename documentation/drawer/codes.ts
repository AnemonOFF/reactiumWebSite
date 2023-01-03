import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    default: `import { useState } from "react";
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
    
    export default ExampleDefault;`,
    insidecontainer: `import { useState } from "react";
    import { Drawer, Text, Button } from "reactiumui";
    
    const ExampleInsideContainer: React.FunctionComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
            <div style={{position: 'relative', overflow: 'hidden'}}>
                <Button onClick={() => setIsOpen(old => !old)}>
                    Open
                </Button>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus ut nibh at sodales. Nulla ut commodo velit. Morbi rhoncus mauris et massa porttitor fringilla. Nam tempor laoreet nisi, quis porttitor purus porttitor nec. Aenean iaculis eros tempus arcu imperdiet tempor. Nam malesuada odio metus, sed venenatis arcu pretium ac. In commodo rutrum nunc a aliquet. Mauris eu felis venenatis, vestibulum nisl vitae, tempus turpis. Nulla facilisi. Donec sollicitudin ullamcorper ante, a ultricies elit pellentesque vehicula. In dolor ante, tristique ut volutpat ut, tristique in dolor. Cras sed odio ac odio porta faucibus. Aliquam pretium ipsum eros, sed ullamcorper quam molestie quis.
                </Text>
                <Text>
                    Sed efficitur metus vitae risus interdum congue sit amet tincidunt nisl. Nullam turpis urna, aliquet sit amet congue sit amet, egestas id mauris. Vestibulum sit amet tempus libero. Nam sodales auctor orci, vitae consequat elit suscipit nec. Donec malesuada et ipsum non dignissim. Donec viverra augue sollicitudin erat lacinia suscipit nec sit amet nisi. Maecenas id suscipit purus, a tempus odio. Morbi luctus, elit nec maximus congue, urna dui ullamcorper urna, sit amet consequat lorem nunc sit amet tellus. Praesent in semper velit. Sed in ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel feugiat ante, a interdum lacus. Nunc eu enim ut velit sodales malesuada.
                </Text>
                <Text>
                    In rhoncus, magna quis lobortis bibendum, dui quam facilisis tellus, in tristique eros quam et magna. Mauris hendrerit nunc erat, sed blandit magna mollis cursus. Sed ut tellus vel lorem suscipit accumsan. Maecenas sed elit tortor. Fusce in nibh eros. Suspendisse lacinia finibus mi a fringilla. Integer ac felis eget ligula vulputate molestie ut vel magna. Etiam ullamcorper sollicitudin velit ut semper. Duis pellentesque nisl ac mattis vulputate. Duis volutpat quis lectus et aliquam. Donec quis sem orci. Aenean eu metus ac velit eleifend sodales. Integer non felis at metus finibus auctor non non metus. Nullam finibus consequat tortor, eu volutpat arcu.
                </Text>
                <Drawer insideContainer isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                    <Text h2>Hello world!</Text>
                </Drawer>
            </div>
        )
    }
    
    export default ExampleInsideContainer;`,
    placements: `import { useState } from "react";
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
    
    export default ExamplePlacements;`,
    size: `import { useState } from "react";
    import { Drawer, Text, Input, Button } from "reactiumui";
    
    const ExampleSize: React.FunctionComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [size, setSize] = useState<number>(378);
    
        return (
            <div style={{width: 'max-content'}}>
                <Input type="number" value={size} onChange={(e) => setSize(parseInt(e.target.value))} />
                <Button onClick={() => setIsOpen(old => !old)}>Open</Button>
                <Drawer isOpen={isOpen} size={size} onWrapperClick={() => setIsOpen(false)} css={{p: '$md'}}>
                    <Text h2>Hello world!</Text>
                </Drawer>
            </div>
        )
    }
    
    export default ExampleSize;`,
    stylevariants: `import { useState } from "react";
    import { Text, Drawer, Button, Radio, Checkbox } from "reactiumui";
    
    const ExampleStyleVariants: React.FunctionComponent = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [type, setType] = useState<'default' | 'cloud'>('default');
        const [border, setBorder] = useState(false);
        const [disableBlur, setDisableBlur] = useState(false);
        const [disableShadow, setDisableShadow] = useState(false);
        const [disableWrapper, setDisableWrapper] = useState(false);
        const [square, setSquare] = useState(false);
    
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 20}}>
                <Button onClick={() => setIsOpen(old => !old)}>{isOpen ? 'Close' : 'Open'}</Button>
                <Drawer isOpen={isOpen} onWrapperClick={() => setIsOpen(false)} type={type} disableBlur={disableBlur} border={border} square={square} disableShadow={disableShadow} disableWrapper={disableWrapper} css={{p: '$md'}}>
                    <Text h2>Hello world!</Text>
                </Drawer>
                <div>
                    <Radio onChange={() => setType('default')} checked={type == 'default'}>default</Radio>
                    <Radio onChange={() => setType('cloud')} checked={type == 'cloud'}>cloud</Radio>
                </div>
                <Checkbox onChange={() => setBorder(old => !old)} checked={border}>border</Checkbox>
                <Checkbox onChange={() => setDisableBlur(old => !old)} checked={disableBlur} >disable blur</Checkbox>
                <Checkbox onChange={() => setDisableShadow(old => !old)} checked={disableShadow}>disable shadow</Checkbox>
                <Checkbox onChange={() => setDisableWrapper(old => !old)} checked={disableWrapper}>disable wrapper</Checkbox>
                <Checkbox onChange={() => setSquare(old => !old)} checked={square}>square</Checkbox>
            </div>
        )
    }
    
    export default ExampleStyleVariants;`,
}

export default Codes;