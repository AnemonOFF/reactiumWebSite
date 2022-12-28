import React from "react";
import { Container, Text, CSS, List, styled, Card } from "reactiumui";
import ThemeToggle from "../themeToggle";
import NavListLink from "./navListLink";

const StyledBrandDiv = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 73,
})

interface Props {
    components: string[],
}

const Sidebar: React.FunctionComponent<Props> = ({ components }) => {
    const brandCss: CSS = {
        px: '$xs',
        top: 0,
        left: 0,
    }

    return (
        <Container position='fixed' preventOverScreen hideScroll all={250} fixed css={brandCss}>
            <StyledBrandDiv>
                <Text h2 gradient={['$primary', '$blue800']}>ReactiumUI</Text>
                <ThemeToggle />
            </StyledBrandDiv>
            <Text>Sponsors</Text>
            <Card type={'flat'} css={{p: '$xs', textAlign: 'center', color: '$accent'}}>
                Your logo can be here
            </Card>
            <List listStyleType="disc" gap='$xs' css={{mt: '$xs'}}>
                <NavListLink href='/docs'>Getting started</NavListLink>
                <NavListLink href='/docs/theming'>Theming</NavListLink>
                {components.map((name, i) => <NavListLink key={i} href={`/docs/${name.toLowerCase()}`}>{name}</NavListLink>)}
            </List>
        </Container>
    )
}

export default React.memo(Sidebar);