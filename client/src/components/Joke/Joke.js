import React from "react"
import "./Joke.scss";

function Joke(props) {
    return (
        <div className="jokeBox">
        <div id = "factsDisplay"></div>
            {/* <p>{props.joke}</p> */}
        </div>
    )
}

export default Joke;