import { List, ListItem } from "../../reactiumui";
import { apiRows } from "../common";
import { DocData } from "../types";

const ListDoc: DocData = {
    name: 'List',
    import: 'import {List, ListItem} from \'reactiumui\';',
    apis: [
        {
            name: 'List props',
            rows: [
                apiRows['children'],
                { attribute: 'listType', isRequired: false, type: ['ordered', 'unordered'], default: undefined, version: '1.0.0', description: 'Set list type' },
                { attribute: 'listStyleType', isRequired: false, type: ['ListStyleType'], default: 'ordered', version: '1.0.0', description: 'CSS list-style-type parameter' },
                { attribute: 'customMarkerContent', isRequired: false, type: ['string'], default: undefined, version: '1.0.0', description: 'Content of all ListItem markers' },
                { attribute: 'gap', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between list items' },
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter' },
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter' },
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter' },
                { attribute: 'direction', isRequired: false, type: ['FlexDirection'], default: undefined, version: '1.0.0', description: 'CSS flex-direction parameter' },
                { attribute: 'listStylePosition', isRequired: false, type: ['inside', 'outside'], default: 'inside', version: '1.0.0', description: 'Position of list markers' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'ListItem props',
            rows: [
                apiRows['children'],
                { attribute: 'customMarkerContent', isRequired: false, type: ['string'], default: undefined, version: '1.0.0', description: 'Content of marker' },
                { attribute: 'markerCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override marker CSS styles' },
                { attribute: 'defaultMarkerStyle', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set default marker CSS styles' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        }
    ],
    examples: [
        {
            name: 'Default',
            uid: 'default',
            isResponsive: false,
            code: (
                <List>
                    <ListItem>First element</ListItem>
                    <ListItem>Second element</ListItem>
                    <ListItem>Third element</ListItem>
                </List>
            ),
            exampleCode: `<List>
    <ListItem>First element</ListItem>
    <ListItem>Second element</ListItem>
    <ListItem>Third element</ListItem>
</List>`,
        },
        {
            name: 'Unordered georgian',
            uid: 'unorderedgeorgian',
            description: 'If you want to disable reactium styles for marker, set \'defaultMarkerStyle\' to item',
            isResponsive: false,
            code: (
                <List listType="unordered">
                    <ListItem>First element</ListItem>
                    <ListItem>Second element</ListItem>
                    <ListItem defaultMarkerStyle>Third element</ListItem>
                </List>
            ),
            exampleCode: `<List listType="unordered" listStyleType="georgian">
    <ListItem>First element</ListItem>
    <ListItem>Second element</ListItem>
    <ListItem>Third element</ListItem>
</List>`
        },
        {
            name: 'Other list style type',
            uid: 'otherliststyletype',
            isResponsive: false,
            code: (
                <List listStyleType="georgian">
                    <ListItem>First element</ListItem>
                    <ListItem>Second element</ListItem>
                    <ListItem>Third element</ListItem>
                </List>
            ),
            exampleCode: `<List listStyleType="georgian">
    <ListItem>First element</ListItem>
    <ListItem>Second element</ListItem>
    <ListItem>Third element</ListItem>
</List>`
        },
        {
            name: 'Custom marker',
            uid: 'custommarker',
            isResponsive: false,
            code: (
                <List customMarkerContent="👉">
                    <ListItem>First element</ListItem>
                    <ListItem>Second element</ListItem>
                    <ListItem>Third element</ListItem>
                    <ListItem customMarkerContent="🤜">Fourth element</ListItem>
                    <ListItem customMarkerContent="🤙">Fifth element</ListItem>
                </List>
            ),
             exampleCode: `<List customMarkerContent="👉">
    <ListItem>First element</ListItem>
    <ListItem>Second element</ListItem>
    <ListItem>Third element</ListItem>
    <ListItem customMarkerContent="🤜">Fourth element</ListItem>
    <ListItem customMarkerContent="🤙">Fifth element</ListItem>
</List>`
        }
    ]
}

export default ListDoc;