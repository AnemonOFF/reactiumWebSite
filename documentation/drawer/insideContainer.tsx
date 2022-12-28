import { useState } from "react";
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

export default ExampleInsideContainer;