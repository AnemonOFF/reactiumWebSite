import { Card, Grid, GridItem, GridRow } from "../../reactiumui";
import { apiBreakpointsRows, apiRows } from "../common";
import { DocData } from "../types";

const requiredChildrenProp = apiRows['children'];
requiredChildrenProp.isRequired = true;

const GridDoc: DocData = {
    name: 'Grid',
    import: 'import {Grid, GridItem, GridRow} from \'reactiumui\';',
    apis: [
        {
            name: 'Grid props',
            rows: [
                requiredChildrenProp,
                { attribute: 'fixed', isRequired: false, type: ['boolean', 'max'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in grid'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in grid'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in grid'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: '5', version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'GridRow props',
            rows: [
                requiredChildrenProp,
                { attribute: 'fixed', isRequired: false, type: ['boolean', 'max'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in row'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in row'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in row'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                { attribute: 'direction', isRequired: false, type: ['FlexDirection'], default: undefined, version: '1.0.0', description: 'CSS flex-direction parameter'},
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'GridItem props',
            rows: [
                apiRows['children'],
                { attribute: 'all', isRequired: false, type: ['number', 'boolean'], default: 'false', version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for all breakpoints'},
                { attribute: 'xs', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for xs devices (650px)'},
                { attribute: 'sm', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for sm devices (960px)'},
                { attribute: 'md', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for md devices (1280px)'},
                { attribute: 'lg', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for xl devices (1400px)'},
                { attribute: 'xl', isRequired: false, type: ['number', 'boolean'], default: undefined, version: '1.0.0', description: 'Set width (columns numbers, pixels or procents) of this item for lg devices (1920px)'},
                { attribute: 'fixed', isRequired: false, type: ['boolean', 'max'], default: 'false', version: '1.0.0', description: 'Set fixed prop for all GridItems'},
                { attribute: 'columns', isRequired: false, type: ['number'], default: '12', version: '1.0.0', description: 'Count of columns in grid. DO NOT MODIFY IT'},
                { attribute: 'rowGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between rows in row'},
                { attribute: 'columnGap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Gap between columns in row'},
                { attribute: 'gap', isRequired: false, type: ['number'], default: undefined, version: '1.0.0', description: 'Syntax sugar for rowGap and columnGap'},
                { attribute: 'display', isRequired: false, type: ['Display'], default: undefined, version: '1.0.0', description: 'CSS display parameter'},
                { attribute: 'justify', isRequired: false, type: ['JustifyContent'], default: undefined, version: '1.0.0', description: 'CSS justify-content parameter'},
                { attribute: 'alignItems', isRequired: false, type: ['AlignItems'], default: undefined, version: '1.0.0', description: 'CSS align-items parameter'},
                { attribute: 'alignContent', isRequired: false, type: ['AlignContent'], default: undefined, version: '1.0.0', description: 'CSS align-content parameter'},
                { attribute: 'direction', isRequired: false, type: ['FlexDirection'], default: undefined, version: '1.0.0', description: 'CSS flex-direction parameter'},
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
            isResponsive: true,
            code: (
                <Grid>
                    <GridItem>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 3</Card>
                    </GridItem>
                    <GridItem>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 3</Card>
                    </GridItem>
                    <GridItem>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 3</Card>
                    </GridItem>
                </Grid>
            ),
            exampleCode: `<Grid>
    <GridItem>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 3</Card>
    </GridItem>
    <GridItem>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 3</Card>
    </GridItem>
    <GridItem>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 3</Card>
    </GridItem>
</Grid>`
        },
        {
            name: 'Custom columns',
            uid: 'customcolumns',
            description: 'By default, grid have 12 columns, if you want custom count, just set it by \'columns\' tag. To create new row, just fill previous.',
            isResponsive: true,
            code: (
                <Grid columns={10}>
                    <GridItem all={6}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
                    </GridItem>
                    <GridItem all={2}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
                    </GridItem>
                    <GridItem all={2}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
                    </GridItem>
                    <GridItem all={4}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
                    </GridItem>
                </Grid>
            ),
            exampleCode: `<Grid columns={10}>
    <GridItem all={6}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
    </GridItem>
    <GridItem all={2}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
    </GridItem>
    <GridItem all={2}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
    </GridItem>
    <GridItem all={4}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
    </GridItem>
</Grid>`
        },
        {
            name: 'Rows',
            uid: 'rows',
            description: 'If you want to use habitual rows, you can. Moreover, you can set custom count of columns for each row',
            isResponsive: true,
            code: (
                <Grid>
                    <GridRow>
                        <GridItem all={5}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
                        </GridItem>
                        <GridItem all={2}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
                        </GridItem>
                        <GridItem all={5}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
                        </GridItem>
                    </GridRow>
                    <GridRow columns={20}>
                        <GridItem all={7}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
                        </GridItem>
                        <GridItem all={9}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
                        </GridItem>
                        <GridItem all={4}>
                            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
                        </GridItem>
                    </GridRow>
                </Grid>
            ),
            exampleCode: `<Grid>
    <GridRow>
        <GridItem all={5}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
        </GridItem>
        <GridItem all={2}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
        </GridItem>
        <GridItem all={5}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
        </GridItem>
    </GridRow>
    <GridRow columns={20}>
        <GridItem all={7}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
        </GridItem>
        <GridItem all={9}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
        </GridItem>
        <GridItem all={4}>
            <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
        </GridItem>
    </GridRow>
</Grid>`
        },
        {
            name: 'Gap',
            uid: 'gap',
            description: 'To set space size between items, use columnGap, rowGap or gap (combines the previous two) tags. Of course, you can set for each GridRow custom value of columnGap',
            isResponsive: true,
            code: (
                <Grid columnGap={20} rowGap={10}>
                    <GridItem all={6}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
                    </GridItem>
                    <GridItem all={4}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
                    </GridItem>
                    <GridItem all={5}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
                    </GridItem>
                </Grid>
            ),
            exampleCode: `<Grid columnGap={20} rowGap={10}>
    <GridItem all={6}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
    </GridItem>
    <GridItem all={4}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
    </GridItem>
    <GridItem all={5}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
    </GridItem>
</Grid>`
        },
        {
            name: 'Fixed and pixels',
            uid: 'fixedandpixels',
            description: 'If you want to make one of the item be fixed with width in pixels, set flat \'fixed\' and set width as columns. To make this item responsive, set \'fixed\' to \'max\'',
            isResponsive: true,
            code: (
                <Grid>
                    <GridItem fixed all={300}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
                    </GridItem>
                    <GridItem fixed='max' all={500}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
                    </GridItem>
                </Grid>
            ),
            exampleCode: `<Grid>
    <GridItem fixed all={300}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 6</Card>
    </GridItem>
    <GridItem all={3}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 6</Card>
    </GridItem>
    <GridItem all={4}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 6</Card>
    </GridItem>
    <GridItem fixed all={400}>
        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 6</Card>
    </GridItem>
</Grid>`
        }
    ]
}

export default GridDoc;