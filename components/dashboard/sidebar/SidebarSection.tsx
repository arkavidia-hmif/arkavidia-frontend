import { Fragment } from "react";
import SidebarItem from "./SidebarItem";
import { SidebarGroup } from "interfaces/sidebar";

interface Props {
  selection: number;
  setSelection: (value: number) => void;
  data: SidebarGroup[];
}

const SidebarSection: React.FC<Props> = ({ data, selection, setSelection }) => {
  let i = -1;
  return (
    <>
      {data.map((entry) => {
        return (
          <Fragment key={entry.name}>
            <div className="not-dropdown">
              <div className="title">{entry.name}</div>
            </div>
            <div className="dropdown">
              <ul className="list">
                {entry.item.map((item) => {
                  i += 1;
                  return (
                    <SidebarItem
                      key={i}
                      entry={item}
                      index={i}
                      selection={selection}
                      setSelection={setSelection}
                    />
                  );
                })}
              </ul>
            </div>
            <style jsx>{`
              ul {
                list-style: none;
              }
              .dropdown {
                padding: 0;
              }
              .list {
                padding: 0;
              }
              .title {
                color: rgba(0, 0, 0, 0.6);
                font-size: 1.2rem;
                line-height: 1.4rem;
              }
            `}</style>
          </Fragment>
        );
      })}
    </>
  );
};

export default SidebarSection;
