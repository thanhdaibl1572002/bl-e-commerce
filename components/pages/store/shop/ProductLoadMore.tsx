import { FC } from 'react'
import styles from '@/components/pages/store/shop/productloadmore.module.sass'
import { useAppSelector } from '@/redux'
import { useProductContext } from '@/components/pages/store/shop/ProductContext'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors, whiteColor } from '@/variables/variables'
import { PiListPlusLight } from 'react-icons/pi'

interface IProductLoadMore {
    loadMoreButton: string
}

const ProductLoadMore: FC<IProductLoadMore> = ({
    loadMoreButton,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { productDispatch } = useProductContext()

    const handleLoadMore = (): void => {
        productDispatch({ type: 'LOADMORE' })
    }

    return (
        <div className={styles[`_container__${theme}`]}>
            <Button
                width={240}
                height={45}
                textSize={14.5}
                text={loadMoreButton}
                textColor={themeColors[theme]}
                icon={<PiListPlusLight />}
                iconSize={23}
                iconColor={themeColors[theme]}
                background={whiteColor}
                animateDuration={500}
                boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 10)}`}
                bubbleColor={themeColors[theme]}
                borderRadius='30px'
                onClick={handleLoadMore}
            />
        </div>
    )
}

export default ProductLoadMore