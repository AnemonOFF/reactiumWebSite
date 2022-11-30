import { useState } from "react";
import { styled, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "../../reactiumui";

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
            <label htmlFor="bg">
                <input type="checkbox" id='bg' onChange={() => setEnableBG(old => !old)} checked={enableBG} />background
            </label>
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
                    <label htmlFor="typeDefault">
                        <input type='radio' id='typeDefault' name='type' value='default' onChange={() => setType('default')} checked={type == 'default'} />default
                    </label>
                    <label htmlFor="typeSquare">
                        <input type='radio' id='typeSquare' name='type' value='square' onChange={() => setType('square')} checked={type == 'square'} />square
                    </label>
                    <label htmlFor="typeCircle">
                        <input type='radio' id='typeCircle' name='type' value='circle' onChange={() => setType('circle')} checked={type == 'circle'} />circle
                    </label>
                </StyledWrapper>
                <StyledWrapper>
                    <label htmlFor='border'>
                        <input type='checkbox' id='border' onChange={() => setBorder(old => !old)} checked={border} />border
                    </label>
                    <label htmlFor='cloud'>
                        <input type='checkbox' id='cloud' onChange={() => setCloud(old => !old)} checked={cloud} />cloud
                    </label>
                    <label htmlFor='blur'>
                        <input type='checkbox' id='blur' onChange={() => setBlur(old => !old)} checked={blur} />blur
                    </label>
                    <label htmlFor='zebra'>
                        <input type='checkbox' id='zebra' onChange={() => setZebra(old => !old)} checked={zebra} />zebra
                    </label>
                    <label htmlFor='hoverable'>
                        <input type='checkbox' id='hoverable' onChange={() => setHoverable(old => !old)} checked={hoverable} />hoverable
                    </label>
                </StyledWrapper>
            </StyledFooter>
        </div>
    )
}

export default ExampleStyleVariants;