import {BsLightningChargeFill} from "react-icons/bs";
import {CgArrowsVAlt} from "react-icons/cg";
import { IoWater } from "react-icons/io5";
import {GiFlatTire} from "react-icons/gi";

export const mainCardInfo = [
    {
        title:"Energy",
        value: "45%",
        icon : <BsLightningChargeFill />,
        percentage : "45",
        mainColor : "#51df88",
        
    },
    {
        title: "Range",
        value: "257k%",
        icon : <CgArrowsVAlt />,
        percentage : "52",
        mainColor : " #FF7E86",
    },
    {
        title: "Break Fluid",
        value: "9%",
        icon : <IoWater />,
        percentage : "9",
        mainColor : " #A162F7",
    },
    {
        title: "Tire Wear",
        value: "25%",
        icon : <GiFlatTire />,
        percentage : "25",
        mainColor : " #F6CC0D",
    }

];