import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "./Mobille.css"
import { Pagination } from "swiper";


interface IMobilleProps {
  display: number[]
}

const Mobille:React.FC<IMobilleProps> =({display}) => {

    const pagination = {
    clickable: true,
    renderBullet: function (index: number, className:any) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return(
        <Swiper
         pagination={pagination}
         modules={[Pagination]}
       >
        {display.map(item =>{

        return(
         
           <SwiperSlide>
           <div  key={item } className="mobileActive" >
            <img src={`https://picsum.photos/id/${item * 20}/200/300`} ></img>
          </div>
           </SwiperSlide>
           )
      })}
        </Swiper> 
    )
}

export default Mobille