import * as React from "react";

export interface IProps {
    src: string;
    width: number;
    height: number;
    className?: string;
    alt?: string;
    title?: string;
    onClick?: () => void;
}

class Image extends React.Component<IProps> {}

export default Image;
