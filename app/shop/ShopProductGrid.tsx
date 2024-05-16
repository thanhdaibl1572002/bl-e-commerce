import { FC } from 'react'
import styles from '@/app/shop/shopproductgrid.module.sass'
import { useAppSelector } from '@/redux'
import ShopProduct from '@/app/shop/ShopProduct'
import { useProductContext } from '@/app/shop/ShopProductContext'

interface IShopProductGrid {
    cartButton: string
}

const ShopProductGrid: FC<IShopProductGrid> = ({
    cartButton,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { productState } = useProductContext()
    return (
        <div className={styles[`_container__${productState.productView}__${theme}`]}>
            {productState.products.map((product, index) => (
                <ShopProduct
                    key={product.id}
                    id={product.id}
                    imageSrc={product.imageSrc}
                    discountPercentage={product.discountPercentage}
                    brand={product.brand}
                    name={product.name}
                    rating={product.rating}
                    ratingCount={product.ratingCount}
                    currentPrice={product.currentPrice}
                    features={product.features}
                    cartButton={cartButton} 
                />
            ))}
        </div>
    )
}

export default ShopProductGrid