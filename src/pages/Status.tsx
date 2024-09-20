import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status(){
  
  const[newAnswer, setNewAnswer] = useState('')

  const [answers, setAnswers] = useState([
    'concordo',
    'faz muito sentido cara..',
    'LEGAL KKKKKKK'
  ])

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter') {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return(
    <main className="status">
            <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi tempora non nostrum neque, quo numquam eius ipsum mollitia ducimus labore fuga sint possimus enim nemo quae praesentium similique fugit?"/>
            
            <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/DiogoWernek.png" alt="Diogão" />
                <textarea 
                id="tweet" 
                placeholder='Responda esse cara'
                value={newAnswer}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                />
              </label>

              <button type='submit'>
                <PaperPlaneRight />
                <span>Responder</span>
              </button>
            </form>
        
          {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
          })}
        </main>
  )
}