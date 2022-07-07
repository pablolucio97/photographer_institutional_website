export const testimonials = [
  {
    url: "/images/person1.jpg",
    name: "Márcia",
    role: "Designer",
    testimonial:
      "Sempre trabalhei com o Danilo e sempre obtive excelentes resultados. Fotografias impecáveis!",
  },
  {
    url: "/images/person2.jpg",
    name: "Marcos",
    role: "Full-stack developer",
    testimonial:
      "Além de amigo, um ótimo profissional. Sempre entregou mais do que esperávamos!",
  },
  {
    url: "/images/person3.jpg",
    name: "Alícia",
    role: "Front-end developer",
    testimonial:
      "Não trabalho com outro fotógrafo! Meu casamento e meu chá de bebê foi com ele. Profissional top de linha!",
  },
];

export const portfolioPhotos = [
  {
    events: [
      {
        url: "/images/event1.png",
        name: "event1",
      },
      {
        url: "/images/event2.png",
        name: "event2",
      },
      {
        url: "/images/event3.png",
        name: "event3",
      },
    ],
    weddings: [
      {
        url: "/images/wedding1.png",
        name: "wedding1",
      },
      {
        url: "/images/wedding2.png",
        name: "wedding2",
      },
      {
        url: "/images/wedding3.png",
        name: "wedding3",
      },
    ],
    birthdays: [
      {
        url: "/images/birthday1.png",
        name: "birthday1",
      },
      {
        url: "/images/birthday2.png",
        name: "birthday2",
      },
      {
        url: "/images/birthday3.png",
        name: "birthday3",
      },
    ],
  },
];

export const googleMapAddress =
  "https://maps.google.com/maps?q=joao%20monlevade&t=&z=13&ie=UTF8&iwloc=&output=embed";

export const eventsPhotoUrls = [
  "/images/event1.png",
  "/images/event2.png",
  "/images/event3.png",
];

export const weddingsPhotoUrls = [
  "/images/wedding1.png",
  "/images/wedding2.png",
  "/images/wedding3.png",
];

export const birthdaysPhotoUrls = [
  "/images/birthday1.png",
  "/images/birthday2.png",
  "/images/birthday3.png",
];

export const allPhotos = [...eventsPhotoUrls, ...birthdaysPhotoUrls, ...weddingsPhotoUrls]
