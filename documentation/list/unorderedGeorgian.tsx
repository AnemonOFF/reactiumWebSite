import { List, ListItem } from "../../reactiumui";

const ExampleUnorderedGeorgian: React.FunctionComponent = () => {
    return (
        <List listType="unordered">
            <ListItem>First element</ListItem>
            <ListItem>Second element</ListItem>
            <ListItem defaultMarkerStyle>Third element</ListItem>
        </List>
    )
}

export default ExampleUnorderedGeorgian;