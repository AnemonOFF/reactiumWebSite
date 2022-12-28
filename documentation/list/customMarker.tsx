import { List, ListItem } from "reactiumui";

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

export default ExampleCustomMarker;