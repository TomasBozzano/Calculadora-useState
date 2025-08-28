export const Boton = ({valueNumber, clase, handleClick, onChange}) => {

  return (<button className={clase} 
                  onClick={handleClick}
                  onChange={onChange}>
            {valueNumber}
          </button>)
}

export default Boton