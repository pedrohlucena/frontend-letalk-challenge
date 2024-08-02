const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8F99A6',

  white1: '#F6F6F6',

  gray1: '#D4D4D4',
  gray2: '#737373',
} as const

const fontFamilies = {
  openSans: 'Open Sans',
}

const fontWeights = {
  light: '300',
  bold: '700',
}

const fontSizes = {
  xl: '2rem',
  '5xl': '5rem',
}

const fontPresets = {
  title: `${fontWeights.light} ${fontSizes['5xl']} ${fontFamilies.openSans}`,
  instruction: `${fontWeights.bold} ${fontSizes.xl} ${fontFamilies.openSans}`,
}

const fonts = {
  families: fontFamilies,
  weights: fontWeights,
  sizes: fontSizes,
  presets: fontPresets,
}

export const defaultTheme = {
  colors,
  fonts,
}
