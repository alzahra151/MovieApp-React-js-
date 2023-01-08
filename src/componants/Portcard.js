import React from 'react'

export default function Portcard(props) {
    return (
        <div className="card  mb-3 p-4 m-5" style={{ maxWidth: "17rem", backgroundColor: props.bg }}>
            <div className="card-body text-dark">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make u.</p>
            </div>
        </div>
    )
}
