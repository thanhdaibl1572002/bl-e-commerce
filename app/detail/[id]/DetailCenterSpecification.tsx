'use client'
import { FC } from 'react'
import styles from '@/app/detail/[id]/detailcenterspecification.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'

interface IDetailCenterSpecificationProps {
  
}

const DetailCenterSpecification: FC<IDetailCenterSpecificationProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  return (
    <div className={styles[`_container__${theme}`]}>
     
    </div>
  )
}

export default DetailCenterSpecification