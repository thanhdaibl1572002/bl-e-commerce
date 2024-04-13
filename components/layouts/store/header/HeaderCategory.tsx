import { FC } from 'react'
import styles from '@/components/layouts/store/header/headerbottom.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'

const HeaderCategory: FC = () => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>

        </div>
    )
}

export default HeaderCategory