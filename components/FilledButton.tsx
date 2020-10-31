import * as React from 'react';
import { ButtonColor, Theme } from '../styles/theme';

type Props = {
  onClick?: () => void;
  text: string;
  padding?: string;
  color?: ButtonColor;
};

const FilledButton: React.FC<Props> = ({
  onClick,
  text,
  padding,
  color = Theme.buttonColors.pinkButton,
}) => (
  <>
    <div onClick={onClick} style={{ padding }}>
      <b>{text}</b>
    </div>
    <style jsx>{`
      div {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 10px;

        background-color: ${color.main};
        color: white;

        cursor: pointer;

        transition: background-color 0.1s;
      }
      div:hover {
        background-color: ${color.hover};
      }
    `}</style>
  </>
);

export default FilledButton;
