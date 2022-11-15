import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";
import { apiRows } from "../common";
import { DocData } from "../types";
import StyleVariants from "./styleVariants";

const TableDoc: DocData = {
    name: 'Table',
    import: `import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from \'reactiumui\';`,
    apis: [
        {
            name: 'Table props',
            rows: [
                apiRows['children'],
                { attribute: 'type', isRequired: false, type: ['default', 'square', 'circle'], default: 'default', version: '1.0.0', description: 'Variants of table view' },
                { attribute: 'cloud', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make shadow and padding for table' },
                { attribute: 'bordered', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Make table bordered' },
                { attribute: 'hoverable', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Wherther table rows can be hovered by the user' },
                { attribute: 'zebra', isRequired: false, type: ['boolean'], default: 'false', version: '1.0.0', description: 'Create zebra stripes in table' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['blur'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableBody props',
            rows: [
                apiRows['children'],
                { attribute: 'spaceBetweenRows', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between table rows' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['hideScroll'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableCell props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableColumn props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableHeader props',
            rows: [
                apiRows['children'],
                { attribute: 'spaceToBody', isRequired: false, type: ['number', 'string'], default: undefined, version: '1.0.0', description: 'Gap between table header and body' },
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
        {
            name: 'TableRow props',
            rows: [
                apiRows['children'],
                apiRows['hideOnMedia'],
                apiRows['showOnMedia'],
                apiRows['css'],
                apiRows['html'],
            ]
        },
    ],
    examples: [
        {
            name: 'Style variants',
            uid: 'stylevariants',
            isResponsive: false,
            code: (
                <>
                    <StyleVariants />
                </>
            ),
            exampleCode: `import { List, ListItem, Text, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

const StyleVariants: React.FunctionComponent = () => {
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

export default StyleVariants;`
        },
        {
            name: 'Cloud zebra',
            uid: 'cloudzebra',
            isResponsive: false,
            code: (
                <Table cloud zebra>
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
            ),
            exampleCode: `<Table cloud zebra>
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
</Table>`
        },
        {
            name: 'Hoverable and bordered',
            uid: 'hoverableandbordered',
            isResponsive: false,
            code: (
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
            ),
            exampleCode: `<Table bordered hoverable>
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
</Table>`
        }
    ]
}

export default TableDoc;