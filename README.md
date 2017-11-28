# react-image

[![NPM Version](https://img.shields.io/npm/v/@vivid-planet/react-image.svg?style=flat)](https://www.npmjs.com/package/@vivid-planet/react-image)
[![NPM Downloads](https://img.shields.io/npm/dm/@vivid-planet/react-image.svg?style=flat)](https://www.npmjs.com/package/@vivid-planet/react-image)

`react-image` renders a image with loading animation in [React](https://github.com/facebook/react).

## Installation
```npm install --save @vivid-planet/react-image```

You can then import `react-image` and its styles in your application as follows:

```javascript
import Image from '@vivid-planet/react-image';
import '@vivid-planet/react-image/dist/react-image.css';
```

## Usage
The Image object has three required props:

- src: Specifies the URL to the image
- width: Specifies the width
- height: Specifies the height

```javascript
<Image
    src="www.example.com/foo.jpg"
    width={640}
    height={480}
/>
```

#### Additional Props

- className: Specifies one or more classnames for this image element
- alt: Specifies an alternate text
- title: Specifies extra information
- onClick: Callback function which will be executed on click event
