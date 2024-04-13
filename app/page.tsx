'use client'
import { FC } from 'react'
import styles from '@/app/page.module.sass'
import Advertisement from '@/components/pages/store/home/Advertisement'
import { useAppSelector } from '@/redux'

const Home: FC = () => {
  const { theme } = useAppSelector(state => state.theme)
  return (
    <main className={styles[`_container__${theme}`]}>
      <Advertisement />
    </main>
  )
}

export default Home