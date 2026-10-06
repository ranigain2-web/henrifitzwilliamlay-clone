export interface Project {
  slug: string;
  name: string;
  cardImage: string;
  cardAlt: string;
  comingSoon?: boolean;
  heroImage: string;
  description: string;
  gallery: { src: string; alt: string; aspect: "portrait" | "landscape" | "square" }[];
}

export const IMG = "/sites/hfl/images";

export const projects: Project[] = [
  {
    slug: "wowhouse",
    name: "WOW!House",
    cardImage: `${IMG}/henri-wow-house11550-1.jpg`,
    cardAlt: "WOW!House",
    heroImage: `${IMG}/henri-wow-house11550-1.jpg`,
    description:
      "For WOW!House 2025 at Chelsea Harbour's Design Centre, Henri transformed the entrance hall into an immersive celebration of pattern and colour — a theatrical welcome that sets the tone for the entire show house.",
    gallery: [
      { src: `${IMG}/henri-wow-house11550-1.jpg`, alt: "WOW!House entrance hall", aspect: "portrait" },
    ],
  },
  {
    slug: "sussex-home",
    name: "Sussex Home",
    cardImage: `${IMG}/sussex13.jpg`,
    cardAlt: "Sussex Home",
    heroImage: `${IMG}/sussex13.jpg`,
    description:
      "Although this house was built in 1942, it was built more with the sensibilities of a Georgian period house, large open rooms, classical mouldings and period features. The design intent was to make this property fit for a family, not pretentious or overly serious.",
    gallery: [
      { src: `${IMG}/interiors-kitchen.webp`, alt: "Green kitchen with arched windows", aspect: "landscape" },
      { src: `${IMG}/still4-door.webp`, alt: "Living room detail with lamp", aspect: "portrait" },
      { src: `${IMG}/ladgrove02.jpg`, alt: "Drawing room with antique cabinet", aspect: "portrait" },
      { src: `${IMG}/get-in-touch-1.jpg`, alt: "Sitting room with sofa", aspect: "portrait" },
      { src: `${IMG}/get-in-touch-2.jpg`, alt: "Curtained window detail", aspect: "portrait" },
      { src: `${IMG}/still1.jpg`, alt: "Hands reviewing fabric samples", aspect: "portrait" },
    ],
  },
  {
    slug: "the-old-rectory",
    name: "The Old Rectory",
    cardImage: `${IMG}/tor06.jpg`,
    cardAlt: "The Old Rectory",
    heroImage: `${IMG}/tor06.jpg`,
    description:
      "A Georgian rectory reimagined for modern family life, layering antique finds, contemporary art and bespoke upholstery against a backdrop of restored architectural detail.",
    gallery: [
      { src: `${IMG}/tor06.jpg`, alt: "Hall console with ceramic vessels", aspect: "portrait" },
    ],
  },
  {
    slug: "gassin",
    name: "Gassin",
    cardImage: `${IMG}/gassin01.jpg`,
    cardAlt: "Gassin",
    heroImage: `${IMG}/gassin01.jpg`,
    description:
      "Perched in the hills of Provence, this holiday retreat pairs artisanal French craft with a relaxed palette, creating interiors that breathe with the landscape outside.",
    gallery: [
      { src: `${IMG}/gassin01.jpg`, alt: "Staircase in Provence home", aspect: "portrait" },
    ],
  },
  {
    slug: "bradby-house",
    name: "Bradby House",
    cardImage: `${IMG}/bradby02.jpg`,
    cardAlt: "Bradby House",
    heroImage: `${IMG}/bradby02.jpg`,
    description:
      "A Victorian townhouse transformed into a quietly glamorous family home, where bold colour, vintage patina and layered textiles give every room its own character.",
    gallery: [
      { src: `${IMG}/bradby02.jpg`, alt: "Drawing room with vintage still life", aspect: "portrait" },
      { src: `${IMG}/bradby-insert-pdf.jpg`, alt: "Bradby House feature", aspect: "portrait" },
    ],
  },
  {
    slug: "ferney-hall",
    name: "Ferney Hall",
    cardImage: `${IMG}/ferney08.jpg`,
    cardAlt: "Ferney Hall",
    heroImage: `${IMG}/ferney08.jpg`,
    description:
      "The studio's registered office and an ongoing labour of love — a Shropshire country house whose rooms unfold as a collection of stories gathered over decades.",
    gallery: [
      { src: `${IMG}/ferney08.jpg`, alt: "Panelled sitting room", aspect: "portrait" },
      { src: `${IMG}/ferney-hall-layout-pdf.jpg`, alt: "Ferney Hall feature", aspect: "portrait" },
    ],
  },
  {
    slug: "ladbroke-grove",
    name: "Ladbroke Grove",
    cardImage: `${IMG}/ladgrove02.jpg`,
    cardAlt: "Ladbroke Grove",
    heroImage: `${IMG}/ladgrove02.jpg`,
    description:
      "A Notting Hill house where generous colour and collected objects turn a classic plan into a home that is anything but conventional.",
    gallery: [
      { src: `${IMG}/ladgrove02.jpg`, alt: "Cabinet with sculptural lamp", aspect: "portrait" },
      { src: `${IMG}/ladbroke-grove-layout.jpg`, alt: "Ladbroke Grove feature", aspect: "portrait" },
    ],
  },
  {
    slug: "lansdowne-road",
    name: "Lansdowne Road",
    cardImage: `${IMG}/lansdowne03.jpg`,
    cardAlt: "Lansdowne Road",
    heroImage: `${IMG}/lansdowne03.jpg`,
    description:
      "An elegant Notting Hill garden square apartment, where calm upholstery and curated art let the light and proportions do the talking.",
    gallery: [
      { src: `${IMG}/lansdowne03.jpg`, alt: "Lansdowne Road living room", aspect: "portrait" },
      { src: `${IMG}/lansdowne-layout-2-pdf.jpg`, alt: "Lansdowne Road feature", aspect: "portrait" },
    ],
  },
  {
    slug: "spring-terrace",
    name: "Spring Terrace",
    cardImage: `${IMG}/springterrace03.jpg`,
    cardAlt: "Spring Terrace",
    heroImage: `${IMG}/springterrace03.jpg`,
    description:
      "A compact London terrace packed with personality — joyful colour, pattern-on-pattern and clever storage make small rooms live large.",
    gallery: [
      { src: `${IMG}/springterrace03.jpg`, alt: "Spring Terrace interior", aspect: "portrait" },
      { src: `${IMG}/spring-terrace-article-make-main-image-when-clicked.jpg`, alt: "Spring Terrace feature", aspect: "portrait" },
    ],
  },
  {
    slug: "egerton-crescent",
    name: "Egerton Crescent",
    cardImage: `${IMG}/coming-soon---egerton-crescent.jpg`,
    cardAlt: "Egerton Crescent — Coming Soon",
    comingSoon: true,
    heroImage: `${IMG}/coming-soon---egerton-crescent.jpg`,
    description: "Coming soon.",
    gallery: [],
  },
  {
    slug: "ladbroke-square",
    name: "Ladbroke Square",
    cardImage: `${IMG}/coming-soon---ladbroke-square.jpg`,
    cardAlt: "Ladbroke Square — Coming Soon",
    comingSoon: true,
    heroImage: `${IMG}/coming-soon---ladbroke-square.jpg`,
    description: "Coming soon.",
    gallery: [],
  },
];

