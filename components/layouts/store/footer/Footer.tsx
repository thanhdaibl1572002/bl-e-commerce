import { FC } from 'react'
import styles from '@/components/layouts/store/footer/footer.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'

interface IFooterProps {

}

const Footer: FC<IFooterProps> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
  return (
    <footer className={styles[`_container__${theme}`]}>

    </footer>
  )
}

export default Footer