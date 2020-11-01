import * as React from 'react';
import FilledButton from '../../../FilledButton';
<<<<<<< HEAD

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
=======
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
       
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
      `}</style>
    </div>
  );
};

<<<<<<< HEAD
export default ModalProfile;
=======
export default ModalProfile;
>>>>>>> 21f06938466dc25b65da732b6cab103fec2ad99e
