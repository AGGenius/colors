function BoxColor ({color, value}) {
  return (
    <div className={["box", color, color === value ? "full" : ""].join(' ')}>
      <p>{color === value ? `Yes, I'm a color ${value ? value : ""} box!` : `Im not a color ${value ? value : ""} box!`}</p>
    </div>
  )
}
export default BoxColor;  
