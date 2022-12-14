import { Card, Grid, GridItem, GridRow } from "reactiumui";

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

export default ExampleFixedAndPixels;