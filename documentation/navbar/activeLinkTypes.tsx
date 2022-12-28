import { useState } from "react";
import { Text, Navbar, NavbarContent, NavbarItem, NavbarLink, styled, Radio } from "reactiumui";

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

const ExampleActiveLinkTypes: React.FunctionComponent = () => {
    const [type, setType] = useState<'cloud' | 'static' | 'sticky'>('sticky');
    const [activeType, setActiveType] = useState<'color' | 'background' | 'underline'>('color');
    const [activeColor, setActiveColor] = useState<string>('primary');

    return (
        <>
            <Navbar type={type}>
                <NavbarContent>
                    <NavbarItem><Text gradient={['$primary', '$success']}>Lorem.</Text></NavbarItem>
                </NavbarContent>
                <NavbarContent hideOnmedia='xs'>
                    <NavbarLink type={activeType} activeColor={activeColor} active>Home</NavbarLink>
                    <NavbarLink>Store</NavbarLink>
                    <NavbarLink>About</NavbarLink>
                </NavbarContent>
                <NavbarContent>
                    <NavbarLink>Login</NavbarLink>
                    <NavbarLink><Text color="primary">Sign Up</Text></NavbarLink>
                </NavbarContent>
            </Navbar>
            <div style={{padding: 25}}>
                <Text h1>Lorem ipsum dolor sit amet</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet tellus malesuada, pharetra purus sit amet, viverra libero. Duis rutrum, lorem ac aliquet posuere, urna dui fermentum dolor, id ullamcorper purus nibh a magna. Quisque est odio, efficitur vitae ultrices a, convallis sed ipsum. Nunc scelerisque lacus eget placerat maximus. Etiam ut rhoncus dolor. Donec cursus nunc dui, in placerat lectus vestibulum quis. Donec tincidunt mi non nunc interdum commodo. Nulla quis felis eget eros pretium elementum et at sem. Fusce nec leo id justo suscipit interdum id non leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vestibulum turpis non odio iaculis, ut consequat eros consectetur. Nunc posuere erat eu felis vestibulum tempus.</Text>
                <Text>Duis auctor vulputate iaculis. Aenean sagittis, augue et porta tempus, nibh neque lacinia dui, at congue eros tortor congue eros. Vestibulum tincidunt odio libero, a iaculis nibh ultrices ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus fermentum dui, vel sodales ante porta eu. Praesent libero arcu, pulvinar eu ultricies vitae, ornare a urna. Praesent vel ex purus.</Text>
                <Text>Donec eu urna nisl. Nullam sem nibh, euismod id ullamcorper ac, euismod quis lectus. Donec ut ligula ut felis eleifend eleifend. Nunc ut rhoncus est. Pellentesque eros lectus, vehicula at placerat eu, posuere at massa. Vestibulum eu metus eget quam condimentum lobortis. Duis accumsan et velit ut cursus. Vestibulum sit amet dictum massa. Donec suscipit dignissim elit quis pellentesque. Aliquam erat volutpat. Pellentesque at maximus diam. Nullam tristique porta lacus eu gravida. Phasellus ipsum tellus, feugiat eu nisl id, vehicula dapibus nisi. Vestibulum et lectus varius tellus fermentum viverra. Maecenas leo nisl, feugiat in facilisis a, cursus porttitor nulla. Aenean sed pharetra massa.</Text>
                <Text>Pellentesque ut varius urna, ut ullamcorper dui. Etiam eleifend dapibus ligula vitae imperdiet. Pellentesque pellentesque neque sapien, ut condimentum dolor gravida ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sodales ex laoreet, sollicitudin lorem non, facilisis ipsum. Vivamus vel dolor lectus. Donec lacinia dolor quam, sed fringilla felis aliquam vel. Sed porta euismod massa in lobortis. Vivamus non aliquam nibh. Morbi fermentum et risus nec sagittis. Sed quis pretium lacus, id efficitur elit. Phasellus sit amet magna id nunc fringilla pellentesque mattis id arcu.</Text>
                <Text>Donec augue turpis, rhoncus eu tempor ac, viverra id quam. Morbi hendrerit sapien quam, ut venenatis diam cursus non. Nullam ut semper elit. Suspendisse potenti. Duis at commodo nulla. Mauris porttitor ante at massa sodales, sit amet fermentum enim consequat. Maecenas quis congue lacus, eget congue mauris. Nulla ornare congue turpis ut mattis. Curabitur tempor a ipsum sit amet cursus. Curabitur vitae mi varius magna fermentum aliquet non quis sem. Mauris posuere arcu sed ipsum tempus laoreet. Integer urna tellus, porttitor a quam accumsan, facilisis porta dolor. Duis nibh augue, fringilla sodales elit eget, sagittis ultricies lorem. Pellentesque tincidunt fermentum facilisis. Aliquam sagittis consequat enim eget accumsan. Aenean vulputate et enim eget consequat.</Text>
            </div>
            <StyledFooter>
                <StyledWrapper>
                    <Radio checked={type == 'static'} onChange={() => setType('static')}>static</Radio>
                    <Radio checked={type == 'sticky'} onChange={() => setType('sticky')}>sticky</Radio>
                    <Radio checked={type == 'cloud'} onChange={() => setType('cloud')}>cloud</Radio>
                </StyledWrapper>
                <StyledWrapper>
                    <Radio checked={activeType == 'color'} onChange={() => setActiveType('color')}>color</Radio>
                    <Radio checked={activeType == 'background'} onChange={() => setActiveType('background')}>background</Radio>
                    <Radio checked={activeType == 'underline'} onChange={() => setActiveType('underline')}>underline</Radio>
                </StyledWrapper>
                <StyledWrapper>
                    <Radio checked={activeColor == 'primary'} onChange={() => setActiveColor('primary')}>primary</Radio>
                    <Radio checked={activeColor == 'error'} onChange={() => setActiveColor('error')}>error</Radio>
                    <Radio checked={activeColor == 'success'} onChange={() => setActiveColor('success')}>success</Radio>
                    <Radio checked={activeColor == '#5C2D91'} onChange={() => setActiveColor('#5C2D91')}>custom</Radio>
                </StyledWrapper>
            </StyledFooter>
        </>
    )
}

export default ExampleActiveLinkTypes;