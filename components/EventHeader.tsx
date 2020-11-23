import * as React from "react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  image: string;
  imageAlt: string;
  title: string;
  paragraph: string;
  bg?: string;
}

const EventHeader: React.FC<Props> = ({
  children,
  image,
  imageAlt,
  title,
  paragraph,
  bg,
}) =>
  (
    <div id="main-container">
      <div id="logo-container">
        <img src={image} alt={imageAlt} />
      </div>
      <div id="content-container">
        <h1>{title.toUpperCase()}</h1>
        <p>{paragraph}</p>
        {children}
      </div>
      <style jsx>{`
      #main-container {
        display: flex;
        margin-bottom: 10%;
      }

      #content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
      }

      #logo-container {
        max-height: 60vh;
        width: 50%;
        margin-right: 5%;
      }

      #logo-container img {
        max-height: 60vh;
        object-fit: contain;
        width: 100%;
      }

      h1 {
        font-family: "Viga";
        font-size: 4rem;
        font-weight: normal;
        margin: 0;
        margin-bottom: 5%;
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

      @media (max-width: 992px) {
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
          font-size: 1.2rem;
          line-height: 1.2;
        }
      }
    `}</style>
    </div>
  );

export default EventHeader;
