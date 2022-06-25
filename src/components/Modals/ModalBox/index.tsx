import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ModalBoxProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: ReactNode;
    modalClassName?: string;
    overlayClassName?: string;
    portalClassName?: string;
    showAnimation?: boolean
}

export function ModalBox({
    isOpen,
    onRequestClose,
    children,
    modalClassName,
    overlayClassName,
    portalClassName,
    showAnimation = true
}: ModalBoxProps) {

    return (
        <Container
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={modalClassName}
            overlayClassName={overlayClassName}
            portalClassName={portalClassName}
            showAnimation={showAnimation}
            style={{
                overlay: {
                    border: 'none',
                    outline: 'none',
                },
                content: {
                    border: 'none',
                    outline: 'none',
                }
            }}
        >
            {children}
        </Container>
    )
}