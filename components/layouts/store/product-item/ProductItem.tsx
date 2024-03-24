/* eslint-disable @next/next/no-img-element */
import { FC, memo } from 'react'
import styles from '@/components/layouts/store/product-item/product-item.module.sass'
import { IoCartOutline, IoEyeOutline, IoHeartOutline, IoSearchOutline, IoStar, IoStarHalf, IoStarHalfOutline, IoStarOutline } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { formatVND } from '@/utils'

interface IProductItemProps {
    off?: number
    images?: Array<{
        src: string,
        alt?: string
    }>
    name?: string
    category?: string
    description?: string
    oldPrice?: number
    price?: number
    stars?: string

    
}

const ProductItem: FC<IProductItemProps> = ({
    off = 10,
    images = [
        { src: '/product-1.png', alt: ''},
        { src: '/product-2.png', alt: ''},
    ],
    name = 'Ghế Tròn Hiện Đại',
    category = 'Ghế ngồi',
    description = 'Ghế 80 x 90 x 100 cm, thiết kế sang trọng với tông màu trắng.',
    oldPrice = 990000,
    price = 890000,
    stars = 5,
}) => {
  return (
    <Link href={'#'} className={styles._container}>
        {off && <span className={styles._off}>-{off}%</span>}
        <div className={styles._images}>
            <div className={styles._slides}>
                {images && images.length > 0 && images.slice(0, 2).map((image, imageIndex) => (
                    <img 
                        key={imageIndex} 
                        src={image.src} 
                        alt={image.alt || ''}  
                    />
                ))}
            </div>
            <div className={styles._actions}>
                <button><IoEyeOutline /></button>
                <button><IoHeartOutline /></button>
                <button><IoCartOutline /></button>
            </div>
        </div>
        <div className={styles._descriptions}>
            {name && <h3 className={styles._name}>{name}</h3>}
            {category && <h4 className={styles._category}>{category}</h4>}
            {description && <p className={styles._description}>{description}</p>}
            {stars && (
                <ul className={styles._stars}>
                    <li><IoStar /></li>
                    <li><IoStar /></li>
                    <li><IoStar /></li>
                    <li><IoStarHalfOutline /></li>
                    <li><IoStarOutline /></li>
                </ul>
            )}
            {price && (
                <strong className={styles._price}>
                    {formatVND(price)} 
                    {oldPrice && (
                        <span className={styles._old__price}>{formatVND(oldPrice)}</span>
                    )}
                </strong>
            )}
        </div>
    </Link>
  )
}

export default memo(ProductItem)