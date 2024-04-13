'use client'
import { FC, memo, useState } from 'react'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked)

  const handleToggle = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <div className='switch-container' onClick={handleToggle}>
      <div className={`switch ${isChecked ? 'on' : 'off'}`}>
        <div className='slider'></div>
      </div>
    </div>
  )
}

export default memo(Switch)