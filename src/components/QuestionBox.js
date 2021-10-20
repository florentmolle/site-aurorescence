import React, {useState, useEffect} from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import styled from 'styled-components';

import database from '../firebase';


import './QuestionBox.css'

const QbContainer = styled.div`
    width: 80%;
    max-width: 120rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;
    @media(max-width: 425px){
        width: 90%;
    }
    @media(max-width: 350px){
        width: 100%;
    }
`
const AnswerBox = styled.div`
    width: 100%;
    max-height: 50rem;
    padding: 0 2rem;
    margin-bottom: 5rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.06) 0px -2px 4px 0px inset;
    @media(max-width: 425px){
        width: 100%;
        padding: 0;
    }
`
const AnswerTitle = styled.h2`
    font-size: clamp(2rem, 5vw, 2.5rem);    
    font-weight: 400;
    font-family: var(--title-font);
    color: var(--dark-color);
    margin-top: 5rem;
    padding: 2rem;
`


const QuestionBox = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [newMsg, setNewMsg] = useState([]);

    function failMessageFaq(){
        let failMsgFaq = document.getElementById('fail-faq');
        let failMsgFaqText = document.querySelector('#fail-faq p');
        failMsgFaq.style.display = 'flex';
        failMsgFaq.style.opacity = '1';
        failMsgFaq.style.background = 'rgba(255,99,71, .5)';
        failMsgFaq.style.animation = 'failmsgfaqpopup .2s ease-out';
        failMsgFaqText.innerHTML = 'Merci de remplir correctement les champs requis.';
        // setTimeout(()=>{
        //     failMsgFaq.style.animation = 'none';
        // }, 1000)
    }

    function successMessageFaq(){
        let failMsgFaq = document.getElementById('fail-faq');
        let failMsgFaqText = document.querySelector('#fail-faq p');
        failMsgFaq.style.display = 'flex';
        failMsgFaq.style.opacity = '1';
        failMsgFaq.style.background = 'var(--hover-color)';
        failMsgFaq.style.animation = 'failmsgfaqpopup .2s ease-out';
        failMsgFaqText.innerHTML = "Votre question à bien été enregistré, vous pouvez la retrouver ci-dessous.<br> J'y répondrais dès que possible. <br> Merci";
        setTimeout(() => {
            failMsgFaq.style.opacity = '0';
        }, 6000);
        setTimeout(() => {
            failMsgFaq.style.display = 'none';
        }, 7000);
    }

    const Push = (e) => {
        if(message === '' || name === ''){
            e.preventDefault()
            let nameInput = document.querySelector('#question-firstname');
            let questionInput = document.querySelector('#question-textarea');
            nameInput.classList.add('no-name');
            questionInput.classList.add('no-name');

            failMessageFaq()

            return;
        }else{
            e.preventDefault();
            database.ref("newMsg").push({
                name : name,
                message : message,
              }).catch(alert);
            setName('');
            setMessage('');
            let nameInput = document.querySelector('#question-firstname');
            let questionInput = document.querySelector('#question-textarea');
            nameInput.classList.remove('no-name');
            questionInput.classList.remove('no-name');
            successMessageFaq();
        }
    }

    const getData = ()=>{
        database.ref("newMsg").on('value', snap =>{
            const saveData = [];
            snap.forEach((item)=>{
                saveData.push(item);
            });
            setNewMsg(saveData);
        });
      };
    useEffect(()=>{
          getData()
    }, [])



    return (
        
        <QbContainer>
            <form>
                <input type="text"
                placeholder="Votre prénom" 
                id="question-firstname"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <textarea name="question-text" 
                id="question-textarea" rows="7"
                placeholder="Une question ?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button onClick={Push} id="question-send">envoyer</button>
                <div id="fail-faq">
                    <p>fail message or win</p>
                </div>
            </form>
            <AnswerTitle>Vos questions :</AnswerTitle>
                <AnswerBox>
                    <Scrollbar 
                    damping={0.08}
                    renderByPixels={true}
                    continuousScrolling={true}
                    style={{maxHeight: "56rem", padding:"3rem 0 15rem 0"}}
                    >
                    {Object.entries(newMsg).map(([id,msg])=>{

                        return(
                            <div key={msg.key} id="answer-contentbox">
                                <div id="answer-content">
                                    <div>
                                        <p>De : {msg.val().name}</p>
                                        <div id="answer-content-msg">
                                            <p>{msg.val().message}</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="answer-answer">
                                    <p>{msg.val().reponse}</p>
                                </div>
                            </div>
                        )
                    })}
                    </Scrollbar>
                </AnswerBox>
        </QbContainer>
    )
}

export default QuestionBox