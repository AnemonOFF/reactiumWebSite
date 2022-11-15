import { Card, Grid, GridItem, GridRow } from "../../reactiumui";

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

export default ExampleRows;