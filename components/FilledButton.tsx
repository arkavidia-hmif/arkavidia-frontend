import * as React from 'react'
import { StandardColor, Theme } from '../styles/theme'

type Props = {
  onClick?: () => void,
  text: string,
  color?: StandardColor
}

const FilledButton = ({ onClick, text, color = Theme.colors.red }: Props) => (
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
        background-color: ${color.light};
      }
    `}</style>
  </>
)

export default FilledButton
