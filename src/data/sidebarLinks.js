import DashboardIcon from "../assets/icons/dashboard_icon.svg";
import DoughnutIcon from "../assets/icons/doughnut.svg";
import CarIcon2 from "../assets/icons/car_2.svg";
import ShoppingBagIcon from "../assets/icons/shopping_bag.svg";
import ShoppingCartIcon from "../assets/icons/shopping_cart.svg";
import FencingIcon from "../assets/icons/fencing.svg";
import CalendarIcon from "../assets/icons/calendar.svg";
import CommentIcon from "../assets/icons/comment.svg";
import CogIcon from "../assets/icons/cog.svg";
import SignoutIcon from "../assets/icons/signout.svg";

export const sidebarTopLinks = [
    {
      title:"Dashboard", 
      icon:DashboardIcon , 
      goto:"/"
    },
    {
      title:"Assets",
      icon:DoughnutIcon,
      goto:"/"
    },
    {
      title:"Booking",
      icon:CarIcon2,
      goto:"/booking"
    },
    {
      title:"Sell Cars",
      icon:ShoppingBagIcon,
      goto:"/"
    },
    {
      title:"Buy Cars",
      icon:ShoppingCartIcon,
      goto:"/"
    },
    {
      title:"Services",
      icon:FencingIcon ,
      goto:"/"
    },
    {
      title:"Calender",
      icon:CalendarIcon,
      goto:"/"
    },
    {
      title:"Messages",
      icon:CommentIcon,
      goto:"/"
    },
];

export const sidebarBottomLinks = [
  {
    title:"Settings",
    icon:CogIcon,
    goto:"/"
  },
  {
    title:"Sign Out",
    icon:SignoutIcon,
    goto:"/"
  }
];