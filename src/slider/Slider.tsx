import React, { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import './Slider.css'

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

const Slider = (props: SliderProps) => {
  return (
    <Swiper
      className="mb-24 flex items-center justify-center"
      modules={[EffectFade, Autoplay, Navigation, Pagination, A11y]}
      {...props.settings}
    >
      {props.children}
    </Swiper>
  )
}

export default Slider
