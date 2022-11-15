import React, { PropsWithChildren, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { styled } from "../reactiumui";

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
    },
})

const StyledResizable = styled('div', {
    position: 'relative',
    maxWidth: '100%',
    minWidth: 'min-content',
    border: '1px solid $grayDark200',
    borderRightWidth: '12px',
    borderRadius: '$xl',
    zIndex: '$1',
    variants: {
        invisible: {
            true: {
                border: 'none',
                [`& ${StyledResizer}`]: {
                    '&::after, &::before': {
                        background: '$foreground',
                    }
                }
            }
        }
    }
})

const Resizable: React.FunctionComponent<{children: ReactNode, invisible?: boolean}> = ({ children, invisible = false }) => {
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
        const resizable = resizableRef.current;
        const pressResize = (e: MouseEvent) => {
            e.preventDefault();
            resizableRef.current?.querySelectorAll('iframe').forEach(x => x.style.pointerEvents = 'none');
            cursorX = e.screenX;
            oldWidth = parseFloat(getComputedStyle(resizableRef.current!).getPropertyValue('width').replace('px', ''));
            window.addEventListener('mousemove', resize);
            window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', resize);
                resizable.querySelectorAll('iframe').forEach(x => x.style.pointerEvents = '');
            })
        }

        resizer.addEventListener('mousedown', pressResize);
        return () => {
            resizer.removeEventListener('mousedown', pressResize);
        }
    }, [resizableRef, resizerRef])

    return (
        <StyledResizable ref={resizableRef} invisible={invisible} style={{width}}>
            {children}
            <StyledResizer ref={resizerRef} />
        </StyledResizable>
    );
}

export default React.memo(Resizable);