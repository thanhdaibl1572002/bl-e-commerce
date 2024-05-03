import { FC } from 'react'
import styles from '@/components/pages/store/shop/productloadmore.module.sass'
import { useAppSelector } from '@/redux'
import { useProductContext } from '@/components/pages/store/shop/ProductContext'

interface IProductLoadMore {

}

const ProductLoadMore: FC<IProductLoadMore> = ({
 
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { productState } = useProductContext()
    return (
        <div className={styles[`_container__${productState.productView}__${theme}`]}>
           
        </div>
    )
}

export default ProductLoadMore