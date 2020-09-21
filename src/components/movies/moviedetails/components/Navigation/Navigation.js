import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'
export default function Navigation(props){
    return (
        <>
            <div className="bc-icons ">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb unique-color lighten-2 ">
                        <li className="breadcrumb-item ml-5">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            <Link to={'/'} className={'white-text'}>Home</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            <Link to={`/movies/${props.id}`} className={'white-text'}>{props.title}</Link>
                        </li>
                    </ol>
                </nav>

            </div>
        </>

    )
}