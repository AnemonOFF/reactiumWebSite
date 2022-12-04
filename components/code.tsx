import React, { useEffect, useRef, useState } from "react";
import { styled } from "../reactiumui";
import CopyIcon from "./copyIcon";

export type CodeProps = {
    code: string,
    language: 'jsx' | 'tsx' | 'js' | 'markup',
    fit?: boolean,
}

const StyledWrapper = styled('div', {
    position: 'relative',
    my: '$xs',
    background: '$grayDark200',
    borderRadius: '$md',
    variants: {
        fit: {
            true: {
                maxWidth: 'fit-content'
            }
        }
    }
})

const StyledPre = styled('pre', {
    background: 'unset !important',
    maxHeight: 485,
    borderRadius: 'unset !important',
    m: '0 !important',
    py: '$sm !important',
    px: 'calc($sm + 35px) !important',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    '&, & *': {
        fontSize: '$sm !important',
        fontFamily: 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace !important',
    },
    variants: {
        full: {
            true: {
                maxHeight: 'none'
            }
        }
    }
})

const StyledCopy = styled('button', {
    position: 'absolute',
    right: 13,
    top: 13,
    background: 'transparent',
    border: 'none',
    p: 0,
    m: 0,
    size: 20,
    cursor: 'pointer',
    '& path': {
        fill: "$white",
    },
    '&:hover path': {
        opacity: 0.8
    },
    '&:active path': {
        fill: '$success'
    }
})

const StyledFooter = styled('div', {
    width: '100%',
    borderTop: '1px solid $gray700',
    p: 10
})

const StyledMoreButton = styled('button', {
    background: 'transparent',
    border: 'none',
    color: '$accent',
    p: 0,
    m: 0,
    fontSize: '$sm',
    cursor: 'pointer'
})

const Code: React.FunctionComponent<CodeProps> = ({ code, language, fit = false }) => {
    const [isOverflowed, setIsOverflowed] = useState<boolean>(() => code.split("\n").length > 22);
    const [isFull, setIsFull] = useState<boolean>(false);
    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        setIsOverflowed(code.split("\n").length > 22);
    }, [code])

    // useEffect(() => {
    //     if(!preRef.current)
    //         return;
    //     const el = preRef.current;
    //     var curOverflow = el.style.overflow;
    //     if ( !curOverflow || curOverflow === "visible" )
    //        el.style.overflow = "hidden";
        
    //     var isOverflowing = el.clientHeight < el.scrollHeight;
        
    //     el.style.overflow = curOverflow;
    //     setIsOverflowed(isOverflowing);
    // }, [setIsOverflowed, code, fit])

    const copy = () => {
        navigator.clipboard.writeText(code);
    }

    const changePreSize = () => {
        setIsFull(old => !old);
    }

    return (
        <StyledWrapper fit={fit}>
            <StyledPre ref={preRef} className={`line-numbers language-${language}`} full={isOverflowed && isFull} tabIndex={0}>
                <code className={`language-${language}`}>
                    {code}
                </code>
            </StyledPre>
            {isOverflowed && 
                <StyledFooter>
                    <StyledMoreButton onClick={changePreSize}>{isFull ? 'Hide' : 'Show'} full code</StyledMoreButton>
                </StyledFooter>
            }
            <StyledCopy onClick={copy}>
                <CopyIcon />
            </StyledCopy>
        </StyledWrapper>
    );
};

export default React.memo(Code);