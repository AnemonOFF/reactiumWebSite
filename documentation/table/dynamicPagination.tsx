import { ReactNode } from "react";
import { Table, TableBody, TableCell, TableColumn, TableFooter, TableHeader, TablePagination, TableRow } from "../../reactiumui";

const data = [
    {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
    {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
    {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
    {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
    {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
    {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
];

const ExampleDynamicPagination: React.FunctionComponent = () => {
    const loadMore = async (rowsPerPage: number, page: number) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${rowsPerPage}&_page=${page}`)
            .then(d => d.json());
        return {
            totalRowsCount: 10,
            rows: data.map((x) => (
                <TableRow key={x.id}>
                    <TableCell>{x.id}</TableCell>
                    <TableCell>{x.name}</TableCell>
                    <TableCell>{x.username}</TableCell>
                    <TableCell>{x.email}</TableCell>
                    <TableCell>{x.website}</TableCell>
                </TableRow>
            ))
        }
    }

    return (
        <Table rowsPerPage={4} onLoadMore={loadMore}>
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Username</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Website</TableColumn>
            </TableHeader>
            <TableBody>
            </TableBody>
            <TableFooter>
                <TablePagination />
            </TableFooter>
        </Table>
    )
}

export default ExampleDynamicPagination;