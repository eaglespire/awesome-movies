import React from 'react'
import './reviews.css'
import {MDBContainer} from "mdbreact";

const Reviews = (props) => {
    return (
        <>
            <MDBContainer>
                <div className="row">
                    <div className="col">
                        <h3 className="white-text">{props.reviews.length} reviews</h3>
                    </div>
                </div>
            </MDBContainer>
            {props.reviews.map(review => {
                return (
                    <div className="comment_block" key = {review.id}>
                        <div className="new_comment">
                            <ul className="user_comment">
                                <div className="user_avatar">
                                    <img src="/images/uploads/user-img.png" alt={'reviews'} />
                                </div><div className="comment_body">
                                <p>
                                    {review.content}
                                </p>
                            </div>
                                <div className="comment_toolbar">
                                    <div className="comment_details">
                                        <ul>
                                            {/*<li><i className="fa fa-clock-o"></i> 13:94</li>
                                    <li><i className="fa fa-calendar"></i> 04/01/2015</li>*/}
                                            <li><i className="fa fa-pencil"></i> <span className="user">{review.author}</span></li>
                                        </ul>
                                    </div>
                                    {/*<div className="comment_tools">
                                <ul>
                                    <li><i className="fa fa-share-alt"></i></li>
                                    <li><i className="fa fa-reply"></i></li>
                                    <li><i className="fa fa-heart love"></i></li>
                                </ul>
                            </div>*/}

                                </div>

                            </ul>

                        </div>

                    </div>
                )
            })}
        </>
    )
}
export default Reviews