import { FC } from 'react'
import styles from '@/components/pages/store/shop/productgrid.module.sass'
import { useAppSelector } from '@/redux'
import Product from '@/components/pages/store/shop/Product'
import { useProductContext } from '@/components/pages/store/shop/ProductContext'

interface IProductGrid {
    cartButton: string
}

const ProductGrid: FC<IProductGrid> = ({
    cartButton,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { productState } = useProductContext()
    return (
        <div className={styles[`_container__${productState.productView}__${theme}`]}>
            {productState.products.map((product, index) => (
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
                    cartButton={cartButton}
                />
            ))}
        </div>
    )
}

export default ProductGrid