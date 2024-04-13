'use client'
import { FC } from 'react'
import styles from '@/app/signin/signin.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'

interface ISignInProps {
  
}

const SignIn: FC<ISignInProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)
  const { currency } = useAppSelector(state => state.currency)
  const { t } = useTranslation()
  
  return (
    <div className={styles[`_container__${theme}`]}>

    </div>
  )
}

export default SignIn