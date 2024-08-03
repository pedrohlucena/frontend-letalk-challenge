const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8F99A6',

  white1: '#F6F6F6',

  gray1: '#D4D4D4',
  gray2: '#737373',
  gray3: '#878787',

  orange1: '#F3A126',

  red: '#FF0000',
} as const

const shadows = {
  button: `0px 0.4rem 0.4rem 0px rgba(135, 135, 135, 0.25)`,
} as const

const fontFamilies = {
  openSans: 'Open Sans',
}

const fontWeights = {
  light: '300',
  regular: '400',
  bold: '700',
} as const

const fontSizes = {
  sm: '1.4rem',
  lg: '1.6rem',
  xl: '2rem',
  '5xl': '5rem',
} as const

const fontPresets = {
  title: `${fontWeights.light} ${fontSizes['5xl']} ${fontFamilies.openSans}`,
  instruction: `${fontWeights.bold} ${fontSizes.xl} ${fontFamilies.openSans}`,
  indicator: `${fontWeights.bold} ${fontSizes.sm} ${fontFamilies.openSans}`,
  buttonText: `${fontWeights.bold} ${fontSizes.lg} ${fontFamilies.openSans}`,
  helperText: `${fontWeights.regular} ${fontSizes.sm} ${fontFamilies.openSans}`,
} as const

const fonts = {
  families: fontFamilies,
  weights: fontWeights,
  sizes: fontSizes,
  presets: fontPresets,
}

export const defaultTheme = {
  colors,
  fonts,
  shadows,
}
