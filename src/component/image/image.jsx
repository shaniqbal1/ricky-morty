import { Image as AntImage } from 'antd';

function Image({ src, alt }) {
    return (
        <AntImage
            src={src}
            alt={alt}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
        />
    );
}

export default Image;
