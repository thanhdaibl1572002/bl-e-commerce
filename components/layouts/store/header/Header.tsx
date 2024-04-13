import { FC } from 'react'
import styles from '@/components/layouts/store/header/header.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import HeaderTop from '@/components/layouts/store/header/HeaderTop'
import HeaderBottom from '@/components/layouts/store/header/HeaderBottom'

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    return (
        <header className={styles[`_container__${theme}`]}>
            <HeaderTop />
            {/* <HeaderBottom /> */}
        </header>
    )
}

export default Header