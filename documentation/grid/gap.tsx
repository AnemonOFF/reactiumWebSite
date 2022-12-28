import { Card, Grid, GridItem } from "reactiumui";

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

export default ExampleGap;