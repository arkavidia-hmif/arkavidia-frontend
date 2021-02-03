import * as React from "react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  image: string;
  imageAlt: string;
  title: string;
  sponsor: string;
  paragraph: string;
  bg?: string;
}

const CompetitionHeader: React.FC<Props> = ({
  children,
  image,
  imageAlt,
  title,
  sponsor,
  paragraph,
  bg,
}) => {
  return (
    <div id="main-container" className="mt-3">
      <div id="logo-container">
        <img src={image} alt={imageAlt} />
      </div>
      <div id="content-container">
        <h1>{title.toUpperCase()}</h1>
        <p><b>Supported by {sponsor}</b></p>
        <p>{paragraph}</p>
        {children}
      </div>
      <style jsx>{`
      #main-container {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 10%;
      }

      #content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
      }

      #logo-container {
        width: 50%;
        margin-right: 5%;
      }

      #logo-container img {
        width: 100%;
      }

      h1 {
        font-family: "Viga";
        font-size: 3.6rem;
        font-weight: normal;
        margin: 0;
        margin-block-end: 0.4em;
        line-height: 100%;
        background: ${bg};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.3;
      }

      @media (max-width: 1000px) {
        #main-container {
          display: block;
          text-align: center;
        }

        #logo-container {
          width: 100%;
        }

        #content-container {
          margin-top: 5%;
          width: 100%;
        }

        h1 {
          font-size: 2.5rem;
        }
        p {
          line-height: 1.2;
        }
      }
    `}</style>
    </div>
  );
};

export default CompetitionHeader;
