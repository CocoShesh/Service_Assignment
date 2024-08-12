interface MarketingData {
  id: number;
  title: string;
  description: string;
  src: string;
}

interface ShowcaseData {
  id: number;
  title?: string;
  description?: string[] | string | undefined;
  src?: string;
  bg?: string;
  item?: string[];
}

export const marketingData: MarketingData[] = [
  {
    id: 1,
    title: "Responsive",
    description:
      "Available anytime through phone, text, or email to address your needs promptly.",
    src: "./images/Responsive.webp",
  },
  {
    id: 2,
    title: "Syndication",
    description:
      "Your property is marketed across local, national, and international platforms for maximum exposure.",
    src: "./images/Syndication.webp",
  },
  {
    id: 3,
    title: "Virtual Tour",
    description:
      "Showcase your home with a stunning virtual tour, making it stand out to potential buyers.",
    src: "./images/Virtual_Tour.webp",
  },
  {
    id: 4,
    title: "Photography",
    description:
      "Capture the beauty of your property with high-end, professional photography.",
    src: "./images/Photography.webp",
  },
];

export const showcaseData: ShowcaseData[] = [
  {
    id: 1,
    title: "Elegant Touch",
    description: [
      "Enhance appeal with vibrant artwork and decor.",
      "Create a stylish environment with curated pieces.",
      "Design interiors that exude elegance and charm.",
    ],
    src: "./images/Elegant_Touch.webp",
  },
  {
    id: 2,
    title: "My Staging Expertise",
    description: [
      "Unclutter and organize your home.",
      "Neatly arrange drawers and cabinets.",
      "Keep pets outdoors or off the premises.",
      "Play soft music for a welcoming atmosphere.",
    ],
    src: "./images/Staging_Expertise.webp",
  },
];

export const ImageData: ShowcaseData[] = [
  {
    id: 1,
    title: "Intentional Layout",
    src: "./images/Intentional_layout.webp",
  },
  {
    id: 2,
    title: "Decor Guidance",
    src: "./images/Decor_Guidance.webp",
  },
];
export const BusinessProcessData: ShowcaseData[] = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with an initial consultation to understand your goals, preferences, and requirements,thorough assessment of the property.",
    src: "./images/first.png",
    bg: "#868788",
  },
  {
    id: 2,
    title: "Marketing Plan",
    description:
      "We devise a comprehensive marketing plan tailored to your property. This plan includes targeted advertising, listing your property on multiple platforms.",
    src: "./images/second.png",
    bg: "#727375",
  },
  {
    id: 3,
    title: "Review Offers",
    description:
      "Once offers are received, we carefully review them with you, providing expert advice to help you reach the best possible agreement with potential buyers.",
    src: "./images/third.png",
    bg: "#5e5f61",
  },
  {
    id: 4,
    title: "Transaction",
    description:
      "We guide you through the entire transaction process, ensuring that all legal and financial aspects are handled efficiently and that the sale is completed smoothly.",
    src: "./images/fourth.png",
    bg: "#4a4b4d",
  },
  {
    id: 5,
    title: "After-Sale Service",
    description:
      "Our service doesn't end with the sale. We offer after-sale support to ensure that you are satisfied with the outcome and assist with any post-sale needs.",
    src: "./images/fifth.png",
    bg: "#36383a",
  },
];

export const BuyingsData: ShowcaseData[] = [
  {
    id: 1,
    title: "Initial Consultation & Planning",
    src: "./images/conversation.png",
  },
  {
    id: 2,
    title: "Search for a Home & Get Pre-Approved",
    src: "./images/loan.png",
  },
  {
    id: 3,
    title: "Submit an Offer",
    src: "./images/email.png",
  },
  {
    id: 4,
    title: "Complete Settlement Process",
    src: "./images/handshake.png",
  },
];

export const ServiceData: ShowcaseData[] = [
  {
    id: 1,
    title: "Exceptional Real Estate Service",
    item: [
      "We provide unmatched service to our clients.",
      "We anticipate needs before they're expressed.",
      "Our experience in real estate is nonnegotiable.",
      "Choosing Hansen Partners means experiencing something exceptional.",
    ],

    src: "./images/enlarge1.png",
  },
  {
    id: 2,
    title: "We Want To Create An Unforgettable Experience For You.",
    item: [
      " Combine Comparative Market Analysis data with local market research.",
      "Create a tailored marketing plan to meet your selling goals.",
      " Include online, print, and other marketing tools.",
      "Target the best-qualified pool of buyers.",
      "Require a firm with experience and flexibility for successful marketing.",
      "Hansen Partners offers both experience and flexibility.",
    ],
    src: "./images/success2.webp",
  },
  {
    id: 3,
    title: "The Hansen Partners Communications Tablet.",
    description:
      "We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.",
    item: [
      "Review all documents and sign in the comfort of your home or anywhere.",
      "Stay up to date on all marketing activities, review materials, photos, etc. in real time.",
      "Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.",
      "You have your own email assigned just for you and your common space to quickly write a note.",
    ],
    src: "./images/Staging_Expertise.webp",
  },
];

export const MarketData: ShowcaseData[] = [
  {
    id: 1,
    title: "Local Exposure",
    description:
      "Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.",
    src: "./images/search.png",
  },
  {
    id: 2,
    title: "National Exposure",
    description:
      "We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.  ",
    src: "./images/increase.png",
  },
  {
    id: 3,
    title: "International Exposure",
    description:
      "To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK",
    src: "./images/global-connection.png",
  },
];
