import Link from "next/link";
import React, { useMemo } from "react";
import { GetComponentsNames } from "../../documentation";
import { Container, Grid, GridItem, List, Navbar, NavbarCollapse, NavbarContent, NavbarItem, NavbarLink, NavbarToggle, Text, useReactiumTheme } from "../../reactiumui";
import NavCollapseLink from "./navCollapseLink";
import NavListLink from "./navListLink";

interface Props {
    children?: React.ReactNode
}

const DocsLayout: React.FunctionComponent<Props> = ({ children }) => {
    const { name, setTheme } = useReactiumTheme();
    const components = useMemo(() => GetComponentsNames(), []);

    return (
        <>
            <Navbar type={'sticky'}>
                <NavbarContent>
                    <NavbarItem showOnmedia={"sm"}>
                        <NavbarToggle />
                    </NavbarItem>
                    <NavbarItem>
                        <Text h2 gradient={['$primary', '$blue800']}>ReactiumUI</Text>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent hideOnmedia={"sm"}>
                    <Link href='/docs'><NavbarLink active>Docs</NavbarLink></Link>
                    <NavbarLink href='https://github.com/AnemonOFF/reactiumui' target='_blank'>Github</NavbarLink>
                </NavbarContent>
                <NavbarContent>
                    <NavbarItem>
                        <button onClick={() => { setTheme(name === 'light' ? 'dark' : 'light') }}>{name}</button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarCollapse hideScroll>
                    <NavCollapseLink href='/docs'>Getting started</NavCollapseLink>
                    <NavCollapseLink href='/docs/theming'>Theming</NavCollapseLink>
                    {components.map((name, i) => <NavCollapseLink key={i} href={`/docs/${name.toLowerCase()}`}>{name}</NavCollapseLink>)}
                </NavbarCollapse>
            </Navbar>
            <Container all lg={'$breakpoints$lg'} fixed center css={{mt: '$xl'}}>
                <Grid columns={6} gap={15}>
                    <GridItem all={250} fixed hideOnmedia={'sm'}>
                        <Container position='fixed' preventOverScreen hideScroll>
                            <Text h2>Documentation</Text>
                            <List listStyleType="disc" gap='$xs' css={{mt: '$xs'}}>
                                <NavListLink href='/docs'>Getting started</NavListLink>
                                <NavListLink href='/docs/theming'>Theming</NavListLink>
                                {components.map((name, i) => <NavListLink key={i} href={`/docs/${name.toLowerCase()}`}>{name}</NavListLink>)}
                            </List>
                        </Container>
                    </GridItem>
                    <GridItem display="flex" direction="column">
                        {children}
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default React.memo(DocsLayout);