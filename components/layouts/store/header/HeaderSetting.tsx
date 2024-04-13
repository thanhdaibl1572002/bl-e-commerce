import { FC } from 'react'
import styles from '@/components/layouts/store/header/headersetting.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import Link from 'next/link'
import { PiListChecksLight, PiNotebookLight, PiSignOutLight, PiUserCircleGearLight } from 'react-icons/pi'

const HeaderSetting: FC = () => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul className={styles._setting}>
                <li><Link href={'#'}><PiUserCircleGearLight />Tài Khoản</Link></li>
                <li><Link href={'#'}><PiNotebookLight />Đơn hàng</Link></li>
                <li><Link href={'#'}><PiListChecksLight />Lịch sử mua hàng</Link></li>
                <li><Link href={'#'}><PiSignOutLight />Đăng xuất</Link></li>
            </ul>
        </div>
    )
}

export default HeaderSetting