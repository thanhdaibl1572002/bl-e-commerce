'use client'
import { FC, useRef, useEffect, useState } from 'react'
import styles from '@/app/products/products.module.sass'
import ProductFilter from '@/components/layouts/store/product-filter/ProductFilter'
import ProductGrid from '@/components/layouts/store/product-grid/ProductGrid'
import { IoCloseOutline, IoGridOutline, IoOptionsOutline } from 'react-icons/io5'
import useMediaScreen from '@/hooks/useMediaScreen'

const Products: FC = () => {
    const filterRef = useRef<HTMLDivElement>(null)
    const screenWidth = useMediaScreen()
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false)

    return (
        <div className={styles._container}>
            {isShowFilter && screenWidth < 1000 && (
                <div ref={filterRef} className={styles._filter__mobile}>
                {
                    screenWidth < 1000 
                    ? <button 
                        className={styles._hidden__filter}
                        onClick={() => setIsShowFilter(false)}
                    >
                        <IoCloseOutline />
                    </button>
                    : null
                }
                <ProductFilter/>
            </div>
            )}
            {screenWidth >= 1000 && (
                <div ref={filterRef} className={styles._filter}>
                <ProductFilter/>
            </div>
            )}
            
            <div className={styles._grid}>
                <div className={styles._tool}>
                    <div className={styles._tool__left}>
                        
                    </div>
                    <div className={styles._tool__right}>
                        <button className={styles._display__mode}><IoGridOutline /></button>
                        {
                            screenWidth < 1000 
                            ? <button 
                                className={styles._show__filter}
                                onClick={() => setIsShowFilter(true)}
                            >
                                <IoOptionsOutline />
                            </button> 
                            : null
                        }
                    </div>
                </div>
                <ProductGrid />
            </div>
        </div>
    )
}

export default Products