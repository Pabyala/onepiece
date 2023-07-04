import React, { useState } from 'react'
import './QuizStyle.css'
import QuestionData from './QuizData'
import { MdError } from "react-icons/md"
function QuizContext() {
    const [startNow, setStartNow] = useState(true)
    const [quizStart, setQuizStart] = useState({ isStart: false })
    const [questions, setQuestions] = useState(QuestionData)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showFinalResult, setShowFinalResult] = useState(false)
    const[score, setScore] = useState(0)
    const [choicesBtnDisable, setChoicesBtnDisable] = useState(false)
    const [nextQuestBtnDisable, setNextQuestBtnDisable] = useState(true)
    const [inputValueName, setInputValueName] = useState("")
    const [errorBox, setErrorBox] = useState(false)
    const [correctAnsText, setCorrectAnsText] = useState('')
    const [inCorrectAnsText, setInCorrectAnsText] = useState('')


    function quizStartBtn(){
      if(inputValueName === ""){
        setErrorBox(true)
      } else {
        setQuizStart({ isStart: true })
      }
    }

    function optionClicked(isCorrect){
      setChoicesBtnDisable(true)
      setNextQuestBtnDisable(false)
      if(isCorrect){
        setCorrectAnsText("Correct! Nice, sheeshhh")
        setScore(score + 1)
      } else {
        setInCorrectAnsText("Incorrect! Good try nakama")
      }
    }

    function nextBtnQuestion(){
      setCorrectAnsText("")
      setInCorrectAnsText("")
      if(currentQuestion === questions.length - 1){
        setShowFinalResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1)
        setChoicesBtnDisable(false)
        setNextQuestBtnDisable(true)
      }
    }

    function restartGame(){
      setScore(0)
      setCurrentQuestion(0)
      setShowFinalResult(false)
      setChoicesBtnDisable(false)
      setNextQuestBtnDisable(true)
    }

    const handleChange = (event) => {
      setInputValueName(event.target.value)
    }

    function handleErrorBox(){
      setErrorBox(false)
    }

    function handleStartNow(){
      setStartNow(false)
    }

  return (
    <div className='quizContext'>
      <div className='quizContext-con'>
        {startNow ? (
         
          <div className="welcome-quiz">
            <h1 className='titlePage'>Welcome to the one piece world</h1>
            <p className='subTitlePage'>When we are young, our minds get attracted to several things and it is 
              quite obvious that we idealize others (specifically some successful heroes). 
              But how many of us are brave enough to follow our passion and idols whether 
              we are young, adult, or old? However, we know a young lad who has the guts 
              to follow the footsteps of his idol and he is none other than Monkey D. Luffy 
              in the anime “One Piece”!!!</p>
            <p className='subTitlePage'>Oh, I see, you are the greatest fan of One Piece but are you as brave as 
              Luffy? Then you must take up my challenge to score 100% on the One Piece 
              Test. So, are you willing to accept the hardest challenge of the year?</p>
            <button className='btnStartNow' onClick={() => handleStartNow()}>Start now</button>
          </div>
        ) :


        
        errorBox ? 
          //for error popUp box
          (<div className="popup-box">
            <MdError className='errorIcon'/>
            <h3>Ooops!</h3>
            <p>Please enter your name</p>
            <button className='errorBtn' onClick={() => handleErrorBox()}>Ok</button>
          </div>) : 
    
        !quizStart.isStart ? (
          //for start quiz
          <div className='quizStart'>
            <h2>One piece quiz</h2>
            <div className="description-div">
              <p className='description'>Description:</p>
              <p>Each page contains one question.</p>
              <p>Press/click next onece you've answered to see the next question.</p>
              <p>You will be able to see correct answers for each question instantly.</p>
              <p>There is not time limit to complete this quiz, 
                you can take this quiz as many times as you like.</p>
              <p>The score will appear after you complete the quiz.</p>
            </div>
            <div className="input-btnStart">
              <input className='input' type="text" value={inputValueName} onChange={handleChange} placeholder='Please enter your name'/>
              <button className='btnStart' onClick={()=> quizStartBtn()}>Start quiz</button>
            </div>
          </div>) : 

        showFinalResult ? (
          //for result of quiz
          <div className='quizResult'>
            <div className="result-header">
              <h2>Congratulations</h2>
              <h2>{inputValueName}</h2>
            </div>
            <div className="result-info">
                <p className='result-text'>You have completed the quiz.</p>
                <p className='result-score'>Your score: {score}/{questions.length}</p>
                <button className='restart-btn' onClick={() => restartGame()}>Restart</button>
            </div>
          </div> ) :

          //for question and choices 
          (<div className='quizQuestion'>
            <div className="question-answer-div">
                <h2>{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
                <div className="choicesDiv">
                  {questions[currentQuestion].options.map((option) =>{
                    return(
                      <button className={`choicesBtn 
                              ${choicesBtnDisable === true && option.isCorrect === true ? "correct" : 
                              (choicesBtnDisable === true && option.isCorrect === false ? "wrong" : "")}`}
                              key={option.id}
                              onClick={() => optionClicked(option.isCorrect)}
                              disabled={choicesBtnDisable}
                      >
                              {option.text}
                      </button>
                    )
                  })}
                </div>
            </div>
            <div className="score-nxtBtn-div">
                <span className='countQuestion'>Question: {currentQuestion + 1}/{questions.length}</span>
                <span>{correctAnsText || inCorrectAnsText}</span>   
                <button className='nextBtnQuestion' 
                        onClick={()=> nextBtnQuestion()}
                        disabled={nextQuestBtnDisable}
                >
                  Next
                </button>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default QuizContext