export const homeSlides = [
  { name: "Sussex Home", href: "/interior/sussex-home", image: `${IMG}/sussex13.jpg` },
  { name: "Bradby House", href: "/interior/bradby-house", image: `${IMG}/bradby02.jpg` },
  { name: "Spring Terrace", href: "/interior/spring-terrace", image: `${IMG}/springterrace03.jpg` },
  { name: "Gassin", href: "/interior/gassin", image: `${IMG}/gassin01.jpg` },
];

export interface Announcement {
  title: string;
  image: string;
  href: string;
}

export const featuredAnnouncement: Announcement = {
  title: "Villa Bologna Pottery x Henri Fitzwilliam-Lay",
  image: `${IMG}/00008.jpg`,
  href: "https://www.henrifitzwilliamlay.com/villa-bologna-pottery-x-henri-fitzwilliam-lay/",
};

export const announcements: Announcement[] = [
  {
    title: "House & Garden Article: Living La Pura Vida",
    image: `${IMG}/08-26cover.jpg`,
    href: "https://www.henrifitzwilliamlay.com/la-pura-vida/",
  },
  {
    title: "Homes & Gardens Article: Theatre of the Beautiful",
    image: `${IMG}/cover-sketch.jpg`,
    href: "https://www.henrifitzwilliamlay.com/theatre-of-the-beautiful/",
  },
  {
    title: "House and Garden 101, 2026",
    image: `${IMG}/feed41.jpg`,
    href: "https://www.henrifitzwilliamlay.com/house-and-garden-101/",
  },
  {
    title: "WOW!House 2026 at Chelsea Harbour",
    image: `${IMG}/misia-2.jpg`,
    href: "https://www.henrifitzwilliamlay.com/wowhouse-2026-chelsea-harbour/",
  },
  {
    title: "Introspective Article: Modernity and Vintage",
    image: `${IMG}/gassin11.jpg`,
    href: "https://www.henrifitzwilliamlay.com/modernity-and-vintage-touches/",
  },
  {
    title: "House & Garden Top 100, 2025",
    image: `${IMG}/top-100-mediapack-2025.jpg`,
    href: "https://www.henrifitzwilliamlay.com/house-garden-top-100-2025/",
  },
  {
    title: "Henri Fitzwilliam-Lay x Rupert Bevan Stool Collaboration",
    image: `${IMG}/rupert-bevan-stoll-collab.jpg`,
    href: "https://www.henrifitzwilliamlay.com/rupert-bevan-stool-collaboration/",
  },
  {
    title: "Defining Style: The Book of Interior Design by Joan Barzilay Freund",
    image: `${IMG}/defining-style-cover.jpg`,
    href: "https://www.henrifitzwilliamlay.com/defining-style-book/",
  },
  {
    title: "Villa Bologna Interview",
    image: `${IMG}/hfl.jpg`,
    href: "https://www.henrifitzwilliamlay.com/villa-bologna-interview/",
  },
  {
    title: "Residence Magazine: Colourful Gem",
    image: `${IMG}/residence-magazine-cover.jpg`,
    href: "https://www.henrifitzwilliamlay.com/colourful-gem/",
  },
  {
    title: "The Current Vol.5: Legacy Edition by Urban Electric Co",
    image: `${IMG}/the-current-vol.5-legacy-edition.jpg`,
    href: "https://www.henrifitzwilliamlay.com/legacy-edition-by-urban-electric/",
  },
  {
    title: "Introspective Article: An Exuberant Cotswold Home",
    image: `${IMG}/henir-1stdibs.jpg`,
    href: "https://www.henrifitzwilliamlay.com/exuberant-cotswold-home/",
  },
  {
    title: "House & Garden Project of the Year Award",
    image: `${IMG}/hfl-projectoftheyear.jpg`,
    href: "https://www.henrifitzwilliamlay.com/project-of-the-year/",
  },
  {
    title: "Elle Decor Article: Old Rectory Project",
    image: `${IMG}/layout-image.jpg`,
    href: "https://www.henrifitzwilliamlay.com/elle-decor-old-rectory-project/",
  },
  {
    title: "House & Garden Article: Young at Heart",
    image: `${IMG}/project-of-the-year-cover.jpg`,
    href: "https://www.henrifitzwilliamlay.com/house-and-garden-young-at-heart/",
  },
  {
    title: "House & Garden Article: Smart Casual",
    image: `${IMG}/bradby-insert-pdf.jpg`,
    href: "https://www.henrifitzwilliamlay.com/house-and-garden-smart-casual/",
  },
];

