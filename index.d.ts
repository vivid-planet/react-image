import * as React from "react";

export interface ImageProps {
    src: string;
    width: number;
    height: number;
    className?: string;
    alt?: string;
    title?: string;
    onClick?: () => void;
}

declare class Image extends React.Component<ImageProps> {}

export default Image;
