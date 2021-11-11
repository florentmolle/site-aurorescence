import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';

import './DomOffice.css';


const DomOfficeContainer = styled.section`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5%;
    z-index: 20;
    background: var(--light-color);
`
const DomOfficeWrapper = styled.div``
const DomTitleBox = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5rem 0 3rem 0;
    text-align: center;
    background: var(--light-color);
    box-shadow: 0px 3px 10px rgba(21,21,21, .3);
    z-index: 10;
    // border: 2px solid lightblue;
`
const DomTitle = styled.h1`
    font-size: clamp(2rem, 5vw, 6.5rem);    
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
`
const DomSmallTitle = styled.h2`
    font-size: clamp(2rem, 3vw, 2.5rem);    
    font-weight: 300;
    font-family: var(--main-font);
    color: var(--dark-color);
`
const DomNewMsgBox = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin: 20rem auto 0;
    // border: 2px solid red;
`
const DomNewMsgTitle = styled.div`
    position: fixed;
    top: 25rem;
    left: 10%;
    font-size: clamp(2rem, 3vw, 5rem);    
    font-weight: ${props => props.weight};
    font-family: var(--main-font);
    color: var(--dark-color);
    margin-bottom: 2rem;
    cursor: pointer;
`
const DomNewResTitle = styled.div`
    position: fixed;
    top: 32rem;
    left: 10%;
    font-size: clamp(2rem, 3vw, 5rem);    
    font-weight: ${props => props.weight};
    font-family: var(--main-font);
    color: var(--dark-color);
    margin-bottom: 2rem;
    cursor: pointer;
`
const SeparatorTextAndContent = styled.div`
    width: 2px;
    height: 70vh;
    position: fixed;
    top: 25rem;
    left: 25%;
    opacity: .3;
    background: var(--dark-color);
`
const DomNewMsgInnerBox = styled.div`
    width: 75%;
    max-width: 1100px;
    display: ${props => props.display};
    // border: 1px solid blue;
`
const DomNewMsg = styled.div`
    padding: 3rem;
    margin: 2rem auto;
    border-radius:.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: rgba(21,21,21, .03);
    border: 1px solid rgba(21,21,21, .1);
`
const De = styled.p`
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    margin: 1rem 0;
`
const Question = styled.p`
    width: 50%;
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    margin: 2rem 0;
	position: relative;
	background-color: #fff;
	padding: 2rem;
	border-radius: 1rem;
    box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
    &::before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        bottom: 100%;
        left: 7%;
        border: .75rem solid transparent;
        border-top: none;
        border-bottom-color: #fff;
        filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
    }
`
const ReponseTextBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
`
const Reponse = styled.div`
    width: 50%;
    font-size: clamp(1.5rem, 5vw, 1.7rem);
    position: relative;
    background-color: rgba(1,168,98,.7);
    padding: 2rem;
    text-align: left;
    border-radius: 1rem;
    box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
`
const ReponseBox = styled.div`
    display: flex;
    justify-content: flex-end;
