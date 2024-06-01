function Display_color({ hex, name, rgb }) {
  const style = { backgroundColor: hex };
  return (
    <div className="top">
      <div className="colorbox" style={style}></div>
      <h3>{hex}</h3>
      <h4>{name}</h4>
      <h6>{rgb}</h6>
    </div>
  );
}
export default Display_color;
