import card1 from "../../img/Women/card/puma1.avif";
import card2 from "../../img/Women/card/puma2.avif";
import card3 from "../../img/Women/card/puma3.avif";
import card4 from "../../img/Women/card/puma4.avif";







export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  link: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Puma Caven 2.0",
    price: 4999,
    image: card1,
    desc: " Classic basketball-inspired design with modern comfort.Perfect for casual wear and everyday styling",
    link: "/card13",
  },
  {
    id: 2,
    name: "Puma Trinity Lite",
    price: 6299,
    image: card2,
    desc: "Lightweight, durable, and built for peak performance every step of the way",
    link: "/card14",
  },
  {
    id: 3,
    name: "Puma Graviton Pro",
    price: 4499,
    image: card3,
    desc: "Sporty design with soft cushioning and reliable support.Ideal for daily activities and active lifestyles",
    link: "/card15",
  },
  {
    id: 4,
    name: "Puma Velocity Nitro 3",
    price: 7999,
    image: card4,
    desc: "Responsive cushioning delivers speed and performance.Built for runners who demand comfort and durability",
    link: "/card16",
  },
 
  
];