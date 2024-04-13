import { FC } from 'react'
import styles from '@/components/layouts/store/header/headerbottom.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import Logo from '@/components/layouts/store/Logo'
import Link from 'next/link'
import { PiGearThin, PiHandbagSimpleThin, PiHeartStraightThin } from 'react-icons/pi'
import { IoChevronDownOutline } from 'react-icons/io5'
import dynamic from 'next/dynamic'

const HeaderCart = dynamic(() => import('@/components/layouts/store/header/HeaderCart'), { ssr: false })
const HeaderSetting = dynamic(() => import('@/components/layouts/store/header/HeaderSetting'), { ssr: false })

interface IHeaderBottomProps {

}

const HeaderBottom: FC<IHeaderBottomProps> = ({

}) => {

    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <Logo />
            <ul className={styles._menu}>
                <li>
                    <Link href={'#'}>Trang chủ</Link>
                </li>
                <li>
                    <Link href={'#'}>Cửa hàng</Link>
                </li>
                <li>
                    <Link href={'#'}>
                        Danh mục
                        <IoChevronDownOutline />
                    </Link>
                </li>
                <li>
                    <Link href={'#'}>Liên hệ</Link>
                </li>
                <li>
                    <Link href={'#'}>CV <label>Tải ngay</label></Link>
                </li>
            </ul>
            <ul className={styles._navigation}>
                <li>
                    <Link href={'#'}>
                        <PiHeartStraightThin />
                        <span>+9</span>
                    </Link>
                </li>
                <li>
                    <PiHandbagSimpleThin />
                    <span>+9</span>
                    <HeaderCart />
                </li>
                <li>
                    <PiGearThin />
                    <HeaderSetting />
                </li>
            </ul>
        </div>
    )
}

export default HeaderBottom