type Unit = 'px' | 'rem' | 'em' | '%'
type Space = '' | ' '

export type CssUnit = `${number}${Unit}`
export type HexCode = `#${string}`
export type RGBA = `rgba(${number},${Space}${number},${Space}${number},${Space}${number})`
export type RGB = `rgb(${number},${Space}${number},${Space}${number})`
export type Color = HexCode | RGBA | RGB
