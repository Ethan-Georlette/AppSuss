export function Palette({ noteId, onChangeBgColor }) {
  const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6']
  return (
    <section className="palette-container">
      {colors.map(color => (
        <article key={color} onClick={() => onChangeBgColor(noteId, { 'backgroundColor': color })} style={{ backgroundColor: color }} className="palette-option"></article>
      ))}
    </section>
  )
}