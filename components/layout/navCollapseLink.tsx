import Link from "next/link";
import React from "react";
import useActiveLink from "../../hooks/useActiveLink";
import { NavbarCollapseLink } from "reactiumui";

interface Props {
    children?: React.ReactNode,
    href: string
}

const NavCollapseLink: React.FunctionComponent<Props> = ({ children, href }) => {
    const active = useActiveLink(href);

    return (
        <Link href={href}>
            <NavbarCollapseLink active={active}>
                {children}
            </NavbarCollapseLink>
        </Link>
    );
}

export default React.memo(NavCollapseLink);