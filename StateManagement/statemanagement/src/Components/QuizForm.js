import React, { useState } from 'react'

export default function QuizForm() {
    function handleTextAreaChange(e){
        setanswer(e.target.value);
        console.log(answer);
    }
    const [answer, setanswer] = useState('');
    return (
        <>
            <h1>Quiz Form </h1>
            <p>Which City is the Capital of Uttar Pradesh?</p>
            <textarea value={answer} onChange={handleTextAreaChange}></textarea>
            <form action="">
                <button>Submit</button>
            </form>
        </>
    )
}
