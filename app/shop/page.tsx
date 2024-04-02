'use client'
import { FC, useRef, useEffect, useState, ChangeEvent } from 'react'
import styles from '@/app/shop/shop.module.sass'
import ProductFilter from '@/components/layouts/store/product-filter/ProductFilter'
import ProductGrid from '@/components/layouts/store/product-grid/ProductGrid'
import { IoCloseOutline, IoGridOutline, IoOptionsOutline } from 'react-icons/io5'
import useMediaScreen from '@/hooks/useMediaScreen'
import { useTranslation } from '@/languages' 
import { useAppSelector } from '@/redux'
import Button from '@/components/forms/Button'
import { mainColor, whiteColor } from '@/variables/variables'

const Products: FC = () => {
    const filterRef = useRef<HTMLDivElement>(null)
    // const screenWidth = useMediaScreen()
    // const [isShowFilter, setIsShowFilter] = useState<boolean>(false)

    // const [t, i18n] = useTranslation()
    // console.log(t('products.value'))

    // const [lang, setLang] = useState('vi')

    // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setLang(e.target.value)
    //     i18n.changeLanguage(e.target.value)
    // }

    const handleShowFilter = (): void => {
        filterRef && filterRef.current && (filterRef.current.style.right = '0')
    }

    const handleHiddenFilter = (): void => {
        filterRef && filterRef.current && (filterRef.current.style.right = '100%')
    }

    return (
        <div className={styles._container}>
            <div ref={filterRef} className={styles._filter}>
                <IoCloseOutline
                    className={styles._hidden__filter}
                    onClick={handleHiddenFilter}
                />
                <ProductFilter/>
            </div>
            
            <div className={styles._grid}>
                <div className={styles._tool}>
                    <div className={styles._tool__left}>
                        {/* <select onChange={handleChange}>
                            <option>vi</option>
                            <option>en</option>
                            <option>zh</option>
                        </select> */}
                    </div>
                    <div className={styles._tool__right}>
                        <Button 
                            buttonIcon={<IoGridOutline />} 
                            buttonBackground={whiteColor}
                            buttonIconColor={mainColor}
                            buttonBubbleColor={mainColor}
                        />
                        <Button 
                            buttonIcon={<IoOptionsOutline />} 
                            buttonBackground={whiteColor}
                            buttonIconColor={mainColor}
                            buttonBubbleColor={mainColor}
                            buttonClassName={styles._show__filter}
                            onClick={handleShowFilter}
                        />
                    </div>
                </div>
                <ProductGrid />
            </div>
        </div>
    )
}

export default Products