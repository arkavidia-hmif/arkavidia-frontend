import * as React from 'react';
import FilledButton from '../../../FilledButton';
import Popup from './Popup';

const ModalProfile: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="container mb-3">
      <div className="container-fluid main">
        <FilledButton text="Edit Profile" padding="0.75rem 3rem" onClick={togglePopup}/>
        {isOpen && <Popup
          content={<div>
            <form>
              blabla
            </form>
          </div>}
          handleClose={togglePopup}
        />}
      </div>
      <style jsx>{`
       
      `}</style>
    </div>
  );
};

export default ModalProfile;
