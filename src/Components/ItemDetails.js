import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../styles/Item_details.css';

const ItemDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const myStyle = {
        backgroundImage: `url(${location.state.val.show.image?.original})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    console.log(location.state.val);
    // useEffect(() => {
    //     let summmary = document.getElementById('summary').innerText;
    //     let newText = summmary.replace('<p>', '');
    //     document.getElementById('summary').innerText = newText;
    // });
    // console.log(location.state.val.show.image?.medium);
    const book_ticket_btn_clicked = () => {
        navigate('/book_ticket', { state: { location } });
    }
    return (
        <div className="container-fluid item_details_div">
            <div className="row d-flex align-items-center">
                <div className="offset-md-1 col-md-3 imageDiv mt-5" style={myStyle}>
                </div>
                <div className="offset-md-1 col-md-6 infoDiv text-white mt-5">
                    <h1 className="mb-5">{location.state.val.show.name}</h1>
                    <p id="summary">
                        <b>Summary : </b> {location.state.val.show.summary}
                    </p>
                    <p><b>Rating : </b>{location.state.val.show.rating.average}</p>
                    <p><b>Language : </b>{location.state.val.show.language}</p>
                    <Link to={location.state.val.show.url} target="_blank" className="d-block mb-5 know_more">
                        Know more
                    </Link>
                    <Link to={location.state.val.show.officialSite} target="_blank" className="watchBtn text-decoration-none me-5">
                        Watch
                    </Link>
                    <button className="watchBtn text-decoration-none" onClick={book_ticket_btn_clicked}>Book ticket</button>

                </div>
            </div>
        </div>
    )
}

export default ItemDetails;