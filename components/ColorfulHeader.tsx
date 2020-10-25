import * as React from 'react'

type Props = {
  children: React.ReactNode,
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const ColorfulHeader: React.FC<Props> = ({ children, headingLevel = 1 }) => {
  const Tag = `h${headingLevel}` as HeadingTag;

  return (
    <>
      <Tag><span>{children}</span></Tag>
      <style jsx>{`
        span{
          background-size: 100%;
          background-image: linear-gradient(120deg, #835FBF, #835FBF, #30C5E8);
          
          background-clip: text;
          -webkit-background-clip: text;

          text-fill-color: transparent;
          -webkit-text-fill-color: transparent; 
          -moz-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}

export default ColorfulHeader
