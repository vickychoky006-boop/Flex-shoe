import card1 from "../../img/Women/card/Nike1.avif";
import card2 from "../../img/Women/card/Nike2.avif";
import card3 from "../../img/Women/card/Nike3.avif";
import card4 from "../../img/Women/card/Nike4.avif";
import card5 from "../../img/Women/card/adidas1.png";
import card6 from "../../img/Women/card/adidas2.png";
import card7 from "../../img/Women/card/adidas3.png";
import card8 from "../../img/Women/card/adidas4.png";






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
    name: "Nike Air Zoom Bella",
    price: 7999,
    image: card1,
    desc: "Responsive cushioning provides stability during workouts ,Perfect for training sessions and active lifestyles",
    link: "/card17",
  },
  {
    id: 2,
    name: "Nike Quest 6 Women",
    price: 7299,
    image: card2,
    desc: "Lightweight support helps you stay comfortable on every run.Designed for daily training and long walka",
    link: "/card18",
  },
  {
    id: 3,
    name: "Nike Downshifter",
    price: 4499,
    image: card3,
    desc: "Breathable upper keeps your feet cool and fresh.Ideal for running, walking, and everyday comfort",
    link: "/card19",
  },
  {
    id: 4,
    name: "Nike Flex Experience Run",
    price: 5999,
    image: card4,
    desc: "Flexible design allows natural movement with every step.Built for comfort, fitness, and daily wear",
    link: "/card20",
  },
  {
    id: 5,
    name: "Adidas Lite Racer",
    price: 4499,
    image: card5,
    desc: "Lightweight cushioning delivers all-day comfort and support.Perfect for casual outings and everyday activities",
    link: "/card21",
  },
  {
    id: 6,
    name: "Adidas VL Court",
    price: 6499,
    image: card6,
    desc: " Classic suede-inspired design with modern comfort.A stylish choice for everyday fashion and wear",
    link: "/card22",
  },
  {
    id: 7,
    name: "Adidas Advantage Base",
    price: 3499,
    image: card7,
    desc: "Flexible sole and breathable upper for smooth movement. Ideal for workouts, walks, and daily activities.",
    link: "/card23",
  },
  {
    id: 8,
    name: "Adidas Response Runner",
    price: 4999,
    image: card8,
    desc: "Built for smooth performance and lasting comfort.Ideal for running, training, and active lifestyles",
    link: "/card24",
  },
  
];