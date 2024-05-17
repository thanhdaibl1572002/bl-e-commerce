'use client'
import { FC } from 'react'
import styles from '@/app/detail/[id]/detailcenterdescription.module.sass'
import { useAppSelector } from '@/redux'
import ImageGrid from '@/components/layouts/store/image-grid/ImageGrid'

interface IDetailCenterDescriptionProps {

}

const sampleImages1 = [
  { src: 'https://www.technopat.net/wp-content/uploads/2021/07/galaxy-s22-ultra-olympus-markali-200-mp-kamera-ile-gelebilir-640x360.jpeg', alt: '' },
  { src: 'https://i.12punto.com.tr/Archive/2024/2/2/19609/kapak_152937.jpg', alt: '' },
  { src: 'https://i.wfcdn.de/teaser/660/47211.jpg', alt: '' },
]

const sampleImages2 = [
  { src: 'https://th.bing.com/th/id/R.e235cb047bd0ecd905cd18dff99a81f5?rik=Pen1iRbAvyeTig&pid=ImgRaw&r=0', alt: '' },
  { src: 'https://th.bing.com/th/id/OIP.zEK5TTnTnG02qBfJkPmfmwHaE-?w=1127&h=757&rs=1&pid=ImgDetMain', alt: '' },
]

const sampleImages3 = [
  { src: 'https://th.bing.com/th/id/R.2c2cbf27dace1509b824995cc0b28a3c?rik=yFDhl2aUXDsIXA&pid=ImgRaw&r=0', alt: '' },
  { src: 'https://webnews.bg/uploads/images/65/8765/538765/768x432.jpg?_=1626098072', alt: '' },
]

const DetailCenterDescription: FC<IDetailCenterDescriptionProps> = ({

}) => {

  const { theme } = useAppSelector(state => state.theme)

  return (
    <div className={styles[`_container__${theme}`]}>
      <strong>Samsung Galaxy S22 Ultra: Siêu phẩm công nghệ, đỉnh cao trải nghiệm</strong>
      <p>
        Samsung Galaxy S22 Ultra, siêu phẩm mới nhất của Samsung, là minh chứng cho sự đột phá về công nghệ và thiết kế. Với những nâng cấp đáng chú ý, S22 Ultra hứa hẹn sẽ mang đến trải nghiệm đỉnh cao cho người dùng, từ thiết kế sang trọng đến hiệu năng mạnh mẽ, cùng khả năng chụp ảnh chuyên nghiệp.
      </p>
      <ImageGrid images={sampleImages1} />
      
      <strong>Thiết kế đẳng cấp, sang trọng</strong>
      <p>
        S22 Ultra sở hữu thiết kế tối giản nhưng không kém phần tinh tế, với khung viền kim loại chắc chắn, mặt lưng kính cường lực bóng bẩy và màn hình cong tràn viền vô cực.
        Bút S Pen được tích hợp hoàn hảo, mang đến khả năng thao tác đa dạng và linh hoạt, từ ghi chú, vẽ tranh cho đến điều khiển thiết bị từ xa.
      </p>
      <ImageGrid images={sampleImages2} />
      
      <strong>Hiệu năng mạnh mẽ, mượt mà</strong>
      <p>
        S22 Ultra được trang bị chip xử lý Snapdragon 8 Gen 1 mạnh mẽ nhất hiện nay, đảm bảo khả năng xử lý mọi tác vụ một cách mượt mà, nhanh chóng.
        Dung lượng RAM và ROM lớn, cho phép người dùng đa nhiệm, lưu trữ dữ liệu thoải mái mà không lo giật lag.
      </p>
      <ImageGrid images={sampleImages3} />

      <strong>Kết luận</strong>
      <p>Samsung Galaxy S22 Ultra là một trong những chiếc smartphone Android tốt nhất hiện nay, mang đến cho người dùng trải nghiệm đỉnh cao về mọi mặt. Với thiết kế sang trọng, hiệu năng mạnh mẽ, khả năng chụp ảnh chuyên nghiệp và trải nghiệm giải trí tuyệt vời, S22 Ultra xứng đáng là lựa chọn hàng đầu cho những người yêu thích công nghệ và muốn sở hữu một chiếc smartphone hoàn hảo.</p>
    </div>
  )
}

export default DetailCenterDescription