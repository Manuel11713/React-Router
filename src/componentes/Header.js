import React from 'react';
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
    <div className="container">
        <div className="row">
            <div className="col">
                <Link to={'/productos'}>
                    <img className="rounded mx-auto d-block p-3" src="/img/logo.png" alt='Frontend Store'/>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default Header;