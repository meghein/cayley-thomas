import { majorScale, minorScale } from 'evergreen-ui'

/*
 * majorScale(1) => 8
 * majorScale(2) => 16
 * majorScale(3) => 24
 * majorScale(4) => 32
 * majorScale(5) => 40
 * --
 * minorScale(1) => 4
 * minorScale(3) => 12
 * minorScale(5) => 20
 * minorScale(7) => 28
 * minorScale(9) => 36
 */

export const majorRemScale = (value) => {
  return `${majorScale(value) / 8}rem`
}

export const minorRemScale = (value) => {
  return `${minorScale(value) / 8}rem`
}

export const majorEmScale = (value, baseTextSize = 8) => {
  return `${majorScale(value) / baseTextSize}em`
}

export const minorEmScale = (value, baseTextSize = 8) => {
  return `${minorScale(value) / baseTextSize}em`
}
