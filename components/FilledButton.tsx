import * as React from 'react'
import { ButtonColor, Theme } from '../styles/theme'

type Props = {
  onClick?: () => void,
  text: string,
  color?: ButtonColor
}

const FilledButton = ({ onClick, text, color = Theme.buttonColors.pinkButton }: Props) => (
  <>
    <div onClick={onClick}>
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
      }
      div:hover {
        background-color: ${color.hover};
      }
    `}</style>
  </>
)

export default FilledButton
