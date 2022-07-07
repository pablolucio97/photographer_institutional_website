import React, { CSSProperties } from 'react';
import { NextImage as NextImageComponent, Container } from './styles';
import { name } from '../../../../package.json'

interface NextImageProps {
    imgUrl: string;
    width: number;
    height: number;
    style?: CSSProperties;
    className?: string;
    onClick?: () => void;
}

export function NextImage({
    imgUrl,
    width,
    onClick,
    height,
    style,
    className
}: NextImageProps) {
    return (
        <Container>
            <NextImageComponent
                src={imgUrl}
                alt={name}
                width={width}
                height={height}
                style={style}
                className={className}
                onClick={onClick}
            />
        </Container>
    )
}