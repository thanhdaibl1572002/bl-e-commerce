export const mainFontFamily = 'Inter'
export const logoFontFamily = 'Black Ops One'

export const whiteColor = 'rgb(255, 255, 255)'
export const blackColor = 'rgb(3, 8, 22)'
export const violetColor = 'rgb(119, 44, 232)'
export const yellowColor = 'rgb(255, 242, 0)'
export const redColor = 'rgb(255, 56, 56)'
export const greenColor = 'rgb(59, 207, 166)'
export const blueColor = 'rgb(39, 142, 255)'

export const whiteGradientColor = 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)'
export const blackGradientColor = 'linear-gradient(109.6deg, rgba(20,30,48,1) 11.2%, rgba(36,59,85,1) 91.1%)'
export const violetGradientColor = 'linear-gradient( 109.6deg,  rgba(119,44,232,0.68) 11.5%, rgba(119,44,232,1) 91.2% )'
export const yellowGradientColor = 'linear-gradient(108.5deg, rgba(255,185,0,1) 21.1%, rgba(255,237,0,1) 80.4%)'
export const redGradientColor = 'linear-gradient(111.3deg, rgba(252,56,56,1) 11.7%, rgba(237,13,81,1) 81.7%)'
export const greenGradientColor = 'linear-gradient(109.6deg, rgba(102,203,149,1) 11.2%, rgba(39,210,175,1) 98.7%)'
export const blueGradientColor = 'linear-gradient(249.1deg, rgba(11,206,250,1) -6.5%, rgba(65,46,248,1) 100.2%)'

export const themeColors = {
    blue: blueColor,
    violet: violetColor,
    green: greenColor
}

export const themeGradientColors = {
    blue: blueGradientColor,
    violet: violetGradientColor,
    green: greenGradientColor
}

export const getColorLevel = (color: string, level: number = 100): string => {
    let red: number
    let green: number
    let blue: number

    if (color.startsWith("#")) {
        if (color.length === 4) {
            color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
        }
        const hexValue = parseInt(color.slice(1), 16)
        red = (hexValue >> 16) & 255
        green = (hexValue >> 8) & 255
        blue = hexValue & 255
    } else {
        const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)

        if (match) {
            [, red, green, blue] = match.map(Number)
        } else {
            throw new Error("Mã màu không đúng định dạng.")
        }
    }

    if (level < 0 || level > 100) {
        throw new Error("Mức độ màu phải nằm trong khoảng từ 0 đến 100")
    }

    const alpha: number = level / 100
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}