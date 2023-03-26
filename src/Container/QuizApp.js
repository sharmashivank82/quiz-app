import './QuizApp.css';
import logo from '../logo.svg'
import banner from '../Images/image1.jpg'
import { useState } from 'react';
import Timer from './Timer';

function QuizApp() {

    const [ data, setData ] = useState(false);
    const [step, setStep] = useState(1);
    const [showquiz, setShowQuiz] = useState(false);

    function getTimer(){
        setStep(2);
    }

    function clickback() {
        setStep(1);
    }

    function showQuizRule(){
        setData(true);
        setTimeout(() => {
            setShowQuiz(true);
        }, 500)
    }

  return (
    <>

        <div className="home-container">

            { step === 1 && 
                <>
                    <div className='header'>
                        <div className='header-section'>
                            <i className="fa-solid fa-arrow-left"></i>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className='block'>
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className='banner'>
                        <div className='banner-container'>
                            <img src={banner} alt="" />
                        </div>
                        <h3>Welcome to the Quiz Show</h3>
                        <div className='comment-container'>
                            <div className='comment-box'>
                                <p><i className="fa-solid fa-arrow-left"></i> Leave a Comment</p>
                                <p><i className="fa-solid fa-arrow-left"></i> Save Quiz</p>
                                <p><i className="fa-solid fa-arrow-left"></i> Challenge a Friend</p>
                            </div>
                            <div className='rating'>
                                <div className='people-enrolled'>
                                    <div style={{ transform: 'translateX(200%)' }}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div style={{ transform: 'translateX(150%)' }}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div style={{ transform: 'translateX(100%)' }}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div style={{ transform: 'translateX(50%)' }}>
                                        <img src={logo} alt="" />
                                    </div>
                                    <div style={{ transform: 'translateX(0%)' }}>+98</div>
                                </div>
                                <p>People are enrolled</p>
                                <div className='rating-star'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>3 Rating (5.0)</p>
                            </div>
                        </div>

                        <p style={{ margin: '14px 0' }}>
                        and the oldest building in the city. It is the burial place of Mian Ghulam Shah Kalhoro,
                        who died in 1772 and is believed to be the founder of Hyderabad, 
                        and the second-most important figure in the province of Sindh 
                        </p>
                    </div>

                    <div className='button-container'>
                        <button onClick={() => showQuizRule()}>
                            Take Quiz
                        </button>
                    </div>


                    {data && <div className={`Quiz-Rule ${showquiz ? 'showQuizRule' : ''}`}>
                        <h3>Quiz Rules</h3>
                        <p>10 Mins</p>
                        <p>10 Question</p>
                        <p>1 min for each question</p>
                        <div className='button-container'>
                            <button onClick={getTimer}>Start</button>
                        </div>
                    </div>}
                </>
            }

            {
                step === 2 &&
                <>
                    <div className='timer'>
                        <Timer clickback={clickback} />

                    </div>
                </>
            }

        </div>

    </>
  )
}

export default QuizApp