import { FC, useMemo } from 'react'
import styles from '@/components/layouts/store/header/headertop.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from '@/languages'
import Link from 'next/link'
import ThemeSelect from '@/components/themes/ThemeSelect'
import Flag from 'react-flagkit'

interface IHeaderTopProps {

}

const HeaderTop: FC<IHeaderTopProps> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t, i18n } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <ul>
                <li>
                    <Link href={'#'}>Tin tức</Link>
                </li>
                <li>
                    <Link href={'#'}>Khuyến mãi</Link>
                </li>
                <li>
                    
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={'#'}>Đăng ký</Link>
                </li>
                <li>
                    <Link href={'#'}>Đăng nhập</Link>
                </li>
                <li>
                    <ThemeSelect 
                        theme={theme}
                        selectedTextSize={13.5}
                        selectedBorder='none'
                        itemTextSize={13.5}
                        listBorder='none'
                        options={useMemo(() => [
                            { label: 'Tiếng Việt', value: 'vi', icon: <Flag country='VN' size={20} /> },
                            { label: 'Tiếng Anh', value: 'en', icon: <Flag country='US' size={20} /> },
                            { label: 'Tiếng Trung', value: 'zh', icon: <Flag country='CN' size={20} /> },
                        ], [])}
                        onChange={value => i18n.changeLanguage(value)}
                    />
                </li>
                <li>
                    <ThemeSelect 
                        theme={theme}
                        selectedTextSize={13.5}
                        selectedBorder='none'
                        itemTextSize={13.5}
                        listBorder='none'
                        width={100}
                        options={useMemo(() => [
                            { label: 'VND', value: 'vnd' },
                            { label: 'USD', value: 'usd' },
                            { label: 'CNY', value: 'cny' },
                        ], [])}
                        onChange={value => i18n.changeLanguage(value)}
                    />
                </li>
            </ul>
        </div>
    )
}

export default HeaderTop