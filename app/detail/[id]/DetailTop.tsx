import { FC } from 'react'
import styles from '@/app/detail/[id]/detailtop.module.sass'
import DetailTopSlider from '@/app/detail/[id]/DetailTopSlider'
import DetailTopInfo, { IDetailTopInfoProps } from '@/app/detail/[id]/DetailTopInfo'
import { blackGradientColor, blueGradientColor, greenGradientColor, redGradientColor, whiteGradientColor, yellowGradientColor } from '@/variables/variables'

const sampleVariants: IDetailTopInfoProps['variants'] = [
  {
    type: 'color',
    title: 'Màu sắc',
    name: 'color',
    options: [
      { code: redGradientColor, value: 'Đỏ' },
      { code: greenGradientColor, value: 'Xanh lá' },
      { code: blueGradientColor, value: 'Xanh dương' },
      { code: yellowGradientColor, value: 'Vàng' },
      { code: blackGradientColor, value: 'Đen' },
      { code: whiteGradientColor, value: 'Trắng' },
    ],
  },
  {
    type: 'check',
    title: 'Bộ nhớ RAM',
    name: 'ram',
    options: [
      { label: '2 GB', value: '2' },
      { label: '4 GB', value: '4' },
      { label: '6 GB', value: '6' },
      { label: '8 GB', value: '8' },
      { label: '12 GB', value: '12' },
      { label: '16 GB', value: '16' },
    ],
  },
  {
    type: 'check',
    title: 'Bộ nhớ ROM',
    name: 'rom',
    options: [
      { label: '16 GB', value: '16' },
      { label: '32 GB', value: '32' },
      { label: '64 GB', value: '64' },
      { label: '128 GB', value: '128' },
      { label: '256 GB', value: '256' },
      { label: '512 GB', value: '512' },
    ],
  },
]

const sampleFeatures = [
  'Video siêu ổn định 8K', 
  'Chế độ Nightography cùng chế độ chân dung', 
  'Độ phân giải ảnh 50MP và màn hình sáng', 
  'Tương phản màu sắc tự điều chỉnh',
]

const sampleImages = [
  { src: '/images/shop/products/phone/oppo-a18.png' },
  { src: '/images/shop/products/phone/i-phone-15-pro-max.png' },
  { src: '/images/shop/products/phone/samsung-galaxy-a35.png' },
  { src: '/images/shop/products/phone/xiaomi-redmi-12.png' },
  { src: '/images/shop/products/phone/vivo-y36.png' },
  { src: '/images/shop/products/phone/vivo-y100.png' },
  { src: '/images/shop/products/phone/xiaomi-redmi-note-13.png' },
  { src: '/images/shop/products/phone/oppo-a58.png' },
]

interface IDetailTopProps {
  
}

const DetailTop: FC<IDetailTopProps> = ({

}) => {
  return (
    <div className={styles._container}>
     <DetailTopSlider 
       images={sampleImages}
     />
     <DetailTopInfo 
        name={'Samsung Galaxy S22 Ultra'}
        rating={4.5}
        ratingCount={100}
        discountPercentage={15}
        currentPrice={24900000}
        variants={sampleVariants}
        features={sampleFeatures}
        cartButton={'Thêm Giỏ Hàng'}
     />
    </div>
  )
}

export default DetailTop