import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    custommarker: `import { List, ListItem } from "reactiumui";

    const ExampleCustomMarker: React.FunctionComponent = () => {
        return (
            <List customMarkerContent="👉">
                <ListItem>First element</ListItem>
                <ListItem>Second element</ListItem>
                <ListItem>Third element</ListItem>
                <ListItem customMarkerContent="🤜">Fourth element</ListItem>
                <ListItem customMarkerContent="🤙">Fifth element</ListItem>
            </List>
        )
    }
    
    export default ExampleCustomMarker;`,
    default: `import { List, ListItem } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
            <List>
                <ListItem>First element</ListItem>
                <ListItem>Second element</ListItem>
                <ListItem>Third element</ListItem>
            </List>
        )
    }
    
    export default ExampleDefault;`,
    otherliststyletype: `import { List, ListItem } from "reactiumui";

    const ExampleOtherListStyleType: React.FunctionComponent = () => {
        return (
            <List listStyleType="georgian">
                <ListItem>First element</ListItem>
                <ListItem>Second element</ListItem>
                <ListItem>Third element</ListItem>
            </List>
        )
    }
    
    export default ExampleOtherListStyleType;`,
    unorderedgeorgian: `import { List, ListItem } from "reactiumui";

    const ExampleUnorderedGeorgian: React.FunctionComponent = () => {
        return (
            <List listType="unordered">
                <ListItem>First element</ListItem>
                <ListItem>Second element</ListItem>
                <ListItem defaultMarkerStyle>Third element</ListItem>
            </List>
        )
    }
    
    export default ExampleUnorderedGeorgian;`,
}

export default Codes;