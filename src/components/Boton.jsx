const Boton = (params) => {
  const {valueNumber, clase, handleClick} = params
  
  return <button className={clase} onClick={handleClick}>{valueNumber}</button>
}

export default Boton