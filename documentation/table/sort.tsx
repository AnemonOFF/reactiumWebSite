import { ReactNode } from "react";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "reactiumui";

const data = [
    {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
];

const customComparer = (a: ReactNode, b: ReactNode) => {
    // return 0 if a == b, >0 if a > b, <0 if a < b
    return (a as number) % 10 - (b as number) % 10;
}

const ExampleSort: React.FunctionComponent = () => {
    return (
        <Table>
            <TableHeader>
                <TableColumn sort>Id</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn sort={customComparer}>Age</TableColumn>
                <TableColumn sort>Gender</TableColumn>
                <TableColumn sort>Job</TableColumn>
                <TableColumn sort>Country</TableColumn>
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
    )
}

export default ExampleSort;