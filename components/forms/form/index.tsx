'use client'
import { FC, useId } from 'react'
import styles from '@/components/forms/form/form.module.sass'
import { IoAddCircle } from 'react-icons/io5'
import SelectGroup, { ISelectGroupOptions } from '@/components/forms/select-group'
import Select, { ISelectOption } from '@/components/forms/select'
import CheckBoxGroup, { ICheckBoxGroupValue } from '@/components/forms/checkbox-group'
import TextField from '@/components/forms/text-field'
import Radio from '@/components/forms/radio'
import RadioGroup, { IRadioGroupValue } from '@/components/forms/radio-group'
import { getColorLevel, mainColor } from '@/variables/variables'

export interface IField {
  label: string
  key: string
  type: 'string' | 'number' | 'price' | 'image' | 'select' | 'range' 
  | 'switch' | 'date' | 'time' | 'month' | 'radio-group' | 'select-group' 
  | 'checkbox-group' | 'image-group'
  placeholder?: string
  defaultValue?: string | number
  selectOptions?: ISelectOption[]
  selectGroupOptions?: ISelectGroupOptions[]
  checkBoxGroupOptions?: ICheckBoxGroupValue[]
  radioGroupOptions?: IRadioGroupValue[]
  required?: boolean
}

interface IFormProps {
  title?: string
  fields: IField[]
}

const Form: FC<IFormProps> = ({
  title,
  fields,
}) => {

  return (
      <div className={styles._container}>
      {fields.map((field, fieldIndex) => {
        switch (field.type) {
          case 'string':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldPlaceholder={field.placeholder}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'text'}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'time':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'time'}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'date':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'date'}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'month':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'month'}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'number':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldPlaceholder={field.placeholder}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'number'}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'price':
            return (
              <div className={styles._item}>
                <TextField 
                  key={fieldIndex}
                  textFieldWidth={'100%'}
                  textFieldLabel={field.label}
                  textFieldPlaceholder={field.placeholder}
                  textFieldDefaultValue={field.defaultValue}
                  textFieldType={'number'}
                  inputMode='decimal'
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'image':
            // return <input key={fieldIndex} type="file" />
            return null
          case 'select':
            if (field.selectOptions)
            return (
              <div className={styles._item}>
                <Select 
                  key={fieldIndex}
                  selectedWidth={'100%'}
                  selectedHeight={45}
                  selectedBorder={`1px solid ${getColorLevel(mainColor, 20)}`}
                  selectedLabel='Bảo hành'
                  options={field.selectOptions} 
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )

          case 'select-group':
            if (field.selectGroupOptions)
            return (
                <div className={styles._item} style={{ gridColumn: '1 / -1' }}>
                   <SelectGroup
                      key={fieldIndex}
                      groupLabel={field.label}
                      groupWidth={'100%'}
                      groupItemColSpacing={10}
                      groupOptions={field.selectGroupOptions}
                  />
                  <span className={styles._error}>Không được để trống</span>
                </div>
            )

          case 'checkbox-group':
            if (field.checkBoxGroupOptions)
            return (
              <div className={styles._item} style={{ gridColumn: '1 / -1' }}>
                <CheckBoxGroup
                  key={fieldIndex}
                  groupLabel={field.label}
                  groupWidth={'100%'}
                  groupOptions={field.checkBoxGroupOptions}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'radio-group':
            if (field.radioGroupOptions)
            return (
              <div className={styles._item} style={{ gridColumn: '1 / -1' }}>
                <RadioGroup
                  key={fieldIndex}
                  groupLabel={field.label}
                  groupWidth={'100%'}
                  groupOptions={field.radioGroupOptions}
                />
                <span className={styles._error}>Không được để trống</span>
              </div>
            )
          case 'range':
            
          case 'switch':
            
            
          default:
            return null
        }
      })}
    </div>
  )
}

export default Form










