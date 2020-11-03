import * as React from "react";
import { ButtonColor, Theme } from "../styles/theme";

type Props = {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  text: string;
  submit?: boolean;
  padding?: string;
  color?: ButtonColor;
  loading?: boolean;
};

const FilledButton: React.FC<Props> = ({
  onClick,
  text,
  padding,
  loading,
  submit,
  color = Theme.buttonColors.pinkButton,
}) => (
  <>
    <button
      id="container"
      onClick={onClick}
      style={{ padding }}
      type={submit ? "submit" : "button"}
    >
      <div id="loader"></div>
      <b>{text}</b>
    </button>
    <style jsx>{`
      button {
        border: 0;
        outline: 0;
      }
      #container {
        border: 0;
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: ${color.main};
        color: white;
        cursor: pointer;
        transition: background-color 0.1s;
        position: relative;
      }

      #container:hover {
        background-color: ${color.hover};
      }

      #loader {
        display: none;

        border: 4px solid white;
        border-top: 4px solid transparent;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        animation: spin 2s linear infinite;

        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
    <style jsx>{`
      #loader {
        ${loading ? "display: block" : ""}
      }
      #container {
        ${loading ? "color: " + color.main : ""}
      }
      #container:hover {
        ${loading ? "color: " + color.hover : ""}
      }
    `}</style>
  </>
);

export default FilledButton;
