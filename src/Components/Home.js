import React, { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/Card.css';
const Home = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                let response = res.json();
                return response;
            }).then((data) => {
                console.log(data);
                setItem(data)
            }).catch((err) => {
                console.log(`Error : ${err}`);
            })
    }, [])
    return (
        <>
            {console.log(item)}
            <div className="d-flex justify-content-evenly flex-wrap cardDiv">
                {
                    item.map((val) => {
                        return (
                            <Card val={val} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home