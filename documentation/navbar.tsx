import { apiRows } from "./common";
import { DocData } from "./types";

const NavbarDoc: DocData = {
    name: 'Navbar',
    import: `import {
    Navbar,
    NavbarCollapse,
    NavbarCollapseItem,
    NavbarCollapseLink,
    NavbarContent,
    NavbarItem,
    NavbarLink,
    NavbarToggle
} from \'reactiumui\';`,
    apis: [
        {
            name: 'Navbar props',
            rows: [
                apiRows['children'],
                { attribute: 'width', isRequired: false, type: ['NavbarWidth', 'string', 'number'], default: 'lg', version: '1.0.0', description: 'Max width of navbar' },
                { attribute: 'compactOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make navbar content when user scroll parent' },
                { attribute: 'hideOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Hide navbar when user scroll parent' },
                { attribute: 'type', isRequired: false, type: ['static', 'sticky', 'cloud'], default: 'sticky', version: '1.0.0', description: 'Variants of navbar view' },
                { attribute: 'compact', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Compact navbar' },
                { attribute: 'square', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set navbar border-radius 0' },
                { attribute: 'disableBlur', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Disable navbar background blur' },
                { attribute: 'disableShadow', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Disable navbar shadow' },
                { attribute: 'border', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make navbar bordered' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarCollapse props',
            rows: [
                apiRows['children'],
                { attribute: 'open', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0', description: 'Set collapse open state' },
                { attribute: 'onOpenChange', isRequired: false, type: ['(isOpen: boolean) => void'], default: undefined, version: '1.0.0', description: 'On collapse open event' },
                { attribute: 'gap', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between collapse items' },
                { attribute: 'fullScreen', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Stretch collapse to full screen' },
                apiRows['hideScroll'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarCollapseItem props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarCollapseLink props',
            rows: [
                apiRows['children'],
                { attribute: 'activeColor', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0', description: 'Set text color when link active (current page)' },
                { attribute: 'href', isRequired: false, type: ['string'], default: undefined, version: '1.0.0', description: 'Anchor href prop' },
                { attribute: 'target', isRequired: false, type: ['HTMLTarget'], default: undefined, version: '1.0.0', description: 'Anchor target prop' },
                { attribute: 'active', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set link active state' },
                { attribute: 'itemCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override NavbarCollapseItem CSS styles' },
                { attribute: 'collapseItemProps', isRequired: false, type: ['NavbarCollapseItemProps'], default: undefined, version: '1.0.0', description: 'NavbarCollapseItem props' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarContent props',
            rows: [
                apiRows['children'],
                { attribute: 'gap', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between content items' },
                { attribute: 'hideOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Hide content when user scroll parent' },
                { attribute: 'showOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Show content when user scroll parent' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarItem props',
            rows: [
                apiRows['children'],
                { attribute: 'hideOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Hide item when user scroll parent' },
                { attribute: 'showOnScroll', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Show item when user scroll parent' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarLink props',
            rows: [
                apiRows['children'],
                { attribute: 'itemCss', isRequired: false, type: ['CSS'], default: undefined, version: '1.0.0', description: 'Override NavbarItem CSS styles' },
                { attribute: 'type', isRequired: false, type: ['color', 'background', 'underline'], default: 'color', version: '1.0.0', description: 'Variants of link view' },
                { attribute: 'active', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Set link active state' },
                { attribute: 'navbarItemProps', isRequired: false, type: ['NavbarItemProps'], default: undefined, version: '1.0.0', description: 'NavbarItem props' },
                { attribute: 'backgroundRadius', isRequired: false, type: ['Radii', 'string', 'number'], default: undefined, version: '1.0.0', description: 'Background border radius of link when type prop is background and active state is true' },
                { attribute: 'backgroundPadding', isRequired: false, type: ['Space', 'string', 'number'], default: undefined, version: '1.0.0', description: 'Background padding of link when type prop is background and active state is true' },
                { attribute: 'backgroundColor', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0', description: 'Background color of link when type prop is background and active state is true' },
                { attribute: 'backgroundActiveColor', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0', description: 'Color of link when type prop is background and active state is true' },
                { attribute: 'underlineWidth', isRequired: false, type: ['string', 'number'], default: undefined, version: '1.0.0', description: 'Width of underline when type prop is underline and active state is true' },
                { attribute: 'activeColor', isRequired: false, type: ['ThemedColors', 'string'], default: undefined, version: '1.0.0', description: 'Color of link when type prop is color and active state is true' },
                { attribute: 'href', isRequired: false, type: ['string'], default: undefined, version: '1.0.0', description: 'Anchor href prop' },
                { attribute: 'target', isRequired: false, type: ['HTMLTarget'], default: undefined, version: '1.0.0', description: 'Anchor target prop' },
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'NavbarToggle props',
            rows: [
                { attribute: 'active', isRequired: false, type: ['boolean'], default: undefined, version: '1.0.0', description: 'Set active toggle state' },
                { attribute: 'onClick', isRequired: false, type: ['() => void'], default: undefined, version: '1.0.0', description: 'OnClick toggle event' },
                { attribute: 'onActiveChange', isRequired: false, type: ['(isActive: boolean) => void'], default: undefined, version: '1.0.0', description: 'On active state change toggle event' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
    ],
    examples: [
        
    ]
}

export default NavbarDoc;