import { TalksCarouselItem } from "interfaces/talks-page";

export const TalksItems = [
  {
    hero: "https://picsum.photos/id/1/400/300",
    items: [
      {
        day: 1,
        date: "Sabtu, 27 Februari 2021",
        time: "13.00 - 15.00 WIB",
        title: "Ethical Hacking 101",
        description: "Achmad is a engineer who is passionate about  cyber security. He is a security engineer in Bukalapak for more than a year and a half now. During the college years, he was a champion in more than 5 CTF competitions, a finalist in ACM ICPC, and winner of various other cyber security related competition.",
        speaker: "Achmad Fahrurrozi Maskur",
        credential: "Security Engineer at Bukalapak",
        profilePicture: "/img/talks/advanced-1-speaker.png",
      },
      {
        day: 2,
        date: "Minggu, 28 Februari 2021",
        time: "13.00 - 15.00 WIB",
        title: "How to Use Behavior Patterns in Interface Designing",
        description: "As the Co-Founder of Natuno Design Lab, one of the rising User Experience Firm based in Jakarta, Dimas Wibowo brands himself as a designer who works in the intersection of technology, design and arts. Before contributing in the grow of Natuno, he had a lot of experience helping startups, brands and companies to achieve better products as a designer, including the big indonesia's travel startup, Traveloka.",
        speaker: "Dimas Wibowo",
        credential: "Co-Founder of Natuno Design Lab, Ex-Senior Visual Designer at Traveloka",
        profilePicture: "/img/talks/advanced-2-speaker.png",
      }
    ] as Array<TalksCarouselItem>
  },
  {
    hero: "https://picsum.photos/id/2/400/300",
    items: [

    ] as Array<TalksCarouselItem>
  }
];

