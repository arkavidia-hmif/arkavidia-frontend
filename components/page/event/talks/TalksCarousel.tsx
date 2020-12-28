import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import { TalksCarouselItem } from "interfaces/talks-page";
import FilledButton from "components/FilledButton";
import { Theme } from "styles/theme";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface Props {
  items: Array<TalksCarouselItem>
}

const TalksCarousel: React.FC<Props> = ({ items }) => {
  const router = useRouter();

  const generateItem = (entry: TalksCarouselItem) => {
    return (
      <div className="row m-5">
        <div className="col-8" id="content-holder">
          <p id="day">Day {entry.day}</p>
          <p className="font125 my-0">{entry.date}</p>
          <p className="font125 my-0">{entry.time}</p>
          <h3>{entry.title}</h3>
          <p className="font125 mb-5">{entry.description}</p>
          <Link href="/dashboard/arkav-talks">
            <FilledButton
              text="Daftar"
              color={Theme.buttonColors.purpleButton}
              padding="0.5rem 2rem"
              fontSize="1.25rem"
            />
          </Link>
        </div>
        <div className="col-4" id="profile-holder">
          <img src={entry.profilePicture} />
          <p className="mt-3 px-3"><b>{entry.speaker}</b></p>
          <p className="mb-3 px-3">{entry.credential}</p>
        </div>
        <style jsx>{`
          .font125 {
            font-size: 1.25rem;
          }

          #content-holder {
            text-align: left;
            color: black;
          }

          #day {
            font-family: Viga;
            font-size: 2.5rem;
          }

          h3 {
            margin-top: 2rem;
            font-size: 2rem;
          }

          #profile-holder {
            background-color: #623FA2;
            padding: 0;
            border-radius: 1rem;
          }

          #profile-holder p {
            color: white;
            font-size: 1.25rem;
            margin-bottom: 0;
          }
        `}</style>
        <style jsx global>{`
          .carousel .slide{ 
            border-radius: 1rem;
            border: solid 0.25rem #623FA2;
            background-color: rgba(255,255,255,0.6);
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
