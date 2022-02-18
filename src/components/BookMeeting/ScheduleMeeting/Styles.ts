// Styles
const styles = {
  grid: { display: 'grid', placeItems: 'center', mb: '2rem', mt: "clamp(10px, 10vh, 5.5rem)" },
  title: { fontWeight: 600, color:'#fef9e7', fontSize: "clamp(15px, 28px, 2.125rem)" },
  icon: { color: 'black', width: '32px', height: '32px' },
  button: {
    mt: '1.5rem',
    backgroundColor: '#fef9e7',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  btnText: {
    fontSize: 'clamp(12px, 1rem, 1.2rem)',
    fontWeight: 400,
    lineHeight: '2rem',
    color: 'black',
  },
}

export default styles;