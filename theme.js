import theme from 'mdx-deck/themes'

export default {
  ...theme,
  font: 'Roboto Slab, Serif',
  colors: {
    ...theme.colors,
    text: 'white',
    background: 'black',
    heading: 'white',
    blockquote: '#ececec',
    link: 'lightblue'
  },
  h2: {
    ...theme.h2,
    textAlign: 'left',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '4px',
    backgroundColor: '#ff0037',
    fontFamily: 'Dosis, Serif',
  },
  h3: {
    ...theme.h3,
    textAlign: 'left',
    color: 'white',
  },
  blockquote: {
    color: 'white',
    fontSize: '1.5rem',
  },
  p: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  ul: {
    textAlign: 'left',
    padding: '0rem',
    width: '100%',
  },
  li: {
    fontSize: '1.5rem',
    textAlign: 'left',
    color: '#ff0037'
  },
  span: {
    color: '#ffffff'
  }
}
