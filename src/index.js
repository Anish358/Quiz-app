import React, { Component , useState} from 'react'
import ReactDOM from "react-dom"
import quizService from  "./quizService"
import Question from './components/Question'
import "./components/App.css"
import Result from './components/Result'


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      questionBank : []
    }
  }

   getQuestions = () => {
     quizService().then(question => {
       this.setState({
         questionBank : question ,
         score : 0,
         responses :0
       })
     })
   }

   componentDidMount() {
     this.getQuestions();
   }

   computeAnswer = (answer , correctAnswer) => {
     if(answer === correctAnswer){
        this.setState({
          score : this.state.score + 1
        })
     }
     this.setState({
       responses : this.state.responses < 4 ? this.state.responses + 1 : 4
     })
   }

   
   playAgain = () => {
      this.getQuestions();
      this.setState({
        score : 0,
        responses : 0
      })
   }

  render() {
    return (
        <div className="container">

          <div className="title">DO YOU KNOW THIS</div>
          
          {this.state.questionBank.length > 0 && 
          this.state.responses < 4 && 
          this.state.questionBank.map(
            ({question , answers , correct , questionId}) => (
            <Question 
            question = {question} 
            options = {answers} 
            queskey = {questionId} 
            selected = {answer => this.computeAnswer(answer , correct)}/>
          )
          )}

          {this.state.responses === 4 ? (<Result score = {this.state.score} playAgain = {this.playAgain}/>) : null }
        </div>
    )
  }
}

ReactDOM.render(<App/> , document.getElementById("root"));
