import { FC } from 'react'
import styles from '@/components/pages/store/home/advertisement.module.sass'
import { useAppSelector } from '@/redux'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import ThemeButton from '@/components/themes/ThemeButton'
import { PiHandbag } from 'react-icons/pi'

interface IAdvertisementProps {

}

const Advertisement: FC<IAdvertisementProps> = ({

}) => {
    const { theme } = useAppSelector(state => state.theme)
    const { t } = useTranslation()
    return (
        <div className={styles[`_container__${theme}`]}>
            <div className={styles._left}>
                <Image src={'/images/a-1.png'} alt='' width={180} height={320} />
                <div className={styles._description}>
                    <h3><span>Smart</span>Watch</h3>
                    <strong>-50%</strong>
                    <p>Chỉ từ 2500K</p>
                    <ThemeButton
                        theme={theme}
                        width={120}
                        height={40}
                        textSize={15}
                        text='Mua Ngay'
                        icon={<PiHandbag />}
                        iconSize={22}
                    />
                    <label>Áp dụng từ ngày 01/12/2023</label>
                </div>
            </div>
            <div className={styles._right}>
                <div className={styles._item}>
                    <Image src={'/images/a-4.png'} alt='' width={260} height={180} />
                    <div className={styles._description}>
                        <h3>Laptop</h3>
                        <strong>-40%</strong>
                        <p>Cấu hình mạnh mẽ - chiến mọi loại game</p>
                        <ThemeButton
                            theme={theme}
                            width={120}
                            height={40}
                            textSize={15}
                            text='Mua Ngay'
                            icon={<PiHandbag />}
                            iconSize={22}
                        />
                    </div>
                </div>
                <div className={styles._item}>
                    <Image src={'/images/a-2.png'} alt='' width={160} height={200} />
                    <div className={styles._description}>
                        <h3><span>Smart</span>Phone</h3>
                        <strong>-20%</strong>
                        <p>Chỉ từ 15000k</p>
                        <ThemeButton
                            theme={theme}
                            width={120}
                            height={40}
                            textSize={15}
                            text='Mua Ngay'
                            icon={<PiHandbag />}
                            iconSize={22}
                        />
                    </div>
                </div>
                <div className={styles._item}>
                    <Image src={'/images/a-3.png'} alt='' width={140} height={200} />
                    <div className={styles._description}>
                        <h3>Accessories</h3>
                        <strong>-25%</strong>
                        <p>Phụ kiện chất lượng - giá rẻ</p>
                        <ThemeButton
                            theme={theme}
                            width={120}
                            height={40}
                            textSize={15}
                            text='Mua Ngay'
                            icon={<PiHandbag />}
                            iconSize={22}
                        />
                    </div>
                </div>
                <div className={styles._item}>
                    <Image src={'/images/a-5.png'} alt='' width={150} height={200} />
                    <div className={styles._description}>
                        <h3>Speaker</h3>
                        <strong>-30%</strong>
                        <p>Chất lượng âm thanh cực cao - cho những trải nghiệm âm nhạc tuyệt vời</p>
                        <ThemeButton
                            theme={theme}
                            width={120}
                            height={40}
                            textSize={15}
                            text='Mua Ngay'
                            icon={<PiHandbag />}
                            iconSize={22}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertisement