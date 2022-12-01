import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const ExampleInfinityScroll: React.FunctionComponent = () => {
    const loadMore = async (rowsPerPage: number, page: number) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${rowsPerPage}&_page=${page}`)
            .then(d => d.json());
        return {
            totalRowsCount: 10,
            rows: data.map((x: {id: string, name: string, username: string, email: string, website: string}) => (
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
        <Table rowsPerPage={2} infinityScrollHeight={200} onLoadMore={loadMore}>
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Username</TableColumn>
                <TableColumn>Email</TableColumn>
                <TableColumn>Website</TableColumn>
            </TableHeader>
            <TableBody>
            </TableBody>
        </Table>
    )
}

export default ExampleInfinityScroll;