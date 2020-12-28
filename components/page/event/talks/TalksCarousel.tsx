import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { TalksCarouselItem } from "interfaces/talks-page";
import FilledButton from "components/FilledButton";
import { ButtonColor, Theme } from "styles/theme";

interface Props {
  color: string;
  buttonColor: ButtonColor;
  items: Array<TalksCarouselItem>
}

const TalksCarousel: React.FC<Props> = ({ items, color, buttonColor }) => {

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

          .carousel-status {
            display: none;
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
    <Carousel>
      {items.map(generateItem)}
    </Carousel>
  );
};

export default TalksCarousel;
