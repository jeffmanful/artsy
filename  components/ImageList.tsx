import React from 'react';
import { Image } from './types';

interface Props {
  images?: Image[],
}

const ImageList: React.FC<Props> = ({ images }): JSX.Element => {
  return (
    <div>
      {images?.map(img => (
        <div>
          <img src={img?.image_url}  />
        </div>
      ))}
    </div>
  )
}

export default ImageList;
