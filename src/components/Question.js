import React , {useState} from 'react'
import "./App.css"

function Question({question , options , selected}) {

    const [answer, setanswer] = useState(options)
    return (
        <div className = "questionBox">

            <div className="question">
                {question}
                    {answer.map( (text , index) => (
                        <button key = {index} className = "btn btn-outline-success" onClick = {() => {
                                 setanswer([text])
                                 selected(text)
                         }}>{text}</button>
                    ))}
            </div>
           
        </div>
    )
    
}

export default Question
