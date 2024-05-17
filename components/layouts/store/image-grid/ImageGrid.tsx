/* eslint-disable @next/next/no-img-element */
import { FC, memo } from 'react'
import styles from '@/components/layouts/store/image-grid/imagegrid.module.sass'
import { useAppSelector } from '@/redux'

interface IImageGridProps {
    width?: string | number
    height?: string | number
    columnCount?: number
    columnGap?: number
    rowGap?: number
    itemBorder?: string
    itemBorderRadius?: string | number
    itemBoxShadow?: string
    images: Array<{
        src: string
        alt?: string
    }>
}

const ImageGrid: FC<IImageGridProps> = ({
    width = '100%',
    height,
    images,
    columnCount = Math.min(3, images.length),
    columnGap = 20,
    rowGap = 20,
    itemBorder,
    itemBorderRadius = 10,
    itemBoxShadow,
}) => {
    const { theme } = useAppSelector(state => state.theme)
    return (
        <div 
            className={styles[`_container__${theme}`]}
            style={{
                width: width,
                height: height,
                columns: columnCount,
                columnGap: columnGap,
            }}
        >
            {images && images.length > 0 && images.map((img, index) => (
                <div 
                    className={styles._image}
                    key={index}
                    style={{
                        border: itemBorder,
                        borderRadius: itemBorderRadius,
                        boxShadow: itemBoxShadow,
                        marginBottom: rowGap,
                    }}
                >
                    <img src={img.src} alt={img.alt || ''} style={{ width: '100%' }}/>
                </div>
            ))}
        </div>
    )
}

export default memo(ImageGrid)