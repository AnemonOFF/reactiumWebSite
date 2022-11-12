import Link from "next/link";
import React from "react";
import useActiveLink from "../../hooks/useActiveLink";
import { ListItem, styled, VariantProps } from "../../reactiumui";

const StyledLink = styled('a', {
    cursor: 'pointer',
    variants: {
        active: {
            true: {
                color: '$foreground',
                fontWeight: 'bolder',
            }
        }
    },
    defaultVariants: {
        active: false
    }
})

interface Props {
    children?: React.ReactNode,
    href: string,
}

export type NavListLinkProps = Props & Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props> & Omit<VariantProps<typeof StyledLink>, keyof Props>;

const NavListLink: React.FunctionComponent<NavListLinkProps> = ({ children, href, ...props }) => {
    const active = useActiveLink(href);

    return (
        <ListItem markerCss={{color: active ? '$foreground' : '$accent'}}>
            <Link href={href}>
                <StyledLink active={active} {...props}>
                    {children}
                </StyledLink>
            </Link>
        </ListItem>
    );
}

export default React.memo(NavListLink);