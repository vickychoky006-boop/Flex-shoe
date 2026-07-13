import card1 from "../../img/men/New folder/card1.jfif";
import card2 from "../../img/men/New folder/card2.jfif";
import card3 from "../../img/men/New folder/card3.jfif";
import card4 from "../../img/men/New folder/card4.jfif";
import card5 from "../../img/men/New folder/card5.jfif";
import card6 from "../../img/men/New folder/card6.jfif";
import card7 from "../../img/men/New folder/card7.png";
import card8 from "../../img/men/New folder/card8.jfif";
import card9 from "../../img/men/New folder/card9.png";
import card10 from "../../img/men/New folder/card10.png";
import card11 from "../../img/men/New folder/card11.png";
import card12 from "../../img/men/New folder/card12.png";




export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  link:string;
  
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adidas Runfalcon 5",
    price: 4999,
    image: card1,
    desc: "Lightweight design with responsive cushioning for everyday comfort. Perfect for running, walking, and daily activities.",
    link: "/card1",
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    price: 6999,
    image: card2,
    desc: "Advanced BOOST cushioning delivers superior energy return. Premium comfort and performance for every step.",
    link: "/card2",
  },
  {
    id: 3,
    name: "Adidas Grand Court 2.0",
    price: 5499,
    image: card3,
    desc: "Lightweight, durable, and built for peak performance every step of the way.",
    link: "/card3",
  },
  {
    id: 4,
    name: "Adidas Duramo SL",
    price: 5999,
    image: card4,
    desc: "Breathable mesh upper keeps your feet cool and fresh. Designed for active lifestyles and daily training.",
    link: "/card4",
  },
  {
    id: 5,
    name: "Puma Caven 2.0",
    price: 4499,
    image: card5,
    desc: "Classic basketball-inspired design with modern comfort. Perfect for everyday wear and casual styling.",
    link: "/card5",
  },
  {
    id: 6,
    name: "Puma Trinity Lite",
    price: 6499,
    image: card6,
    desc: "Lightweight construction ensures all-day comfort and support. A bold sneaker designed for modern street fashion.",
    link: "/card6",
  },
  {
    id: 7,
    name: "Puma Flyer Flex",
    price: 3799,
    image: card8,
    desc: "Flexible sole and breathable upper for smooth movement. Ideal for workouts, walks, and daily activities.",
    link: "/card7",
  },
  {
    id: 8,
    name: "Nike Revolution 7",
    price: 4999,
    image: card9,
    desc: "Lightweight cushioning provides comfort throughout the day. Perfect for running, walking, and everyday use.",
    link: "/card8",
  },
  {
    id: 9,
    name: "Puma Velocity Nitro",
    price: 10999,
    image: card10,
    desc: "Responsive cushioning delivers speed and comfort in every stride. Built for runners seeking performance and durability.",
    link: "/card9",
  },
  {
    id: 10,
    name: "Nike Pegasus",
    price: 5499,
    image: card11,
    desc: "Classic tennis-inspired design with a clean modern look. Built to deliver style and comfort wherever you go.",
    link: "/card10",
  },
  {
    id: 11,
    name: "Nike Air Force",
    price: 5999,
    image: card7,
    desc: "Breathable mesh upper keeps your feet cool and fresh. Designed for training, running, and daily activities.",
    link: "/card11",
  },
  {
    id: 12,
    name: "Nike Air Max 90",
    price: 16999,
    image: card12,
    desc: "Advanced BOOST technology offers exceptional energy return. Premium comfort and performance with every step.",
    link: "/card12",
  },
];