import { FC } from 'react'
import styles from '@/components/pages/store/shop/producttag.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'

interface IProductTag {

}

const ProductTag: FC<IProductTag> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            
        </div>
    )
}

export default ProductTag