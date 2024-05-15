'use client'
import { FC } from 'react'
import styles from '@/app/detail/[id]/detailcenter.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import DetailCenterDescription from '@/app/detail/[id]/DetailCenterDescription'
import DetailCenterSpecification from '@/app/detail/[id]/DetailCenterSpecification'
import DetailCenterReview from '@/app/detail/[id]/DetailCenterReview'

interface IDetailCenterProps {
  
}

const DetailCenter: FC<IDetailCenterProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  return (
    <div className={styles[`_container__${theme}`]}>
     <DetailCenterDescription />
     <DetailCenterSpecification />
     <DetailCenterReview />
    </div>
  )
}

export default DetailCenter