import { useRouter } from "next/router";
import React from "react"
import { styled } from "../reactiumui";
import CopyIcon from "./copyIcon";

interface Props {
    children: React.ReactNode,
    id: string,
}

const StyledLinker = styled('div', {
    position: 'relative',
});

const StyledFakeElement = styled('div', {
    position: 'absolute',
    top: -73,
    left: 0,
    opacity: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
});

const StyledCopy = styled('button', {
    position: 'absolute',
    background: 'transparent',
    border: 'none',
    p: 0,
    m: 0,
    right: -25,
    top: '50%',
    transform: 'translateY(-50%)',
    size: 20,
    cursor: 'pointer',
    opacity: 0,
    '&:hover': {
        opacity: 0.8
    },
    '&:active path': {
        fill: '$success'
    }
})

const StyledElement = styled('div', {
    m: 0,
    p: 0,
    width: 'max-content',
    border: 'none',
    background: 'transparent',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        opacity: 0.8,
    },
    [`&:hover ${StyledCopy}`]: {
        opacity: 0.8,
    },
    '&:active path': {
        fill: '$success',
    },
});

const Linker: React.FunctionComponent<Props> = ({ children, id }) => {
    const copy = () => {
        navigator.clipboard.writeText(`${window.location.host}${window.location.pathname}#${id}`);
    }

    return (
        <StyledLinker>
            <StyledFakeElement id={id} />
            <StyledElement onClick={copy}>
                {children}
                <StyledCopy>
                    <CopyIcon />
                </StyledCopy>
            </StyledElement>
        </StyledLinker>
    );
}

export default React.memo(Linker);