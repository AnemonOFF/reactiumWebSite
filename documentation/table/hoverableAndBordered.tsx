import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const ExampleHoverableAndBordered: React.FunctionComponent = () => {

    return (
        <Table bordered hoverable>
            <TableHeader>
                <TableRow>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Gender</TableColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>John</TableCell>
                    <TableCell>Male</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Eva</TableCell>
                    <TableCell>Female</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Tony</TableCell>
                    <TableCell>Male</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default ExampleHoverableAndBordered;