import { Card, Grid, GridItem } from "../../reactiumui";

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

export default ExampleDefault;