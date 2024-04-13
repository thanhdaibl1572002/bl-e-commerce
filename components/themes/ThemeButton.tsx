import { FC, memo } from 'react'
import Button, { IButtonProps } from '@/components/forms/Button'
import { themeGradientColors, whiteColor } from '@/variables/variables'

interface IThemeButtonProps extends IButtonProps {
    theme: 'blue' | 'violet' | 'green'
}

const ThemeButton: FC<IThemeButtonProps> = ({
    theme,
    width,
    height,
    padding,
    gap,
    text,
    textSize,
    textWeight,
    icon,
    iconSize,
    iconColor,
    iconPosition,
    border,
    borderRadius,
    boxShadow,
    isLoading,
    animateDuration,
    link,
    onClick,
}) => {
    return (
        <Button
            width={width}
            height={height}
            padding={padding}
            gap={gap}
            text={text}
            textSize={textSize}
            textColor={whiteColor}
            textWeight={textWeight}
            icon={icon}
            iconSize={iconSize}
            iconColor={iconColor}
            iconPosition={iconPosition}
            border={border}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            isLoading={isLoading}
            background={themeGradientColors[theme]}
            bubbleColor={whiteColor}
            animateDuration={animateDuration}
            link={link}
            onClick={onClick}
        />
    )
}

export default memo(ThemeButton)