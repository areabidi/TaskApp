//import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
//import PropTypes from 'prop-types'
 //css in a new cssfile
const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
      <header className='header'>
                <h1>{title}</h1>
               
               <Button color='green' text='add' onClick={onClick}/>

      </header>
  )
}
// if e is not provided
Header.defaultProps =
{
    title: 'TasK Tracker'
}
//<button className='btn'>add</button>
 /*css in js example
<h1 style={headingStyle}>{title}</h1>*/
//css in js
const headingStyle = { color: 'blue', background: 'red' }/*
Header.PropTypes = {
    title: PropTypes.string //.isRequired,
}
\
 <button className='btn'>button tagged</button>
*/
export default Header