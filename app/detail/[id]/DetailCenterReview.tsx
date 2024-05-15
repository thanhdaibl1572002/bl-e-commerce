'use client'
import { FC } from 'react'
import styles from '@/app/detail/[id]/detailcenterreview.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'

interface IDetailCenterReviewProps {
  
}

const DetailCenterReview: FC<IDetailCenterReviewProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  return (
    <div className={styles[`_container__${theme}`]}>
     
    </div>
  )
}

export default DetailCenterReview