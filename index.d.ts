import * as React from "react";

export interface ImageProps {
    src: string;
    srcSet?: string;
    width: number;
    height: number;
    className?: string;
    alt?: string;
    title?: string;
    onClick?: () => void;
    onLoaded?: () => void;
}

declare class Image extends React.Component<ImageProps> {}

export default Image;
