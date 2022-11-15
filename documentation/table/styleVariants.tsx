import { List, ListItem, Text, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const ExampleStyleVariants: React.FunctionComponent = () => {
    const data = [
        {id: 1, name: 'Andrew', age: 27, gender: 'Male'},
        {id: 7, name: 'Jane', age: 25, gender: 'Female'},
        {id: 21, name: 'Len', age: 31, gender: 'Male'},
        {id: 14, name: 'Kirill', age: 22, gender: 'Male'},
        {id: 25, name: 'Anna', age: 29, gender: 'Female'},
    ];

    const types = ['default', 'square', 'circle']

    return (
        <List listStyleType="none" direction="row">
            {types.map((t, i) => (
                <ListItem key={i} css={{m: '$xs'}}>
                    <Text css={{textAlign: 'center', width: '100%'}}>{t}</Text>
                    <Table type={t as 'default' | 'square' | 'circle'}>
                        <TableHeader>
                            <TableRow>
                                <TableColumn>Id</TableColumn>
                                <TableColumn>Name</TableColumn>
                                <TableColumn>Age</TableColumn>
                                <TableColumn>Gender</TableColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((v, i) => (
                                <TableRow key={i}>
                                    <TableCell>{v.id}</TableCell>
                                    <TableCell>{v.name}</TableCell>
                                    <TableCell>{v.age}</TableCell>
                                    <TableCell>{v.gender}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ListItem>        
            ))}
        </List>
    )
}

export default ExampleStyleVariants;