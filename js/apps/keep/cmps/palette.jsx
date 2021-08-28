export function Palette({ onChangeStyle }) {
  const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6']
  return (
    <section className="pallate-container flex">
      {colors.map(color => (
        <article key={color} onClick={() => onChangeStyle({ 'backgroundColor': color })} style={{ backgroundColor: color }} className="palette-option"></article>
      ))}
    </section>
  )
}