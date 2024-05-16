/* eslint-disable @next/next/no-img-element */
'use client'
import { FC, useCallback, useRef, useState } from 'react'
import styles from '@/app/detail/[id]/detailtopslider.module.sass'
import { useAppSelector } from '@/redux'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, themeGradientColors, whiteColor } from '@/variables/variables'
import '@/app/detail/[id]/detailtopslider.sass'

interface IDetailTopSliderProps {
  images: Array<{
    src: string
    alt?: string
  }>
}

const DetailTopSlider: FC<IDetailTopSliderProps> = ({
  images,
}) => {

  const { theme } = useAppSelector(state => state.theme)
  const imageSliderRef = useRef<SwiperRef>(null)

  const handleImageSliderPrev = useCallback((): void => {
    if (!imageSliderRef.current) return
    imageSliderRef.current.swiper.slidePrev()
  }, [])

  const handleImageSliderNext = useCallback((): void => {
    if (!imageSliderRef.current) return
    imageSliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className={styles[`_container__${theme}`]}>
      <div className={styles._images}>
        <Swiper
          ref={imageSliderRef}
          className={styles._slides}
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop
          pagination={{
            el: "#paginations",
            clickable: true,
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 3,
            renderBullet: (index, className) => {
              return `<div class="${className} ${styles._pagination}">
              <img src=${images[index].src} alt=${images[index].alt} />
              </div>`
            }
          }}
          breakpoints={{
            500: {
              pagination: {
                dynamicMainBullets: 4,
              }
            }
          }}
        >
          {images && images.length > 0 && images.map((image, index) => (
            <SwiperSlide key={index} className={styles._slide}>
              <img width={400} height={400} src={image.src} alt={image.alt || ''} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          width={35}
          height={35}
          className={styles._prev}
          icon={<PiArrowLeft />}
          iconSize={22}
          iconColor={whiteColor}
          background={themeGradientColors[theme]}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
          bubbleColor={whiteColor}
          onClick={handleImageSliderPrev}
        />
        <Button
          width={35}
          height={35}
          className={styles._next}
          icon={<PiArrowRight />}
          iconSize={22}
          iconColor={whiteColor}
          background={themeGradientColors[theme]}
          boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
          bubbleColor={whiteColor}
          onClick={handleImageSliderNext}
        />
      </div>
      <div className={styles._paginations} id='paginations'></div>
    </div>
  )
}

export default DetailTopSlider