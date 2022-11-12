import React, { PropsWithChildren, useEffect, useLayoutEffect, useRef, useState } from "react";
import { styled } from "../reactiumui";

const StyledResizable = styled('div', {
    position: 'relative',
    p: '$md',
    maxWidth: '100%',
    minWidth: 'min-content',
    border: '1px solid $grayDark200',
    borderRightWidth: '12px',
    borderRadius: '$xl',
    zIndex: '$1',
})

const StyledResizer = styled('div', {
    position: 'absolute',
    right: '-9px',
    top: 'calc(50% - 20px)',
    width: 6,
    height: 40,
    cursor: 'w-resize',
    '&::before': {
        content: '',
        position: 'absolute',
        background: '$white',
        borderRadius: '1px',
        width: 2,
        height: 40,
        top: 0,
        left: 0,
    },
    '&::after': {
        content: '',
        position: 'absolute',
        background: '$white',
        borderRadius: 1,
        width: 2,
        height: 40,
        top: 0,
        right: 0,
    }
})

const Resizable: React.FunctionComponent<PropsWithChildren> = ({children}) => {
    const resizableRef = useRef<HTMLDivElement>(null);
    const resizerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        if(resizableRef?.current === null || resizerRef?.current === null)
            return;

        let cursorX: number | undefined;
        let oldWidth: number | undefined;
        
        const resize = (e: MouseEvent) => {
            const newWidth = oldWidth! - (cursorX! - e.screenX);
            cursorX = e.screenX;
            oldWidth = newWidth;
            setWidth(newWidth);
        }

        const resizer = resizerRef.current;
        const pressResize = (e: MouseEvent) => {
            e.preventDefault();
            cursorX = e.screenX;
            oldWidth = parseFloat(getComputedStyle(resizableRef.current!).getPropertyValue('width').replace('px', ''));
            window.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', resize);
            })
        }

        resizer.addEventListener('mousedown', pressResize);
        return () => resizer?.removeEventListener('mousedown', pressResize);
    }, [resizableRef, resizerRef])

    return (
        <StyledResizable ref={resizableRef} style={{width}}>
            {children}
            <StyledResizer ref={resizerRef} />
        </StyledResizable>
    );
}

export default React.memo(Resizable);