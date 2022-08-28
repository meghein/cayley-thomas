const COLOR = {
  bone: '#A5A58D',
  background: '#DDBEA9',
  main: '#fbf6ec',
  // bone: '#DEDBCA',
  eggShell: '#F4F1DE', // primary
  lightPink: '#EFD4BF',
  midPink: '#EAB69F',
  terraCotta: '#E07A5F', // primary
  roseTaupe: '#8F5D5D',
  deepTaupe: '#7B565D',
  eggplant: '#664F5C',
  purple: '#3D405B', // primary, body font color
  spaceCadet: '#313349',
  blackCoral: '#4E5D6B',
  darkTeal: '#5F797B',
  midTeal: '#70968B',
  lightTeal: '#81B29A', // primary
  lightSage: '#9EB998',
  sage: '#BABF95',
  yellowSage: '#D6C692',
  yellow: '#F2CC8F', // primary
  lightYellow: '#F3D199',
  // cream: '#F4D5A2',

  disabled: '#C1C4D6' // gray500
}

const FONT = {
  bodyFont: '\'Nunito Sans\', sans-serif',
  // bodyFontDots: '\'Raleway Dots\', cursive',
  // displayFont: '\'Lato\', sans-serif',
  // capitalFont: '\'Montserrat\', sans-serif',
  baseFontSize: 'calc(10px + 2vmin)'
}

const LAYOUT = {
  borderSize: '2px solid'
}

export const theme = {
  ...COLOR,
  ...FONT,
  ...LAYOUT

}
