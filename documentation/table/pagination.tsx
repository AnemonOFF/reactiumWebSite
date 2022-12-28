import { Table, TableBody, TableCell, TableColumn, TableFooter, TableHeader, TablePagination, TableRow } from "reactiumui";

const data = [
    {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 2, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 3, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 87, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 88, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 89, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 90, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 91, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 92, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 93, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 94, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 95, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 96, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 8, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 57, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 58, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 59, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 60, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 43, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 100, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 103, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 106, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 131, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 34, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 35, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 36, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 37, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 38, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 120, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 121, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 122, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    {id: 123, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 124, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 125, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 126, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 127, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 128, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
];

const ExamplePagination: React.FunctionComponent = () => {
    return (
        <Table rowsPerPage={6} totalRows={data.length}>
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
            <TableFooter>
                <TablePagination />
            </TableFooter>
        </Table>
    )
}

export default ExamplePagination;