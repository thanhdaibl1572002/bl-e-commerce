import { FC } from 'react'
import styles from '@/components/layouts/store/logo.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import { PiDevicesThin } from 'react-icons/pi'
import Link from 'next/link'

interface ILogoProps {

}

const Logo: FC<ILogoProps> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
  return (
    <Link href={'#'} className={styles[`_container__${theme}`]}>
      <h1>D<PiDevicesThin />IBL</h1>
    </Link>
  )
}

export default Logo