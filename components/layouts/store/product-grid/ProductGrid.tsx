import { FC } from 'react'
import styles from '@/components/layouts/store/product-grid/product-grid.module.sass'
import ProductItem from '../product-item/ProductItem'

interface IProductGridProps {

}

const ProductGrid: FC<IProductGridProps> = ({

}) => {
  return (
    <div className={styles._container}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </div>
  )
}

export default ProductGrid