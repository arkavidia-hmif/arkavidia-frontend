import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { TalksCarouselItem } from "interfaces/talks-page";
import FilledButton from "components/FilledButton";
import { ButtonColor } from "styles/theme";

interface Props {
  color: string;
  buttonColor: ButtonColor;
  items: Array<TalksCarouselItem>
}

const TalksCarousel: React.FC<Props> = ({ items, color, buttonColor }) => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    setCurrentItem(0);
  }, [color]);

  const generateItem = (entry: TalksCarouselItem) => {
    return (
      <div className="row m-3 m-md-5">
        <div className="col-md-8 order-1 order-md-0" id="content-holder">
          <p id="day">{entry.session}</p>
          <p className="font12 my-0">{entry.date}</p>
          <p className="font12 my-0">{entry.time}</p>
          <h3>{entry.title}</h3>
          <p className="font12 mb-5">{entry.description}</p>
          <Link href="/dashboard/arkav-talks">
            <FilledButton
              text="Daftar"
              color={buttonColor}
              padding="0.75rem 3rem"
              fontSize="1.3rem"
            />
          </Link>
        </div>
        <div className="col-md-4 mb-3 mb-md-0" id="profile-holder">
          <img src={entry.profilePicture} />
          <p className="mt-3 px-3"><b>{entry.speaker}</b></p>
          <p className="mb-3 px-3">{entry.credential}</p>
        </div>
        <style jsx>{`
          .font12 {
            font-size: 1.2rem;
          }

          #content-holder {
            text-align: left;
            color: black;
          }

          #day {
            font-family: Viga;
            font-size: 2rem;
          }

          h3 {
            margin-top: 2rem;
            font-size: 1.75rem;
          }

          #profile-holder {
            background-color: ${color};
            padding: 0;
            border-radius: 1rem;
            overflow: hidden;
            height: 100%;
          }

          #profile-holder p {
            color: white;
            font-size: 1.25rem;
            margin-bottom: 0;
          }
        `}</style>
        <style jsx global>{`
          .carousel .slide { 
            border-radius: 1rem;
            border: solid 0.25rem ${color};
            background-color: rgba(255,255,255,0.6);
          }

          li.dot.selected {
            background-color: ${color} !important;
          }

          li.dot {
            background-color: #C4C4C4 !important;
            width: 1rem !important;
            opacity: 1 !important;
            height: 1rem !important;
            box-shadow: none !important;
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      <div className="arrow" id="arrow-left">
        <span onClick={() => {
          setCurrentItem(currentItem - 1);
        }}></span>
      </div>
      <div className="arrow" id="arrow-right">
        <span onClick={() => {
          setCurrentItem(currentItem + 1);
        }}></span>
      </div>
      <Carousel
        selectedItem={currentItem}
        onChange={(index) => {
          setCurrentItem(index);
        }}
        showArrows={false}
        showThumbs={false}
        showStatus={false}>
        {items.map(generateItem)}
      </Carousel>
      <style jsx>{`
        .arrow {
          position: absolute;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .arrow span {
          height: 2rem;
          width: 2rem;
          transform: rotateY(0deg) rotate(45deg);
          
          cursor: pointer;
        }

        #arrow-left {
          left: -2rem;
        }

        #arrow-right {
          right: -2rem;
        }

        #arrow-left span {
          border-left: 0.5rem solid ${color};
          border-bottom: 0.5rem solid ${color};
        }

        #arrow-right span {
          border-right: 0.5rem solid ${color};
          border-top: 0.5rem solid ${color};
        }

        @media (max-width: 768px){
          .arrow span{
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default TalksCarousel;
