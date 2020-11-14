import { SidebarEntry } from "../../../../../interfaces/sidebar";

interface Props {
  entry: SidebarEntry;
  index: number;
  selection: number;
  setSelection: (value: number) => void;
}

const SidebarItem: React.FC<Props> = ({
  entry,
  index,
  selection,
  setSelection,
}) => {
  return (
    <a>
      <li
        onClick={() => setSelection(index)}
        className={selection === index ? "active" : ""}
      >
        {selection === index && <span id="right-roller"></span>}
        <img src={entry.image} className="mr-3" />
        {entry.text}
      </li>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        img {
          max-width: 1rem;
        }

        li {
          color: #161f24;
          min-height: 2.4rem;
          line-height: 2.4rem;
          cursor: pointer;
          padding: 0.5rem;
          position: relative;
          font-size: 0.875rem;
        }

        li.active {
          background: rgba(251, 188, 200, 0.3);
          margin: 0 -10px 0 -15px;
          padding: 0.5rem calc(0.5rem + 15px);
        }

        #right-roller {
          position: absolute;
          background: #fe94ab;
          opacity: 0.5;
          border-radius: 10.3125px;
          width: 10px;
          height: 3.4rem;
          top: 0;
          right: -5px;
        }
      `}</style>
    </a>
  );
};

export default SidebarItem;
