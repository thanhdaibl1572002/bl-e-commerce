'use client'
import { FC, useState } from 'react'
import styles from '@/app/detail/[id]/detailcenter.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import DetailCenterDescription from '@/app/detail/[id]/DetailCenterDescription'
import DetailCenterSpecification from '@/app/detail/[id]/DetailCenterSpecification'
import DetailCenterReview from '@/app/detail/[id]/DetailCenterReview'
import ThemeButton from '@/components/themes/ThemeButton'
import Button from '@/components/forms/Button'
import { getColorLevel, themeColors } from '@/variables/variables'

interface IDetailCenterProps {
  
}

const DetailCenter: FC<IDetailCenterProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()

  const [tab, setTab] = useState<'description' | 'specification' | 'review'>('description')

  const renderTabContent = () => {
    switch (tab) {
      case 'description':
        return <DetailCenterDescription />
      case 'specification':
        return <DetailCenterSpecification />
      case 'review':
        return <DetailCenterReview />
      default:
        return null
    }
  }

  return (
    <div className={styles[`_container__${theme}`]}>
    <div className={styles._tab__header}>
      <ThemeButton
        theme={theme}
        width={'fit-content'}
        height={45}
        textSize={15}
        text={'MÔ TẢ SẢN PHẨM'}
        animateDuration={600}
        boxShadow={`0 1px 1.5px 0 ${getColorLevel(themeColors[theme], 30)}`}
      />
    </div>
    <div className={styles._tab__body}>
      {renderTabContent()}
    </div>
    </div>
  )
}

export default DetailCenter