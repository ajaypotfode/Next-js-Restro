import { MdDinnerDining, MdFreeBreakfast, MdLunchDining } from "react-icons/md";
const menuimg=[
  {
    id:1,
    name:"Breakfast",
    img: <MdFreeBreakfast />
  },
  {
    id:2,
    name:"Lunch",
    img: <MdLunchDining />
  },
  {
    id:3,
    name:"Dinner",
    img:<MdDinnerDining />

  }
]
const review = [
  {
    name:"John",
    image: "/Images/pic-1.png"

  },
  {
    name:"Lissa",
    image: "/Images/pic-2.png"

  },
  {
    name:"Martin",
    image: "/Images/pic-3.png"

  },
];
export {review,menuimg};
