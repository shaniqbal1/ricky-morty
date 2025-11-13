import { Image as AntImage } from 'antd';

function Image({ src, alt, width, height, style }) {
    return (
        <AntImage
            src={src}
            alt={alt}
            width={width || 200}
            height={height || 200}
            style={{ objectFit: 'cover', ...style }}
        />
    );
}

export default Image;
