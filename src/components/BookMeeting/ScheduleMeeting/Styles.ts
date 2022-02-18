// Styles
const styles = {
  grid: { display: 'grid', placeItems: 'center', mb: '2rem', mt: "clamp(10px, 10vh, 5.5rem)" },
  title: { fontWeight: 600, color:'#fef9e7', fontSize: "clamp(1rem, 2.125rem, 4vw)" },
  icon: { color: 'black', width: '32px', height: '32px' },
  button: {
    mt: '1.5rem',
    backgroundColor: '#fef9e7',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  btnText: {
    fontSize: 'clamp(5px, 1rem, 2.135rem)',
    fontWeight: 400,
    lineHeight: '2rem',
    color: 'black',
  },
}

export default styles;