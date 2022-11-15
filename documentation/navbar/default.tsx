import { Text, Navbar, NavbarContent, NavbarItem, NavbarLink } from "../../reactiumui";

const ExampleDefault: React.FunctionComponent = () => {
    return (
        <div style={{ height: '300vh' }}>
            <Navbar>
                <NavbarContent>
                    <NavbarItem><Text gradient={['$primary', '$success']}>Lorem.</Text></NavbarItem>
                </NavbarContent>
                <NavbarContent hideOnmedia='xs'>
                    <NavbarLink active>Home</NavbarLink>
                    <NavbarLink>Store</NavbarLink>
                    <NavbarLink>About</NavbarLink>
                </NavbarContent>
                <NavbarContent>
                    <NavbarLink>Login</NavbarLink>
                    <NavbarLink><Text color="primary">Sign Up</Text></NavbarLink>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default ExampleDefault;