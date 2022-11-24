import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const ExampleCloudZebra: React.FunctionComponent = () => {

    return (
        <Table cloud zebra>
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Gender</TableColumn>
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

export default ExampleCloudZebra;