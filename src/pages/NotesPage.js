import React, { useEffect } from 'react';
import styled from "styled-components";
import {Link,useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import axios from 'axios';
import Lottie from 'react-lottie'; 
import * as loader from "../images/loader.json"
import * as sucess from "../images/done.json" 
import Inputbox from '../components/Inputbox';
import LinesEllipsis from 'react-lines-ellipsis';
import QuestionPage from './QuestionPage';
import Header from '../components/Header';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import ServerBox from '../components/ServerBox';
const NotesPage = () => {
  const navigate=useNavigate();
  const [value, setValue] = React.useState('Controlled');
  var [ques,Setques] = React.useState();
  var [alert,Setalert] = React.useState(false);
  var [done,Setdone] = React.useState(false);
  var [server,SetServer] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true, 
    animationData: loader.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const handleServerChange=(e)=>{
    const temp =e.target.value;
    const temp2= document.getElementById("server_ids").value;
    console.log("HandleChange: ",temp2);
    SetServer(temp2);
  }
  const header = {
    "Access-Control-Allow-Origin": "*"
  }

  useEffect(()=>{
    console.log("useEffect: ",server);
  },[server]);
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: sucess.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const handleSubmit=()=>{
    const item = document.getElementById("input-box").value;
    if(item==="")
    {
      Swal.fire(
        'Error!',
        'You have not entered the Text!',
        'error'
      )
    }
    // Setalert(true);
    // let formField = new FormData();
    // formField.append('content',item);
    // navigate('/question');
    // fetch('/api/sendContext',rasdasfequestOption)
    // .then((response)=>response.json());
    //"/api/sendContext",{context: item}
    else{
      Setalert(true);
      
      var address = document.getElementById("server_ids").value+"/api/sendContext";
      // var address = "http://207b-34-70-176-13.ngrok.io/api/sendContext/"
      console.log("HandleSubmit: ",address);
      axios.post(address,{'content': item},{headers: header}).then((response)=>{
      // console.log(response.data);
      Setdone(true);
      setTimeout(()=>{
        navigate('/question',{state:{ques: response.data.ques,ans: response.data.ans,distractor: response.data.distractor}});
      },3000); 
    }).catch(function(error){
      Setalert(false);
      Swal.fire(
        'Error!',
        'You are not Connected to Server!',
        'error',
        error
      )
    })
    
    
  }
  }
  return (
    <div>
      <Header/>
      
      <div class="container">
        
        
        {
        (!alert)?
          <>
          <div class="center">
        <Inputbox ids={"input-box"} value={"Enter Paragraph"}/>
         </div>
         <div  class="center" style={{marginTop: "10px",marginBottom: "-100px"}}>
         <Button text="submit"  onClick={handleSubmit}/>
         </div>
         <h5 class="center"> Server Address</h5>
         <div  class="form2 center">
        <input onChange={handleServerChange} type="text" id="server_ids"
        class="input2 form2_input" autocomplete="off" placeholder=" "/>
        {/* <label for="name" class="label2 form_label2">{value}</label> */}
    </div>
         </>:<>
         <div style={{marginTop: '100px'}}>
        {/* <ReactLoading type={"bars"} color={"#000"}  /> */}
        {(!done)?
          <Lottie options={defaultOptions1}
              height={400}
              width={400}
              />:
          <Lottie options={defaultOptions2}
              height={400}
              width={400}
              />
        }
        </div>
         </>
        }
      
      </div>
      <div
        style={{
          position: "absolute",
          left: "-1000px",
          top: 0,
        }}
      >
        
      </div>
    </div>   
    
  )
}

export default NotesPage;