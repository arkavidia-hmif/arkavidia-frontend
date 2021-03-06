import { Dimen } from "../../styles/dimen";

interface Props {
  open: boolean;
  setOpen: (input: boolean) => void;
}

const Burger: React.FC<Props> = ({ open, setOpen }) => (
  <div>
    <button className="burger mr-3" onClick={() => setOpen(!open)}>
      <div className="lines" />
      <div className="lines" />
      <div className="lines" />
    </button>

    <style jsx>{`
      .burger {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
      }

      .burger:focus {
        outline: none;
      }

      .lines {
        width: 1.5rem;
        height: 0.25rem;
        background: #fe789a;
        border-radius: 10px;
        transition: all 0.3s linear;
        transform-origin: 1px;
      }

      @media (max-width: ${Dimen.navbarBreakpoint}) {
        .burger {
          display: flex;
        }
      }
    `}</style>
    <style jsx>{`
      .lines:first-child {
        transform: ${open ? "rotate(45deg)" : "rotate(0)"};
      }

      .lines:nth-child(2) {
        opacity: ${open ? "0" : "1"};
        transform: ${open ? "translateX(20px)" : "translateX(0)"};
      }

      .lines:nth-child(3) {
        transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
      }
    `}</style>
  </div>
);

export default Burger;
