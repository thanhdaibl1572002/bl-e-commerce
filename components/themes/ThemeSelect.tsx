import { FC } from 'react'
import styles from '@/components/themes/themeselect.module.sass'
import Select, { SelectProps } from '@/components/forms/Select'
import { blackColor, getColorLevel, themeColors, whiteColor } from '@/variables/variables'

interface IThemeSelect extends SelectProps {
    theme: 'blue' | 'violet' | 'green'
}

const ThemeSelect: FC<IThemeSelect> = ({
    theme,
    options,
    width,
    height,
    background,
    borderRadius,
    padding,
    selectedBoxShadow,
    selectedBorder,
    selectedTextSize,
    selectedTextColor,
    selectedTextWeight,
    selectedIconSize,
    selectedArrowSize,
    itemHeight,
    itemTextSize,
    itemTextWeight,
    itemIconSize,
    listMaxHeight,
    listBackground,
    listBorder,
    onChange
}) => {
    return (
        <Select 
            className={styles[`_container__${theme}`]}
            options={options}
            width={width}
            height={height}
            background={background}
            borderRadius={borderRadius}
            padding={padding}
            selectedBackground={whiteColor}
            selectedBoxShadow={selectedBoxShadow}
            selectedBorder={selectedBorder}
            selectedTextSize={selectedTextSize}
            selectedTextColor={selectedTextColor}
            selectedTextWeight={selectedTextWeight}
            selectedIconSize={selectedIconSize}
            selectedIconColor={themeColors[theme]}
            selectedArrowSize={selectedArrowSize}
            selectedArrowColor={themeColors[theme]}
            itemHeight={itemHeight}
            itemBackground={whiteColor}
            itemTextSize={itemTextSize}
            itemTextColor={blackColor}
            itemTextWeight={itemTextWeight}
            itemIconSize={itemIconSize}
            itemIconColor={themeColors[theme]}
            listMaxHeight={listMaxHeight}
            listBackground={listBackground}
            listBorder={listBorder}
            listBoxShadow={`0 0 3px 0 ${getColorLevel(blackColor, 8)}`}
            onChange={onChange}
        />
    )
}

export default ThemeSelect