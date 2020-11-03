import { ReactNode } from 'react';

type Props = {
  handleClose: () => void;
  content?: ReactNode;
};

const Popup: React.FC<Props> = ({content, handleClose}) => {
  return (
    <div className="popup">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        {content}
      </div>
      <style jsx>{`
        /* Popup style */
        .popup {
          position: fixed;
          background: #00000050;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
        }
        
        .box {
          text-align: center;
          position: relative;
          width: 70%;
          margin: 0 auto;
          height: auto;
          margin-top: calc(100vh - 85vh - 20px);
          background: #FFFF;
          border-radius: 4px;
          padding: 20px;
          border: 1px solid #999;
          overflow: auto;
        }
        
        .close-icon {
          content: 'x';
          cursor: pointer;
          position: fixed;
          right: calc(15% - 30px);
          top: calc(100vh - 85vh - 33px);
          background: #ededed;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          line-height: 20px;
          text-align: center;
          border: 1px solid #999;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default Popup;