`
const ReponseBtn = styled.button`
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 3rem;
    margin-right: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    background: var(--hover-color);
    transition: .5s ease-out;
    &:hover{
        background: rgba(1,168,98,.5);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const DeleteQuestionBtn = styled.button`
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 3rem;
    margin-right: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    background: rgb(255,99,71);
    transition: .5s ease-out;
    &:hover{
        background: rgba(255,99,71, .7);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const DomNewResInnerBox = styled.div`
    width: 75%;
    max-width: 1100px;
    display: ${props => props.display};
    // border: 1px solid blue;
`
const ReponsePopUp = styled.div`
    width: 100vw;
    height: 100vh;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(21,21,21, .8);
    pointer-events: all;
    z-index: 20;
`
const ReponsePopUpBox = styled.div`
    width: 35%;
    position: relative;
    padding: 2rem;
    background: var(--light-color);
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const ReponsePopupBoxSmall = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const ReponseInput = styled.textarea`
    height: 10rem;
    font-size: 1.8rem;
    border: none;
`
const ReponseSendBtn = styled.button`
    width: 15rem;
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    &:hover{
        color: white;
        background: var(--hover-color);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const CancelReponse = styled.button`
    width: 15rem;
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    &:hover{
        background: rgba(21,21,21, .15);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const ResponsePopupSended = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    background: var(--light-color);
`
const ResponsePopupSendedText = styled.p`
    font-size: 2.2rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
`
const DeletePopup = styled.div`
    width: 100vw;
    height: 100vh;
    display: ${props => props.display};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(21,21,21, .8);
    pointer-events: all;
    z-index: 20;
`
const DeletePopupBox = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2rem;
    background: var(--light-color);
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
const DeletePopupText = styled.p`
    font-size: 3rem;
    font-family: var(--main-font);
    font-weight: 500;
    color: var(--dark-color);
    margin-top: 2rem;
`
const DeletePopupBtn = styled.button`
    width: 15rem;
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    background: rgba(255,99,71, 1);
    &:hover{
        background: rgba(255,99,71, .7);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`
const DeletePopupBtnCancel = styled.button`
    width: 15rem;
    font-size: 1.8rem;   
    font-weight: 500;
    font-family: var(--main-font);
    color: var(--dark-color);
    padding: 1rem 2rem;
    margin: 2rem;
    border: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    cursor: pointer;
    transition: .5s ease-out;
    &:hover{
        background: rgba(21,21,21, .15);
        transition: .2s ease-out;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 2px;
    }
`

const DomOffice = ({isSignedIn}) => {

    const [newQuestion, setNewQuestion] = useState([]);
    const [newResponse, setNewResponse] = useState([]);
    const [popUpName, setPopUpName] = useState('');
    const [popUpQuestion, setPopUpQuestion] = useState('');
    const [openSendPopup, setOpenSendPopup] = useState(false);
    const [popUpSend, setPopUpSend] = useState('');
    const [responseSend, setResponseSend] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [deletePopup, setDeletePopup] = useState(false);
    const [switchQandR, setSwitchQandR] = useState(false);

    

    function getDataOffice(){
        firebase.firestore().collection('newquestions').onSnapshot(snapshot =>{
            const saveDataQ = []
            snapshot.docs.forEach((snap)=>{
                saveDataQ.push(snap)
            })
            setNewQuestion(saveDataQ)
        });
        firebase.firestore().collection('newresponse').onSnapshot(snapshot =>{
            const saveDataRes = []
            snapshot.docs.forEach((snap)=>{
                saveDataRes.push(snap)
            })
            setNewResponse(saveDataRes)
        });
    }

    useEffect(()=>{
        getDataOffice();
        // return function cleanup(){
        // }
    }, [])

    

    function failResponseSend(){
        let failResSend = document.getElementById('fail-response-send');
        let failResSendText = document.querySelector('#fail-response-send p');
        failResSend.style.display = 'flex';
        failResSend.style.opacity = '1';
        failResSend.style.background = 'rgba(255,99,71, .5)';
        failResSend.style.animation = 'failmsgfaqpopup .2s ease-out';
        failResSendText.innerHTML ="Réponse vide, question difficile ?";
    }


    function handleResponse(msg){
        setOpenSendPopup(true);
        setPopUpName(msg.data().nom)
        setPopUpQuestion(msg.data().question)
    }
    function handleAskDelete(msg){
        setDeleteId(msg)
        setDeletePopup(true)
    }
    function handleDelete(){
        let deletedMsg = document.querySelector('#deleted-msg');
        deletedMsg.style.opacity = '1';
        deletedMsg.style.transform = 'translateY(0)'
        firebase.firestore().collection('newquestions').doc(deleteId).delete()
        firebase.firestore().collection('newresponse').doc(deleteId).delete()
        setTimeout(() => {
            setDeletePopup(false);
            deletedMsg.style.opacity = '0';
            deletedMsg.style.transform = 'translateY(1.5rem)'
        }, 2000);
    }

    function handleSendResponse(e){
        e.preventDefault();
        if(popUpSend === '' || popUpQuestion === ''){
            failResponseSend();
            return
        }else{
            firebase.firestore().collection('newresponse').add({
                nom: popUpName,
                question: popUpQuestion,
                reponse: popUpSend,
            }).then(()=>{
                let failResSend = document.getElementById('fail-response-send');
                failResSend.style.display = 'none';
                setResponseSend(true);
                setTimeout(()=>{
                    setPopUpSend('');
                    setOpenSendPopup(false);
                    setResponseSend(false);
                }, 2000)
            }).catch(err => {
                console.log(err.message);
            })
        }
    }

    function handleCancel(){
        let failResSend = document.getElementById('fail-response-send');
        failResSend.style.display = 'none';
        setOpenSendPopup(false);
    }
    function handleSwitchQandR(){
        setSwitchQandR(!switchQandR)
    }


    return (
        <DomOfficeContainer>
            <DomOfficeWrapper>
                <DomTitleBox>
                    <DomTitle>Salut Dom</DomTitle>
                    <DomSmallTitle>Bienvenue dans ton espace perso</DomSmallTitle>
                </DomTitleBox>
                {isSignedIn ? 
                <DomNewMsgBox>
                    <DomNewMsgTitle onClick={handleSwitchQandR} weight={switchQandR ? '200' : '500'}>Questions</DomNewMsgTitle>
                    <DomNewResTitle onClick={handleSwitchQandR} weight={switchQandR ? '500' : '200'}>Réponses</DomNewResTitle>
                    <SeparatorTextAndContent></SeparatorTextAndContent>
                    <DomNewMsgInnerBox display={switchQandR ? 'none' : 'block'}>
                        <div>
                            {Object.entries(newQuestion).map(([id,msg])=>{
                                return(
                                    <DomNewMsg key={id}>
                                        {/* <Message><strong>message n:</strong> {parseInt(id)+1}</Message> */}
                                        <De> <strong>De:</strong> {msg.data().nom}</De>
                                        <Question>{msg.data().question}</Question>
                                        <ReponseBox>
                                            <DeleteQuestionBtn onClick={()=>handleAskDelete(msg.id)}>supprimer</DeleteQuestionBtn>
                                            <ReponseBtn onClick={()=>handleResponse(msg)}>Répondre</ReponseBtn>
                                        </ReponseBox>
                                    </DomNewMsg>
                                )
                            })}
                        </div>
                    </DomNewMsgInnerBox>
                    <DomNewResInnerBox display={switchQandR ? 'block' : 'none'}>
                        <div>
                            {Object.entries(newResponse).map(([id,msg])=>{
                                return(
                                    <DomNewMsg key={id}>
                                        {/* <Message><strong>message n:</strong> {parseInt(id)+1}</Message> */}
                                        <De> <strong>De:</strong> {msg.data().nom}</De>
                                        <Question>{msg.data().question}</Question>
                                        <ReponseTextBox>
                                            <Reponse>{msg.data().reponse}</Reponse>
                                        </ReponseTextBox>
                                        <ReponseBox>
                                            <DeleteQuestionBtn onClick={()=>handleAskDelete(msg.id)}>supprimer</DeleteQuestionBtn>
                                        </ReponseBox>
                                    </DomNewMsg>
                                )
                            })}
                        </div>
                    </DomNewResInnerBox>
                    <ReponsePopUp display={openSendPopup ? 'flex' : 'none'}>
                            <ReponsePopUpBox>
                                <De> <strong>De:</strong> {popUpName}</De>
                                <Question>{popUpQuestion}</Question>
                                <ReponsePopupBoxSmall>
                                    <ReponseInput 
                                    type="text" 
                                    placeholder="ta réponse"
                                    value={popUpSend}
                                    onChange={(e)=>setPopUpSend(e.target.value)}
                                     />
                                     <div>
                                        <ReponseSendBtn onClick={handleSendResponse}>Envoyer</ReponseSendBtn>
                                        <CancelReponse onClick={handleCancel}>Annuler</CancelReponse>
                                     </div>
                                     <div id="fail-response-send">
                                        <p>fail message or win</p>
                                    </div>
                                </ReponsePopupBoxSmall>
                                <ResponsePopupSended display={responseSend ? 'flex' : 'none'}>
                                    <ResponsePopupSendedText>Réponse envoyé</ResponsePopupSendedText>
                                </ResponsePopupSended>
                            </ReponsePopUpBox>
                    </ReponsePopUp>
                    <DeletePopup display={deletePopup ? 'flex' : 'none'}>
                        <DeletePopupBox>
                            <DeletePopupText>Es-tu sûr ?</DeletePopupText>
                            <div>
                                <DeletePopupBtn onClick={handleDelete}>Supprimer</DeletePopupBtn>
                                <DeletePopupBtnCancel onClick={()=>setDeletePopup(false)}>Annuler</DeletePopupBtnCancel>
                            </div>
                            <p id="deleted-msg">message supprimé !</p>
                        </DeletePopupBox>
                    </DeletePopup>
                </DomNewMsgBox>    
                

                 : 
                <div><p>rien à déclarer</p></div>}
            </DomOfficeWrapper>
        </DomOfficeContainer>
    )
}

export default DomOffice
