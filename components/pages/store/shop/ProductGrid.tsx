import { FC } from 'react'
import styles from '@/components/pages/store/shop/productgrid.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Product from '@/components/pages/store/shop/Product'

const sampleProducts = [
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4.5,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 4.8,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4.5,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 4.8,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
    {
        imageSrc: '/images/product-2.png',
        discountPercentage: 15,
        brand: 'Samsung',
        name: 'Samsung Galaxy S22 Ultra',
        rating: 4.5,
        ratingCount: 80,
        currentPrice: 29990000,
        originalPrice: 34990000,
        features: [
            '6.8-inch Dynamic AMOLED 2X display',
            'Exynos 2200 chipset'
        ]
    },
    {
        imageSrc: '/images/product-3.png',
        discountPercentage: 10,
        brand: 'Sony',
        name: 'Sony WH-1000XM4 Wireless Headphones',
        rating: 4.8,
        ratingCount: 120,
        currentPrice: 4990000,
        originalPrice: 5490000,
        features: [
            'Industry-leading noise cancellation',
            '30-hour battery life'
        ]
    },
    {
        imageSrc: '/images/product-1.png',
        discountPercentage: 20,
        brand: 'Apple',
        name: '2022 Apple iMac with Retina 5K Display',
        rating: 5,
        ratingCount: 100,
        currentPrice: 19900000,
        originalPrice: 21900000,
        features: [
            '27-inch (diagonal) Retina 5K display',
            'AMD Radeon Pro 5300 graphics'
        ]
    },
]

interface IProductGrid {

}

const ProductGrid: FC<IProductGrid> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            {sampleProducts.map((product, index) => (
                <Product
                    key={index}
                    imageSrc={product.imageSrc}
                    discountPercentage={product.discountPercentage}
                    brand={product.brand}
                    name={product.name}
                    rating={product.rating}
                    ratingCount={product.ratingCount}
                    currentPrice={product.currentPrice}
                    originalPrice={product.originalPrice}
                    features={product.features}
                />
            ))}
        </div>
    )
}

export default ProductGrid