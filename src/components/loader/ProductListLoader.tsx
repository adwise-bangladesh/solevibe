'use client'

import React from 'react';
import ContentLoader from 'react-content-loader';

// Define the props for ProductListLoader
interface ProductListLoaderProps {
  width?: number;
  heading?: { width: number; height: number };
  row?: number;
  column?: number;
  padding?: number;
  borderRadius?: number;
  [key: string]: any; // for additional props
}

// Define the metadata type
interface Metadata {
  name: string;
  github: string;
  description: string;
  filename: string;
}

// Extend React.FC to include metadata
interface ProductListLoaderComponent extends React.FC<ProductListLoaderProps> {
  metadata: Metadata;
}

const ProductListLoader: ProductListLoaderComponent = ({
  width = typeof window !== "undefined" ? window?.innerWidth : 1200,
  heading = { width: 140, height: 24 },
  row = 2,
  column = 5,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const list: JSX.Element[] = [];

  let height = 0;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;

      const height2 = 20;

      const height3 = 20;

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      const y2 = y1 + padding + height1;

      const y3 = y2 + padding / 2 + height2;

      list.push(
        <React.Fragment key={`${i}-${j}`}>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </React.Fragment>
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
    >
      {heading && (
        <rect
          x={padding}
          y={padding}
          rx={0}
          ry={0}
          width={heading.width}
          height={heading.height}
        />
      )}
      {list}
    </ContentLoader>
  );
};

// Define the metadata for the component
ProductListLoader.metadata = {
  name: 'I am Doong - I come from Việt Nam',
  github: 'toiladoong',
  description: 'ProductListLoader',
  filename: 'ProductListLoader',
};

export default ProductListLoader;
