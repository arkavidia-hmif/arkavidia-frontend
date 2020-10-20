import * as React from 'react'

type Props = {
  onClick?: () => void,
  text: string
}

const FilledButton = ({ onClick, text }: Props) => (
  <>
    <div onClick={onClick}>
      <b>{text}</b>
    </div>
    <style jsx>{`
      div {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        
        background-color: #FE789A;
        color: white;
        
        cursor: pointer;
      }
      div:hover {
        background-color: #f9a3b9;
      }
    `}</style>
  </>
)

export default FilledButton