// const groupOptions: ISelectGroupOptions[] = [
  // {
  //   required: true,
  //   options:[
  //     { key: 'ward', label: 'Chọn xã / phường' },
  //     { key: 'ward', label: 'Phường 1', value: 'Phường 1' },
  //     { key: 'ward', label: 'Phường 2', value: 'Phường 2' },
  //     { key: 'ward', label: 'Phường 3', value: 'Phường 3' },
  //     { key: 'ward', label: 'Phường 4', value: 'Phường 4' },
  //   ],
  // },
  // {
  //   // required: true,
  //   options:[
  //     { key: 'district', label: 'Chọn quận / huyện' },
  //     { key: 'district', label: 'Quận 1', value: 'Quận 1' },
  //     { key: 'district', label: 'Quận 2', value: 'Quận 2' },
  //     { key: 'district', label: 'Quận 3', value: 'Quận 3' },
  //     { key: 'district', label: 'Quận 4', value: 'Quận 4' },
  //   ],
  // },
  // {
  //   // required: true,
  //   options:[
  //     { key: 'province', label: 'Chọn tỉnh / thành phố' },
  //     { key: 'province', label: 'Tỉnh 1', value: 'Tỉnh 1' },
  //     { key: 'province', label: 'Tỉnh 2', value: 'Tỉnh 2' },
  //     { key: 'province', label: 'Tỉnh 3', value: 'Tỉnh 3' },
  //     { key: 'province', label: 'Tỉnh 4', value: 'Tỉnh 4' },
  //   ],
  // },
  // {
  //   // required: true,
  //   options:[
  //     { key: 'country', label: 'Chọn nước / quốc gia' },
  //     { key: 'country', label: 'Nước 1', value: 'Nước 1' },
  //     { key: 'country', label: 'Nước 2', value: 'Nước 2' },
  //     { key: 'country', label: 'Nước 3', value: 'Nước 3' },
  //     { key: 'country', label: 'Nước 4', value: 'Nước 4' },
  //   ],
  // },
//   {
//     // required: true,
//     options:[
//       { key: 'world', label: 'Chọn hành tinh' },
//       { key: 'world', label: 'Hành tinh 1', value: 'Hành tinh 1' },
//       { key: 'world', label: 'Hành tinh 2', value: 'Hành tinh 2' },
//       { key: 'world', label: 'Hành tinh 3', value: 'Hành tinh 3' },
//       { key: 'world', label: 'Hành tinh 4', value: 'Hành tinh 4' },
//     ],
//   },
// ]

{/* <TextField 
        label='Tên sản phẩm'
      /> */}

 // {/* <SelectGroup 
      //   groupOptions={groupOptions}
      //   groupItemPerRow={3}
      //   groupItemRowSpacing={15}
      //   groupItemColSpacing={10}
      //   itemSelectedMinWidth={200}
      //   groupLabel='Địa chỉ'
      //   onChange={options => console.log(options)}
      //   getInitSelectedValues={(value) => console.log(value)}
      // /> */}
      // {/* <CheckBoxGroup
      //   itemCheckBoxMinWidth={120}
      //   groupLabel={'Sở thích'}
      //   groupOptions={[
      //     { key: 'game', name: 'interest', label: 'Chơi game', value: 'Chơi game' },
      //     { key: 'study', name: 'interest', label: 'Đi học', value: 'Đi học' },
      //     { key: 'cream', name: 'interest', label: 'Ăn kem', value: 'Ăn kem' },
      //     { key: 'movie', name: 'interest', label: 'Xem phim', value: 'Xem phim' },
      //     { key: 'gym', name: 'interest', label: 'Tập gym', value: 'Tập gym' },
      //   ]}
      //   onChange={(value) => console.log(value)}
      //   getInitSelectedValues={(value) => console.log(value)}
      // /> */}
      // {/* <RadioGroup 
      //   itemRadioMinWidth={120}
      //   groupLabel={'Sở thích'}
      //   groupOptions={[
      //     { key: 'game', name: 'interest', label: 'Chơi game', value: 'Chơi game' },
      //     { key: 'study', name: 'interest', label: 'Đi học', value: 'Đi học' },
      //     { key: 'cream', name: 'interest', label: 'Ăn kem', value: 'Ăn kem' },
      //     { key: 'movie', name: 'interest', label: 'Xem phim', value: 'Xem phim' },
      //     { key: 'gym', name: 'interest', label: 'Tập gym', value: 'Tập gym' },
      //   ]}
      //   onChange={value => console.log(value)}
      //   getInitSelectedValue={(value) => console.log(value)}
      // /> */}