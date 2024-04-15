import { FC } from 'react'
import styles from '@/components/pages/store/shop/productfilter.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'

interface IProductFilter {

}

const ProductFilter: FC<IProductFilter> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            
        </div>
    )
}

export default ProductFilter