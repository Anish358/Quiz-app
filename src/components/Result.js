import React from 'react'

function Result({score , playAgain}) {
    return (
        <div>
        <div className="alert alert-success" role="alert">
            <div className = "score">
                <h1> {score} / 4 correct answers! </h1>
            </div>
            <button className="btn btn-primary try" onClick = {playAgain}>Try Again</button> 
        </div>
        </div>      
    )
}

export default Result
