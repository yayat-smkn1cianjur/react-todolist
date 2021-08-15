// import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button style={{ backgroundColor: color }}
            onClick={onClick}
            className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

// Button.propTypes = {
//     text: 
// }

export default Button
