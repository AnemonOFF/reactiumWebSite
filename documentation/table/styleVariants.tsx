import { useState } from "react";
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

export default ExampleStyleVariants;