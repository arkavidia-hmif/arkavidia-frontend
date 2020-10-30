import * as React from 'react'
import FilledButton from '../../FilledButton'

const ModalProfile: React.FC = () => {
  return (
    <div className="container mb-3">
      <div className="container-fluid main">
        <FilledButton text="Edit Profile" padding="0.75rem 3rem" />
      </div>
      <style jsx>{`
        #main{
            float: none;
        }
      `}</style>
    </div>
  )
}

export default ModalProfile