//first attemp creating UserComponent as a function instead of a class. Couldn't find a way to get
//the input value to the authenticate method this way

import React, { PropTypes } from 'react'


const UserComponent = (props) => {

    const go = () => {
        console.log('GO!!!!!!')
        props.authenticate('u', 'p');
    }

    const inputChange = (e) => {
        console.log("Input Field changed!"); console.dir(e);
        console.log(e.target.value)
    }
    return (
        <div>
            In UserComponent<br />
            <input onChange={inputChange} />
            <button onClick={ go  }>sssssss</button>


        </div>
    )
}

UserComponent.propTypes = {
  authenticate: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired
}

export default UserComponent