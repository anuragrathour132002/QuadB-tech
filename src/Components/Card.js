import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css'
const Card = (props) => {
    const navigate = useNavigate();
    const viewDetailsBtnClicked = () => {
        navigate('/item_details', { state: props });
    }
    return (
        <div className="card">
            <img src={props.val.show.image?.original} className="card-img-top" alt="..." />
            <div className="middle">
                <button className="viewDetailsBtn" onClick={viewDetailsBtnClicked}>View Details </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.val.show.name}</h5>
                <p className="rating mt-3">
                    <b>Rating : </b>{props.val.show.rating.average}
                </p>
            </div>
        </div >
    )
}

export default Card