export const products = [
  { name: "Pair of Vintage 1960s Chairs", image: `${IMG}/img-0117.jpg` },
  { name: "Vintage White Ceramic Topiary Centre Pieces", image: `${IMG}/img-0103.jpg` },
  { name: "Venini Citrine Coloured Glass Pendant", image: `${IMG}/img-0100.jpeg` },
  { name: "Pair of White Ceramic Lampshade Bases", image: `${IMG}/img-0110.jpg` },
  { name: "'Space' Signed Edition Print by Kate Hepburn", image: `${IMG}/img-0129.jpg` },
];

export const timelineSteps = [
  {
    number: "01",
    title: "Getting to Know You",
    text: "At HFL, every project begins with a consultation. We take the time to understand not just your space, but your story. We explore your lifestyle, your collections, your passions—and how these can be reflected in your home.",
    image: `${IMG}/project-execution.jpg`,
    imageSide: "left" as const,
  },
  {
    number: "02",
    title: "Concept Development: A Curated Vision",
    text: "Once we understand your preferences and aspirations, we develop a bespoke design concept that reflects your personality, values, and way of living. To ensure clarity, we charge a design fee based on square meterage, ensuring a clear and transparent pricing structure that reflects the unique scope of each project.",
    image: `${IMG}/still12.jpg`,
    imageSide: "right" as const,
  },
  {
    number: "03",
    title: "Design Refinement & Sourcing",
    text: "This is where your vision takes shape. Henri guides the selection of custom furnishings, bespoke fabrics, and rare vintage finds to perfectly match the design concept. We collaborate with skilled artisans and trusted makers to ensure that every element is crafted with care and intention. A highlight of the process is visiting carefully selected showrooms and galleries. Whether it is deciding custom finishes or browsing rare furniture, the studio will be there to assist.",
    image: `${IMG}/still1-portrait.jpg`,
    imageSide: "left" as const,
  },
  {
    number: "04",
    title: "Project Execution",
    text: "Execution is where vision turns into reality. From coordinating trusted craftsmen and contractors to overseeing the delivery of bespoke pieces, we handle every detail with utmost care. Henri remains closely involved, overseeing the installation process to ensure every element is completed with precision.",
    image: `${IMG}/getting-to-know-you.jpg`,
    imageSide: "right" as const,
  },
  {
    number: "05",
    title: "A Home That Grows With You",
    text: "Our relationship doesn't end once the project is complete. As your life evolves, so too can your home. We are often called back in by our clients to refresh a room or help you find that perfect piece.",
    image: `${IMG}/a-home-that-grows-with-you.jpg`,
    imageSide: "left" as const,
  },
];
