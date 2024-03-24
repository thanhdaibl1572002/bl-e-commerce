'use client'
import { FC, memo, ButtonHTMLAttributes, MouseEvent, ReactNode, ReactElement, useState, useCallback, useRef, useEffect } from 'react'
import styles from '@/components/forms/button/button.module.sass'
import { AiOutlineCheck, AiOutlineClose, AiOutlineLoading } from 'react-icons/ai'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
    icon?: ReactNode | ReactElement
    iconSize?: number
    iconColor?: string
    iconPosition?: 'left' | 'right'
    width?: string | number
    height?: string | number
    textSize?: number
    textColor?: string
    textWeight?: number
    border?: string
    borderRadius?: string
    boxShadow?: string
    loadingText?: string
    loadingSuccessText?: string
    loadingFailedText?: string
    background?: string
    bubbleColor?: string
    animateDuration?: number
    status?: 'normal' | 'success' | 'failed' | 'loading'
    className?: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = ({ 
    text, 
    icon, 
    iconSize, 
    iconColor,
    iconPosition = 'left', 
    width, 
    height, 
    textSize, 
    textColor, 
    textWeight, 
    border, 
    borderRadius, 
    boxShadow, 
    loadingText, 
    loadingSuccessText, 
    loadingFailedText, 
    background, 
    bubbleColor, 
    animateDuration = 500,
    status, 
    className,
    onClick, 
    ...rest 
}) => {

    const [bubbles, setBubbles] = useState<{ x: number, y: number }[]>([])

    const buttonRef = useRef<HTMLButtonElement>(null)
    const bubbleRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (bubbleRef.current) {
            bubbleRef.current.style.setProperty('--animate-duration', `${animateDuration}ms`)
        }
    }, [animateDuration, bubbles])

    const handleClick = useCallback(
        async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
            const rect = event.currentTarget.getBoundingClientRect()
            const x: number = event.clientX - rect.left
            const y: number = event.clientY - rect.top
            setBubbles([...bubbles, { x, y }])
            setTimeout(() => setBubbles(bubbles.slice(1)), animateDuration)
            onClick && onClick(event)
        }, 
        [onClick, bubbles, animateDuration]
    )

    const iconStyles = {
        fontSize: iconSize ?? undefined,
        color: iconColor ?? undefined
    }
    const textStyles = {
        fontSize: textSize ?? undefined,
        fontWeight: textWeight ?? undefined,
        color: textColor ?? undefined
    }

    const buttonClassName = `${styles._container} ${className || ''}`.trim()

    return (
        <button
            className={buttonClassName}
            style={{
                width: width ?? undefined,
                height: height ?? undefined,
                border: border ?? undefined,
                borderRadius: borderRadius ?? undefined,
                background: background ?? undefined,
                boxShadow: boxShadow ?? undefined,
                display: 'flex',
                flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse',
            }}
            onClick={handleClick}
            ref={buttonRef}
            {...rest}
        >
            {
                status && status !== 'normal' ? (
                    <span className={styles._button__loading} style={textStyles}>
                        {status === 'loading' && 
                            <>
                                <AiOutlineLoading className={styles._button__loading__icon} style={iconStyles} />
                                {loadingText ?? 'Đang tải...'}
                            </>
                        } 
                        {status === 'success' && 
                            <>
                                <AiOutlineCheck className={styles._button__success__icon} style={iconStyles} />
                                {loadingSuccessText ?? 'Thành công!'}
                            </>
                        }
                        {status === 'failed' && 
                            <>
                                <AiOutlineClose className={styles._button__failed__icon} style={iconStyles} />
                                {loadingFailedText ?? 'Thất bại!'}
                            </>
                        }
                    </span>
                ) : (
                    <>
                        {icon &&
                            <div className={styles._button__icon} style={iconStyles}>
                                {icon}
                            </div>
                        }
                        {text &&
                            <div className={styles._button__text} style={textStyles}>
                                {text}
                            </div>
                        }
                        {bubbles.map((bubble, index) => (
                            <span
                                key={index}
                                ref={bubbleRef}
                                className={styles._button__bubble}
                                style={{
                                    width: buttonRef.current ? buttonRef.current?.clientWidth * 2.5 : undefined,
                                    height: buttonRef.current ? buttonRef.current?.clientWidth * 2.5 : undefined,
                                    left: bubble.x,
                                    top: bubble.y,
                                    background: bubbleColor ?? 'rgb(255, 255, 255)',
                                }}
                            >
                            </span>
                        ))}
                    </>
                )
            }

        </button>
    )
}

export default memo(Button)
