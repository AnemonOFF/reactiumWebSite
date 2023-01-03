import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    customcolumns: `import { Card, Grid, GridItem } from "reactiumui";

    const ExampleCustomColumns: React.FunctionComponent = () => {
        return (
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
        )
    }
    
    export default ExampleCustomColumns;`,
    default: `import { Card, Grid, GridItem } from "reactiumui";

    const ExampleDefault: React.FunctionComponent = () => {
        return (
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
        )
    }
    
    export default ExampleDefault;`,
    fixedandpixels: `import { Card, Grid, GridItem, GridRow } from "reactiumui";

    const ExampleFixedAndPixels: React.FunctionComponent = () => {
        return (
            <Grid>
                <GridRow>
                    <GridItem fixed all={150}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>1 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>2 of 6</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>3 of 8</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>4 of 8</Card>
                    </GridItem>
                    <GridItem all={3}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>5 of 8</Card>
                    </GridItem>
                </GridRow>
                <GridRow>
                    <GridItem fixed='max' all={500}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>6 of 8</Card>
                    </GridItem>
                    <GridItem all={8}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>7 of 8</Card>
                    </GridItem>
                    <GridItem all={4}>
                        <Card type='flat' css={{height: 100, width: '100%', p: 10}}>8 of 8</Card>
                    </GridItem>
                </GridRow>
            </Grid>
        )
    }
    
    export default ExampleFixedAndPixels;`,
    gap: `import { Card, Grid, GridItem } from "reactiumui";

    const ExampleGap: React.FunctionComponent = () => {
        return (
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
        )
    }
    
    export default ExampleGap;`,
    rows: `import { Card, Grid, GridItem, GridRow } from "reactiumui";

    const ExampleRows: React.FunctionComponent = () => {
        return (
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
        )
    }
    
    export default ExampleRows;`,
}

export default Codes;