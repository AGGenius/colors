function BoxColor ({color, value}) {
  return (
    <div className={["box", color, color === value ? "full" : ""].join(' ')}>
      <p>{color === value ? `Yes, I'm color ${value ? value : ""}` : `Im not a color ${value ? value : ""}`}</p>
    </div>
  )
}
export default BoxColor;  
