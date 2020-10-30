import * as React from 'react';
import { ButtonColor, Theme } from '../styles/theme';

type Props = {
  onClick?: () => void,
  text: string,
  padding?: string,
  color?: ButtonColor,
  loading?: boolean
}

const FilledButton: React.FC<Props> = ({ onClick, text, padding, loading, color = Theme.buttonColors.pinkButton }) => (
  <>
    <div id="container" onClick={onClick} style={{ padding }}>
      <div id="loader"></div>
      <b>{text}</b>
    </div>
    <style jsx>{`
      #container {
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </>
);

export default FilledButton;
