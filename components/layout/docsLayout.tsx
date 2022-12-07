import Link from "next/link";
import React, { useMemo } from "react";
import { GetComponentsNames } from "../../documentation";
import { DocData } from "../../documentation/types";
import { CSS, Container, Grid, GridItem, GridRow, Navbar, NavbarCollapse, NavbarContent, NavbarItem, NavbarLink, NavbarToggle, Text, List, ListItem, styled } from "../../reactiumui";
import ThemeToggle from "../themeToggle";
import NavCollapseLink from "./navCollapseLink";
import Sidebar from "./sidebar";

const StyledInternalLink = styled('a', {
    textDecoration: 'none',
    color: '$foreground',
    cursor: 'pointer',
})

interface Props {
    componentDoc?: DocData,
    children?: React.ReactNode
}

const DocsLayout: React.FunctionComponent<Props> = ({ children, componentDoc }) => {
    const components = useMemo(() => GetComponentsNames(), []);

    const links = useMemo(() => {
        if(!componentDoc)
            return [];
        let result = [
            {id: 'import', name: 'Import'},
            {id: 'examples', name: 'Examples'},
        ];
        if(componentDoc.useCases)
            result.splice(1, 0, {id: 'usecases', name: 'Use cases'});
        result = result.concat(componentDoc.examples.map(doc => ({id: `example-${doc.uid}`, name: doc.name})))
        result.push({id: 'api', name: 'API'});
        result = result.concat(componentDoc.apis.map(doc => ({id: `api-${doc.name.replace(' ', '-')}`, name: doc.name})));
        return result;
    }, [componentDoc])

    const navbarCss: CSS = {
        position: 'fixed',
        width: 'auto',
        '@sm': {
            left: 250,
        },
        '@md': {
            right: 250,
        },
    }

    return (
        <Grid>
            <GridRow>
                <GridItem fixed all={250} hideOnmedia={'sm'}>
                    <Sidebar components={components} />
                </GridItem>
                <GridItem css={{display: 'flex', flexDirection: 'column', paddingTop: 78, px: '$sm', alignItems: 'center'}}>
                    <Container all={1400}>
                        <Navbar type={'sticky'} wrapperCss={navbarCss} square disableShadow border>
                            <NavbarContent showOnmedia={'sm'}>
                                <NavbarItem>
                                    <NavbarToggle />
                                </NavbarItem>
                                <NavbarItem>
                                    <Text h2 gradient={['$primary', '$blue800']}>ReactiumUI</Text>
                                </NavbarItem>
                            </NavbarContent>
                            <NavbarContent hideOnmedia={'sm'} css={{width: '100%', justifyContent: 'center'}}>
                                <Link href='/docs'><NavbarLink active>Docs</NavbarLink></Link>
                                <NavbarLink href='https://github.com/AnemonOFF/reactiumui' target='_blank'>Github</NavbarLink>
                            </NavbarContent>
                            <NavbarContent showOnmedia={'sm'}>
                                <NavbarItem>
                                    <ThemeToggle />
                                </NavbarItem>
                            </NavbarContent>
                            <NavbarCollapse hideScroll>
                                <NavCollapseLink href='/docs'>Getting started</NavCollapseLink>
                                <NavCollapseLink href='/docs/theming'>Theming</NavCollapseLink>
                                {components.map((name, i) => <NavCollapseLink key={i} href={`/docs/${name.toLowerCase()}`}>{name}</NavCollapseLink>)}
                            </NavbarCollapse>
                        </Navbar>
                        {children}
                    </Container>
                </GridItem>
                <GridItem fixed all={250} hideOnmedia={'md'}>
                    <Container position='fixed' preventOverScreen hideScroll css={{mt: 73}}>
                        <Text h4>On this page</Text>
                        <List listStylePosition={"inside"} gap={5} css={{ml: '$md', mt: '$xs'}}>
                            {links.map(l => (
                                <ListItem key={l.id}>
                                    <Link href={`#${l.id}`}>
                                        <StyledInternalLink>
                                            {l.name}
                                        </StyledInternalLink>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </GridItem>
            </GridRow>
        </Grid>
    );
}

export default React.memo(DocsLayout);