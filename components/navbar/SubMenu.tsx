import * as React from 'react';
import Link from 'next/link';

type ArrayType = {
    path: string,
    text: string
}

type Props = {
    items: ArrayType[],
    hover: boolean,
    setHover: (input: boolean) => void,
}

const SubMenu : React.FC<Props> = ({items, hover, setHover}) => {
  return (
    <div className="sub-menu" onMouseLeave={() => setHover(false)}>
      <ul className="mr-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}><a>{item.text}</a></Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .sub-menu {
            visibility: ${hover ? 'visible' : 'hidden'};
            opacity: ${hover ? 1 : 0};
            background: #FFFF;
            width: 300px;
            position: absolute;
            top: 3.4rem;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            transition: visibility 0.2s, opacity 0.2s linear;
        }
        
        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
        }

        li {
            padding: 1rem 0;
        }

        a {
            color: #623FA2;
            font-family: Viga;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5rem;
            text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default SubMenu;