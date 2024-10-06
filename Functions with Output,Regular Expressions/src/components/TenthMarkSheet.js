import React, { useRef } from 'react'

function TenthMarkSheet() {

    
        let firstNameInputRef = useRef();
        let firstNameSpanRef = useRef();
        let lastNameInputRef = useRef();
        let lastNameSpanRef = useRef();
        let emailInputRef = useRef();
        let emailSpanRef = useRef();
        let passwordInputRef = useRef();
        let passwordSpanRef = useRef();
        let engInputRef = useRef();
        let engSpanRef =useRef();
        let telInputRef = useRef();
        let telSpanRef = useRef();
        let hindInputRef = useRef();
        let hindSpanRef = useRef();
        let mathsInputRef = useRef();
        let mathsSpanRef = useRef();


 let sciInputRef = useRef();
 let sciSpanRef = useRef();
 let sociInputRef = useRef();
 let sociSpanRef = useRef();
 let resultLblRef =useRef();

 const nameRegex = /^[A-Za-zÀ-ÿ]{2,30}(?:\s[A-Za-zÀ-ÿ]{2,30})*$/;

 const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,30}$/;



 let validateName = (inputRef,spanRef)=>{

 let result = nameRegex.test(inputRef.current.value)

 if(result === true){
    spanRef.current.innerHTML = "valid";
    spanRef.current.style.backgroundColor = "green"

 }else{
    spanRef.current.innerHTML = "Invalid";
    spanRef.current.style.backgroundColor = "red"
 }
 };

 let validateEmail = (inputRef,spanRef)=> {
 let result= emailRegex.test(inputRef.current.value);

    if(result === true){
     spanRef.current.innerHTML = "Valid";
     spanRef.current.style.backgroundColor = "green";

    }else{
        spanRef.current.innerHTML = "Invalid";
        spanRef.current.style.backgroundColor = "Red";
    }
 };

 let validatePassword = (inputRef,spanRef)=> {
    let result= passwordRegex.test(inputRef.current.value);

    if(result === true){
     spanRef.current.innerHTML = "Valid";
     spanRef.current.style.backgroundColor = "green";

    }else{
        spanRef.current.innerHTML="Invalid";
        spanRef.current.style.backgroundColor="red";

    }
}
  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef} onChange={()=>{
                validateName(firstNameInputRef,firstNameSpanRef);
            }}></input>
            <span ref={firstNameSpanRef}></span>
            
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef} onChange={()=>{
                validateName(lastNameInputRef,lastNameSpanRef);
            }}
            ></input>
            <span ref={lastNameSpanRef}></span>
            
        </div>
        <div>
            <label>Email</label>
            <input ref={emailInputRef} onChange={()=>{
                validateEmail(emailInputRef,emailSpanRef);
            }}></input>
            <span ref={emailSpanRef}></span>
            
        </div>
        <div>
            <label>Password</label>
            <input ref={passwordInputRef} onChange={()=>{
                validatePassword(passwordInputRef,passwordSpanRef);
            }}></input>
            <span ref={passwordSpanRef}></span>
            
        </div>
        <div>
            <label>English</label>
            <input type="number" ref={engInputRef} 
            onFocus={() => {
                console.log("eng onFocus");
                engInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                console.log("eng onChange");
               // console.log(engInputRef.current.value);//
                let marks = Number(engInputRef.current.value);

                engSpanRef.current.innerHTML = marks >= 35? "Pass":"Fail";

                engSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }} 
            onBlur={() => {
                console.log("eng onBlur");
                engInputRef.current.style.backgroundColor = "";
            }}></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' ref={telInputRef} 
            onFocus={() => {
                console.log("tel onFocus");
             telInputRef.current.style.backgroundColor = "yellow";
            }}
             
            onChange={() => {
                console.log("tel onChange");
                let marks = Number(telInputRef.current.value);

                telSpanRef.current.innerHTML = marks >= 35? "Pass":"Fail";

                telSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }} 
            onBlur={() => {
                console.log("tel onBlur");
                telInputRef.current.style.backgroundColor = "";
            }} ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hindInputRef} 
            onFocus={()=>{
                console.log("hind onFocus");
                hindInputRef.current.style.backgroundColor = "yellow";
            }} 
            onChange={() => {
                console.log("hind onChange");
                let marks = Number(hindInputRef.current.value);

                hindSpanRef.current.innerHTML = marks >= 35? "😇Pass":"😞Fail";

                hindSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }}
                
            onBlur={() => {
                console.log("hind onBlur");
                hindInputRef.current.style.backgroundColor = "";
                }} 
                ></input>
            <span ref={hindSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' ref={mathsInputRef}
             onFocus={()=>{
                console.log("mathsInput onFocus");
                mathsInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                console.log("mathsInputRef onChange");
                let marks = Number(mathsInputRef.current.value);

                mathsSpanRef.current.innerHTML = marks >= 35? "Pass":"Fail";
                mathsSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }}
            onBlur={() => {
                console.log("mathsInputRef onBlur");
                mathsInputRef.current.style.backgroundColor = "";
            }}
                ></input>
            <span ref={mathsSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={sciInputRef} 
            onFocus={() => {
                console.log("sciInputRef onFocus");
                sciInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                console.log("sciInputRef onChange");
                let marks = Number(sciInputRef.current.value);

                sciSpanRef.current.innerHTML = marks >= 35? "Pass":"Fail";

                sciSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }}
            onBlur={() => {
                console.log("sciInputRef onBlur");
                sciInputRef.current.style.backgroundColor = "";
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={sociInputRef}
           onFocus={() => {
                console.log("sociInputRef onFocus");
                sociInputRef.current.style.backgroundColor = "yellow";
            }}
            onChange={() => {
                console.log("sociInputRef onChange");
                let marks = Number(sociInputRef.current.value);

                sociSpanRef.current.innerHTML = marks >= 35? "Pass":"Fail";
                sociSpanRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
            }}
            onBlur={() => {
                console.log("sociInputRef onBlur");
                sociInputRef.current.style.backgroundColor = "";
            }}
            ></input>
            <span ref={sociSpanRef}></span>
        </div>
        <button type='button' onClick={()=>{

        let firstName = firstNameInputRef.current.value;
        let lastName =  lastNameInputRef.current.value;
        let engMarks =  Number(engInputRef.current.value);
        let telMarks =  Number(telInputRef.current.value);
        let hindMarks = Number(hindInputRef.current.value);
        let mathMarks = Number(mathsInputRef.current.value);
        let sciMarks =  Number(sciInputRef.current.value);
        let sociMarks = Number(sociInputRef.current.value);

        let totalMarks=engMarks+telMarks+hindMarks+mathMarks+sciMarks+sociMarks;
    
       
        //alert(`${firstName} ${lastName} got total marks of ${totalMarks}`//);
        
        resultLblRef.current.innerHTML =(`${firstName} ${lastName} got total marks of ${totalMarks}`);
      }}>Calculate Results</button>

      <br></br>
      <label ref={resultLblRef} className="resultLbl"></label>
      </form>
    </div>
  )
}



    
export default TenthMarkSheet
