import React, { useEffect, useRef, useState } from "react";
import { styled, useReactiumTheme } from "reactiumui";

const StyledFrame = styled('iframe', {
    p: 0,
    m: 0,
    width: '100%',
    height: 'calc(100% - 50px)',
    border: 'none',
    outline: 'none',
    borderBottomLeftRadius: '$xl',
    borderBottomRightRadius: '$xl',
})

const StyledSafari = styled('div', {
    border: '1px solid $backgroundAccent',
    borderRadius: '$xl',
    background: '$background',
    shadow: '$md',
    width: '100%',
    minWidth: '92px',
    height: '420px',
    overflow: 'hidden',
})

const StyledSafariBar = styled('div', {
    position: 'relative',
    height: '50px',
    borderBottom: '1px solid $backgroundAccent',
})

const StyledSafariUrl = styled('div', {
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    minWidth: '200px',
    height: '50%',
    border: '1px solid $backgroundAccent',
    borderRadius: '$xl',
    alignItems: 'center',
})

const StyledSafariDomains = styled('div', {
    textAlign: 'center',
    color: '$accent',
    fontSize: '$sm',
    width: '100%',
})

const StyledSafariActionButtonWrapper = styled('div', {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    pl: 20,
    gap: 8,
})

const StyledSafariActionButton = styled('div', {
    size: 12,
    borderRadius: '$rounded',
    variants: {
        color: {
            red: {
                background: '$error',
            },
            orange: {
                background: '$warning',
            },
            green: {
                background: '$success',
            }
        }
    }
})

const IFrame: React.FunctionComponent<React.IframeHTMLAttributes<HTMLIFrameElement>> = ({ ...props }) => {
    const { name: themeName } = useReactiumTheme();
    const [domain, setDomain] = useState<string>();
    const frame = useRef<HTMLIFrameElement>(null);
    
    useEffect(() => {
        if(!frame || !frame.current || !frame.current.contentWindow)
            return;
        
        frame.current.contentWindow.postMessage(themeName);
    }, [themeName, frame])

    useEffect(() => {
        setDomain(window?.location.hostname);
    }, [])

    return (
        <StyledSafari>
            <StyledSafariBar>
                <StyledSafariActionButtonWrapper>
                    <StyledSafariActionButton color={'red'} />
                    <StyledSafariActionButton color={'orange'} />
                    <StyledSafariActionButton color={'green'} />
                </StyledSafariActionButtonWrapper>
                <StyledSafariUrl>
                    <StyledSafariDomains>{domain}</StyledSafariDomains>
                </StyledSafariUrl>
            </StyledSafariBar>
            <StyledFrame ref={frame} {...props} />
        </StyledSafari>
    )
}

export default React.memo(IFrame);