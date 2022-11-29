import Link from "next/link";
import React, { useMemo } from "react";
import { GetComponentsNames } from "../../documentation";
import { CSS, Container, Grid, GridItem, GridRow, Navbar, NavbarCollapse, NavbarContent, NavbarItem, NavbarLink, NavbarToggle, Text } from "../../reactiumui";
import ThemeToggle from "../themeToggle";
import NavCollapseLink from "./navCollapseLink";
import Sidebar from "./sidebar";

interface Props {
    children?: React.ReactNode
}

const DocsLayout: React.FunctionComponent<Props> = ({ children }) => {
    const components = useMemo(() => GetComponentsNames(), []);

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
                        <Navbar type={'sticky'} wrapperCss={navbarCss} square disableShadow>
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
                    <Container position='fixed' preventOverScreen hideScroll>
                        <Text h4>On this page</Text>
                    </Container>
                </GridItem>
            </GridRow>
        </Grid>
    );
}

export default React.memo(DocsLayout);