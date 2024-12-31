//CSS
import './Button.css'

import PropTypes from 'prop-types';

function Button(props){

    function pressButton(){ //altra sintassi --> let pressButton = (id) = () => { props.callback() }
        props.callback()
    }

    return(
        <div onClick={pressButton} style={ //quando si richiama una funzione di tipo evento non si mettono mai le parentesi tonde per richiamare una funzione, 
                                            //e negli altri casi si devono sempre mettere
            {
                backgroundColor: props.backgroundColor,
                fontSize: props.size
            }
        }
            className='button'
        >
            {
                props.label
            }
        </div>
    )
}

Button.propTypes={ //propTypes sono dei veri e propri oggetti
    callback: PropTypes.func.isRequired, //callback può passare solo ed esclusivamente funzioni e ci deve essere per forza 
    backgroundColor: PropTypes.string, //non è obbligatorio
    label: PropTypes.string //non è obbligatorio
}

Button.defaultProps={
    label: 'press',
    backgroundColor: 'red'
}

export default Button