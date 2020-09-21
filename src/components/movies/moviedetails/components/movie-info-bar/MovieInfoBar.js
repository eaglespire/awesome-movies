import React from 'react'

export default function MovieInfoBar(props){
    return (
        <>
            <div className="bc-icons ">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb unique-color lighten-2 ">
                        <li className="breadcrumb-item ml-5 active">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            Status : {props.status}
                        </li>
                        <li className="breadcrumb-item  active">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            Budget : {props.budget}
                        </li>
                        <li className="breadcrumb-item  active">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            Revenue : {props.revenue}
                        </li>
                        <li className="breadcrumb-item  active">
                            <i className="far fa-star mr-2 white-text" aria-hidden="true"></i>
                            Released Date : {props.release_date}
                        </li>
                    </ol>
                </nav>

            </div>
        </>
    )
}