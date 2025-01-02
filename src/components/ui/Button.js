//CSS
import './Button.css'

/* Import dei PropTypes*/
import PropTypes from 'prop-types';

function Button(props){ /*Al componente si passano delle props*/

    /* Funzione chiamata quando si clicca sul pulsante */
    function pressButton(){ 
        props.callback()
    }

    return(
        <div onClick={pressButton} 
            style={{
                backgroundColor: props.backgroundColor, //Il colore di sfondo viene preso dal colore specificato nel pulsante di homepage.js
            }}
            className='button'
        >
            {
                props.label //Prende il label definito in homepage
            }
        </div>
    )
}

    Button.propTypes={ 
        callback: PropTypes.func.isRequired, 
        backgroundColor: PropTypes.string, 
        label: PropTypes.string 
    }

    Button.defaultProps={
        label: 'clicca',
        backgroundColor: 'pink'
    }

export default Button