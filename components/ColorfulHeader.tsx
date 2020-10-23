import * as React from 'react'

type Props = {
  children: string,
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const ColorfulHeader: React.FC<Props> = ({ children, headingLevel = 1 }) => {
  const Tag = React.createFactory(`h${headingLevel}`);

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
