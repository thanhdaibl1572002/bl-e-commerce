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
            <ul>
                <li>Bàn phím</li>
                <li>Chuột</li>
                <li>Màn hình vi tính</li>
                <li>Tai nghe</li>
                <li>Loa bluetooth</li>
                <li>Ốp lưng</li>
                <li>Camera</li>
                <li>Gậy sellfie</li>
                <li>Giá đỡ điện thoại</li>
                <li>Micro</li>
            </ul>
        </div>
    )
}

export default ProductTag