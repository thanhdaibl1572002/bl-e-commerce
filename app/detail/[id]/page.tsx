'use client'
import { FC } from 'react'
import styles from '@/app/detail/[id]/detail.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import DetailTop from '@/app/detail/[id]/DetailTop'
import DetailCenter from '@/app/detail/[id]/DetailCenter'
import DetailBottom from '@/app/detail/[id]/DetailBottom'

interface IDetailProps {
  
}

const Detail: FC<IDetailProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  return (
    <div className={styles[`_container__${theme}`]}>
      <DetailTop />
      <DetailCenter />
      <DetailBottom />
    </div>
  )
}

export default Detail