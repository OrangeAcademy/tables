// Styles for Schedule Meeting component
export const styles = {
  grid: { display: 'grid', placeItems: 'center', mb: '2rem', mt: "clamp(10px, 10vh, 5.5rem)" },
  title: { fontWeight: 400, color:'#fef9e7', fontSize: "clamp(1rem, 2.125rem, 7vw)", textAlign: 'center' },
  icon: { color: 'black', width: '32px', height: '32px' },
  button: {
    mt: 'clamp(10px, 1rem, 10vw)',
    padding: "clamp(0.7rem, 0.6400rem + 0.3000vw, 1rem) clamp(1rem, 0.8000rem + 1.0000vw, 2rem)",
    backgroundColor: '#fef9e7',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  btnText: {
    fontSize: 'clamp(1rem, 0.9600rem + 0.2000vw, 1.2rem);',
    fontWeight: 400,
    alignSelf: 'center',
    color: 'black',
    textAlign: 'center'
  },
}