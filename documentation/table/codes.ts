import { ExampleCodes } from "../types";

const Codes: ExampleCodes = {
    dynamicpagination: `import { Table, TableBody, TableCell, TableColumn, TableFooter, TableHeader, TablePagination, TableRow } from "reactiumui";

    const ExampleDynamicPagination: React.FunctionComponent = () => {
        const loadMore = async (rowsPerPage: number, page: number) => {
            const data = await fetch(\`https://jsonplaceholder.typicode.com/users?_limit=$\{rowsPerPage}&_page=$\{page}\`)
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
    
    export default ExampleDynamicPagination;`,
    infinityscroll: `import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "reactiumui";

    const ExampleInfinityScroll: React.FunctionComponent = () => {
        const loadMore = async (rowsPerPage: number, page: number) => {
            const data = await fetch(\`https://jsonplaceholder.typicode.com/users?_limit=$\{rowsPerPage}&_page=$\{page}\`)
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
    
    export default ExampleInfinityScroll;`,
    pagination: `import { Table, TableBody, TableCell, TableColumn, TableFooter, TableHeader, TablePagination, TableRow } from "reactiumui";

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
    
    export default ExamplePagination;`,
    resizablecolumns: `import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "reactiumui";

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
    
    export default ExampleResizableColumns;`,
    select: `import { useState } from "react";
    import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Checkbox } from "reactiumui";
    
    const data = [
        {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
        {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
        {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
        {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
        {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
        {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    ];
    
    const ExampleSelect: React.FunctionComponent = () => {
        const [selectType, setSelectType] = useState<'single' | 'multiple'>('single');
        const [hideCheckboxes, setHideCheckboxes] = useState<boolean>(false);
        const [selectedUids, setSelectedUids] = useState<string[]>([]);
    
        const onSelectChange = (uids: string[]) => {
            setSelectedUids(uids);
        }
    
        return (
            <>
                <select value={selectType} onChange={(e) => setSelectType(e.target.value as 'single' | 'multiple')}>
                    <option value="single">single</option>
                    <option value="multiple">multiple</option>
                </select>
                <Checkbox checked={hideCheckboxes} onChange={() => setHideCheckboxes(old => !old)} disabled={selectType == 'single'}>hide checkboxes</Checkbox>
                <Table select={selectType} hideCheckboxColumn={hideCheckboxes} onSelectChange={onSelectChange} selectedUids={selectedUids}>
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
            </>
        )
    }
    
    export default ExampleSelect;`,
    sort: `import { ReactNode } from "react";
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
    
    export default ExampleSort;`,
    stylevariants: `import { useState } from "react";
    import { styled, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Radio, Checkbox } from "reactiumui";
    
    const StyledFooter = styled('div', {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '$background',
        border: '1px solid $backgroundAccent',
        borderBottom: 'none',
        borderTopLeftRadius: '$xs',
        borderTopRightRadius: '$xs',
        shadow: '$md',
        zIndex: '$10',
    })
    
    const StyledWrapper = styled('div', {
        p: '$md',
        display: 'flex',
        '& label': {
            m: 10
        },
        '& input': {
            mr: 5
        },
        '&:not(:first-child)': {
            borderTop: '1px solid $backgroundAccent'
        }
    })
    
    const data = [
        {id: 1, name: 'Andrew', age: 27, gender: 'Male', job: 'Doctor', country: 'Canada'},
        {id: 7, name: 'Jane', age: 25, gender: 'Female', job: 'IT', country: 'Lithuania'},
        {id: 21, name: 'Len', age: 31, gender: 'Male', job: 'Enginer', country: 'France'},
        {id: 14, name: 'Kirill', age: 22, gender: 'Male', job: 'Enginer', country: 'Canada'},
        {id: 25, name: 'Anna', age: 29, gender: 'Female', job: 'Waiter', country: 'China'},
        {id: 57, name: 'Martin', age: 22, gender: 'Male', job: 'IT', country: 'Spain'},
    ];
    
    const ExampleStyleVariants: React.FunctionComponent = () => {
        const [type, setType] = useState<'default' | 'square' | 'circle'>('default');
        const [cloud, setCloud] = useState<boolean>(false);
        const [border, setBorder] = useState<boolean>(false);
        const [blur, setBlur] = useState<boolean>(false);
        const [zebra, setZebra] = useState<boolean>(false);
        const [hoverable, setHoverable] = useState<boolean>(false);
        const [enableBG, setEnableBG] = useState<boolean>(false);
    
        return (
            <div style={{padding: 20, background: enableBG ? 'url(https://i.pinimg.com/originals/fb/3f/c3/fb3fc3b7b58832c7f302273675121df4.jpg) no-repeat' : 'transparent'}}>
                <Checkbox onChange={() => setEnableBG(old => !old)} checked={enableBG}>background</Checkbox>
                <Table type={type} cloud={cloud} bordered={border} blur={blur} zebra={zebra} hoverable={hoverable} wrapperCss={{mt: 20}}>
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
                <StyledFooter>
                    <StyledWrapper>
                        <Radio checked={type == 'default'} onChange={() => setType('default')}>default</Radio>
                        <Radio checked={type == 'square'} onChange={() => setType('square')}>square</Radio>
                        <Radio checked={type == 'circle'} onChange={() => setType('circle')}>circle</Radio>
                    </StyledWrapper>
                    <StyledWrapper>
                        <Checkbox checked={border} onChange={() => setBorder(old => !old)}>border</Checkbox>
                        <Checkbox checked={cloud} onChange={() => setCloud(old => !old)}>cloud</Checkbox>
                        <Checkbox checked={blur} onChange={() => setBlur(old => !old)}>blur</Checkbox>
                        <Checkbox checked={zebra} onChange={() => setZebra(old => !old)}>zebra</Checkbox>
                        <Checkbox checked={hoverable} onChange={() => setHoverable(old => !old)}>hoverable</Checkbox>
                    </StyledWrapper>
                </StyledFooter>
            </div>
        )
    }
    
    export default ExampleStyleVariants;`,
}

export default Codes;