import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const data = [
    {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
];

const ExampleResizableColumns: React.FunctionComponent = () => {
    return (
        <div style={{width: '100%'}}>
            <Table resizableColumns>
                <TableHeader>
                    <TableColumn>Id</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Age</TableColumn>
                    <TableColumn>Gender</TableColumn>
                    <TableColumn>Job</TableColumn>
                    <TableColumn>Country</TableColumn>
                </TableHeader>
                <TableBody>
                    {data.map((v, i) => (
                        <TableRow key={i}>
                            <TableCell>{v.id}</TableCell>
                            <TableCell>{v.name}</TableCell>
                            <TableCell>{v.age}</TableCell>
                            <TableCell>{v.gender}</TableCell>
                            <TableCell>{v.job}</TableCell>
                            <TableCell>{v.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ExampleResizableColumns;