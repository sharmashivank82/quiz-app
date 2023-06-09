import { useEffect, useState } from "react"
import data from './Data.json';
import './Timer.css';

function Timer({ clickback }) {

    const totaltime = 600
    const [seconds, setSeconds] = useState(totaltime);
    const [question, setquestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [points, setPoints] = useState(0);
    const [showresultpage, setShowResultPage] = useState(false);
    const [toggle, setToggle] = useState(totaltime);

    useEffect(() => {
        const timer = seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        if(seconds === 0){
            setShowResultPage(true)
        }
        return () => clearInterval(timer);
    }, [seconds])

    useEffect(() => {
        if(toggle - seconds === 60){
            nextQuestion();
        }
    }, [seconds])

    const formatDate = (time) => {
        const minute = Math.floor(time/60);
        const seconds = time%60;
        return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    const nextQuestion = () => {
        if(question == 9){
            setShowResultPage(true)
            return;
        }
        if(question < 9){
            console.log({ answer, real: data[question].answer })
            if(answer == data[question].answer){
                setPoints((point) => point + 1)
            }
            setquestion(question + 1);
            setAnswer('')
            setToggle(seconds)
        }
    }

  return (
    <>
        <div>
            <h2>{formatDate(seconds)}</h2>
        </div>

        {
            !showresultpage &&
            <>
                <div>
                    <span>Q {question + 1})  </span>
                    {data[question].question} Option.
                </div>
                
                {/* <div>
                    {
                        data[question].option.map((item, index) => {
                            return (
                                <div key={index} style={{ display: 'flex', width: '100%', gap: '10px', alignItems: 'center' }}>
                                    <label style={{ fontSize: '27px' }} className="container">{item}</label>
                                        <input type="radio" name="name1" value={item} onChange={() => setAnswer(item)} checked={answer === item} />
                                        <span className="checkmark"></span>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div> */}

                <div>
                    {
                        data[question].option.map((item, index) => {
                            return (
                                <label className="container">
                                    <span>{item}</span>
                                    <input type="radio" name="name1" value={item} onChange={() => setAnswer(item)} checked={answer === item} />
                                    <span className="checkmark" style={{ marginTop: '6px' }}></span>
                                </label>
                            )
                        })
                    }
                </div>


                {/* <label class="container">One
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Two
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Three
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label>
                <label class="container">Four
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                </label> */}

                <br/><br />
                <h3>Points :: {points}</h3>
                <br /><br />

                <button onClick={nextQuestion} >Next Answer</button>
            </>
        }

        {
            showresultpage &&
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
                <h3>You completed the Quiz Your total Point is </h3>
                <br />
                <h4>{points}</h4>
                <div><button onClick={() => clickback()}>Click here to Back</button></div>
            </div>
        }

        

    </>
  )
}

export default Timer