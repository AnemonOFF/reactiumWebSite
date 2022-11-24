import React, { useEffect, useRef, useState } from "react";
import { styled } from "../reactiumui";

export type CodeProps = {
    code: string,
    language: 'jsx' | 'tsx' | 'js' | 'markup',
    fit?: boolean,
}

const StyledWrapper = styled('div', {
    position: 'relative',
    my: '$xs',
    background: '$grayDark200',
    borderRadius: '$xl',
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
    const [isOverflowed, setIsOverflowed] = useState<boolean>();
    const [isFull, setIsFull] = useState<boolean>(false);
    const preRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        if(!preRef.current)
            return;
        const el = preRef.current;
        var curOverflow = el.style.overflow;
        if ( !curOverflow || curOverflow === "visible" )
           el.style.overflow = "hidden";
        
        var isOverflowing = el.clientHeight < el.scrollHeight;
        
        el.style.overflow = curOverflow;
        setIsOverflowed(isOverflowing);
    }, [setIsOverflowed, code, fit])

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
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    	 viewBox="0 0 210.107 210.107" enableBackground="new 0 0 210.107 210.107" xmlSpace="preserve">
                        <g>
                        	<path fill="white" d="M168.506,0H80.235C67.413,0,56.981,10.432,56.981,23.254v2.854h-15.38
                        		c-12.822,0-23.254,10.432-23.254,23.254v137.492c0,12.822,10.432,23.254,23.254,23.254h88.271
                        		c12.822,0,23.253-10.432,23.253-23.254V184h15.38c12.822,0,23.254-10.432,23.254-23.254V23.254C191.76,10.432,181.328,0,168.506,0z
                        		 M138.126,186.854c0,4.551-3.703,8.254-8.253,8.254H41.601c-4.551,0-8.254-3.703-8.254-8.254V49.361
                        		c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.253,3.703,8.253,8.254V186.854z M176.76,160.746
                        		c0,4.551-3.703,8.254-8.254,8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854
                        		c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.254,3.703,8.254,8.254V160.746z"/>
                        </g>
                    </svg>
                </StyledCopy>
        </StyledWrapper>
    );
};

export default React.memo(Code);