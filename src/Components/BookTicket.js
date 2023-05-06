import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Book_ticket.css';

const BookTicket = () => {
    const location = useLocation();
    console.log(location.state.location.state.val);
    return (
        <div className="bookingDiv d-flex align-items-center justify-content-center">
            <form>
                <div className="mb-5">
                    <label for="exampleInputEmail1" className="form-label text-white">Show</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={location.state.location.state.val.show.name} />
                </div>
                <div className="mb-5">
                    <select className="form-select" aria-label="Default select example">
                        <option selected disabled hidden>Select number of tickets:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                    </select>
                </div>
                <button className="btn btn-primary d-block m-auto" onClick={(e) => {
                    e.preventDefault()
                    alert(`Your ticket has been booked!`)
                }}>Book ticket</button>
            </form>
        </div>
    )
}

export default BookTicket;