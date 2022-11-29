import {React,useEffect,useRef,useState} from 'react';
import '@progress/kendo-theme-material/dist/all.css';
// import { DropDownList } from "@progress/kendo-react-dropdowns";
import {Button} from '@progress/kendo-react-buttons'
import {PDFExport,savePDF} from '@progress/kendo-react-pdf';
import companylogo from '../images/logo.png'
import Inputdaba from '../components/Inputdaba';
// import {InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
var load=false;
var questions=[];
var answer_idx=[];
const QuestionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const ddData = [
    { text: "A4", value: "size-a4" },
    { text: "Letter", value: "size-letter" },
    { text: "Executive", value: "size-executive" }
  ];
  function createQuestion(quesno,ques,opt1,opt2,opt3,opt4){
    return {
      quesno,ques,opt1,opt2,opt3,opt4
    };
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

  
  // console.log(location.state);
  // console.log("length: ", location.state.ques.length);
  console.log(load);
  if(load===false){
  for (var i=0;i<location.state.ques.length;i++)
  {
    var opt2="";
    var opt3="";
    var opt4="";
    var count=location.state.distractor[i].length;
    if(count!=0)
      {
        opt2=location.state.distractor[i][count-1];
        count--;
      }
    if(count!=0)
      {
        opt3=location.state.distractor[i][count-1];
        count--;
      }
    if(count!=0)
      {
        opt4=location.state.distractor[i][count-1];
        count--;
      }
    var answer = [];
    answer.push(location.state.ans[i]);
    answer.push(opt2);
    answer.push(opt3);
    answer.push(opt4);
    shuffleArray(answer);
    for(var j=0;j<answer.length;j++)
    {
        if(answer[j]===location.state.ans[i])
            {
              answer_idx.push(j);
              break;
            }
    }
    questions.push(
      createQuestion(i+1,location.state.ques[i],answer[0],answer[1],answer[2],answer[3]));
      // console.log(questions);
    }
console.log(answer_idx);
load=true;
}
  var [name,Setname] = useState("XYZ");
  var [designation,Setdesignation]=useState("None");
  var [institute,Setinstitute] = useState("nil");
  var [topic,Settopic] = useState("");
  var [date,Setdate]= useState();
  var [nques,Setnques] = useState(5);

  const [layoutSelection, setLayoutSelection] = useState({
    text: "A4",
    value: "size-a4"
  });
  const updatePageLayout = event => {
    var x= event.target.value;
    var y;
    if(x==="size-a4")
      y="A4";
    else if(x==="size-letter")
      y="Letter";
    else
      y="Executive";
    // console.log(x,y);    
    setLayoutSelection({text: y,
    value: x});
  };
  const PDFExportComponent = useRef(null);
  const pdfExportComponent2 = useRef(null);
  const currentArea = useRef(null);
  const handleExportWithComponent=(event)=>{
      PDFExportComponent.current.save();
  };
  const handleExportWithComponent2=(event)=>{
    var ele=document.getElementsByClassName('ans');
    console.log(ele);
    for(var i=0;i<ele.length;i++)
    {
      ele[i].style.fontWeight='bold';
      ele[i].style.color='green';
    }
    // ele.style. = 'green';
    // ele.style.fontWeight ='bold';
    PDFExportComponent.current.save();
    savePDF(currentArea.current,{paperSize: 'A4',keepTogether: 'div',forcePageBreak: ".page-break"});
  }
  const handleExportWithMethod=(event)=>{
      savePDF(currentArea.current,{paperSize: 'A4',keepTogether: 'div',forcePageBreak: ".page-break"});
  };
  const UpdateQuesNo=(event)=>{
    var x = event.target.value;
    if(x=="5")
      Setnques(5);
    else if(x=="10")
      Setnques(10);
  }
  const handlechange=(event)=>{
      var x=document.getElementById("Name").value;
      var y=document.getElementById("Designation").value;
      var z=document.getElementById("Institute").value;
      var u=document.getElementById("Topic").value;
      Setname(x);
      Setdesignation(y);
      Setinstitute(z);
      Settopic(u);
    }
  const handleBack=()=>{
    load=false;
    navigate("/note");
    
  }
    var today = new Date();
    
  return (
    
    <div id="example">
      <div className="box wide hidden-on-narrow">
        
      <ion-icon class="back" onClick={handleBack} style={{fontSize: "50px", marginRight: "50px"}} name="arrow-undo-circle-outline"></ion-icon>
      
        <div className="box-col">
          <h4>Select a Page Size</h4>
          <select  name="selectList" id="selectList" onChange={updatePageLayout}>
          <option  value="size-a4">A4</option>
          <option  value="size-letter">Letter</option>
          <option  value="size-executive">Executive</option>
          </select>
  
        </div>
        <div className="box-col">
          <h4>No. of questions</h4>
          <select  name="selectList" id="selectList" onChange={UpdateQuesNo}>
          <option  value="5">5</option>
          <option  value="10">10</option>
          </select>
  
        </div>
        <div className="box-col">
          {/* <Inputdaba fun={handlechange} value="Name"/> */}
          <div class="formd">
        <input onChange={handlechange} type="text"  id={"Name"}
        class="inputd form_inputd" autocomplete="off" placeholder=" "/>
        <label for="name" class="labeld form_labeld">{"Name"}</label>
    </div>
        </div>
        <div className="box-col">
          {/* <Inputdaba fun={handlechange} value="Designation"/> */}
          <div class="formd">
        <input onChange={handlechange} type="text"  id={"Designation"}
        class="inputd form_inputd" autocomplete="off" placeholder=" "/>
        <label for="name" class="labeld form_labeld">{"Designation"}</label>
    </div>
        </div>
        <div className="box-col">
          {/* <Inputdaba fun={handlechange} value="Institute"/> */}
          <div class="formd">
        <input onChange={handlechange} type="text"  id={"Institute"}
        class="inputd form_inputd" autocomplete="off" placeholder=" "/>
        <label for="name" class="labeld form_labeld">{"Institute"}</label>
    </div>
        </div>
        <div className="box-col">
          {/* <Inputdaba fun={handlechange} value="Institute"/> */}
          <div class="formd">
        <input onChange={handlechange} type="text"  id={"Topic"}
        class="inputd form_inputd" autocomplete="off" placeholder=" "/>
        <label for="name" class="labeld form_labeld">{"Topic"}</label>
    </div>
        </div>
      </div>
{ parseInt(nques)===5?
      <div className="page-container hidden-on-narrow">
        <PDFExport ref={PDFExportComponent}>
          <div className={`pdf-page ${layoutSelection.value}`}>
            <div className="inner-page">
              <div className="pdf-header">
                <span className="company-logo">
                  <img src={companylogo} alt="QuestionGen" width={40}/> QuestionGen
                </span>
                <span className="invoice-number" ><h3>Topic: {topic}</h3></span>
              </div>
              <div className="pdf-footer">
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}} className='name'>
                  {name}
                </div>
                <div style={{float: 'right'}}><h4>Date:</h4>{today.getDate()+ '-' +(today.getMonth() + 1) + '-'+ today.getFullYear() } </div>
                </div>
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}}>
                  <br />
                  {designation}
                
                  <br />
                  {institute}
                </div>
                </div>
              </div>
                <div className="pdf-body">
                <div id="grid" />
                {
                  questions.map((row)=>(
                    parseInt(row.quesno)<=5?
                    <div style={{marginBottom: "15px"}}>
                      <h4>Q{row.quesno}.{row.ques}</h4>
                      <ol style={{marginLeft: "20px"}}>
                        <li class={answer_idx[parseInt(row.quesno)-1]===0 ? "ans":"non"} >{row.opt1}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===1 ? "ans":"non"} >{row.opt2}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===2 ? "ans":"non"} >{row.opt3}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===3 ? "ans":"non"} >{row.opt4}</li>
                      </ol>
                    </div>:<></>
                  ))
                }
              </div>
              
            </div>
          </div>
        </PDFExport>
      </div>:<>
      <PDFExport forcePageBreak=".page-break" ref={PDFExportComponent}>
      <div className="page-container hidden-on-narrow">
        
          <div className={`pdf-page ${layoutSelection.value}`}>
            <div className="inner-page">
              <div className="pdf-header">
                <span className="company-logo">
                  <img src={companylogo} alt="QuestionGen" width={40}/> QuestionGen
                </span>
                <span className="invoice-number" ><h3>Topic: {topic}</h3></span>
              </div>
              {/* <div className="pdf-footer">
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}} className='name'>
                  {name}
                </div>
                <div style={{float: 'right'}}><h4>Date:</h4>{today.getDate()+ '-' +(today.getMonth() + 1) + '-'+ today.getFullYear() } </div>
                </div>
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}}>
                  <br />
                  {designation}
                
                  <br />
                  {institute}
                </div>
                </div>
              </div> */}
                <div className="pdf-body">
                <div id="grid" />
                {
                  questions.map((row)=>(
                    parseInt(row.quesno)<=5?
                    <div style={{marginBottom: "15px"}}>
                      <h4>Q{row.quesno}. {row.ques}</h4>
                      <ol style={{marginLeft: "20px"}}>
                        <li class={answer_idx[parseInt(row.quesno)-1]===0 ? "ans":"non"} >{row.opt1}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===1 ? "ans":"non"} >{row.opt2}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===2 ? "ans":"non"} >{row.opt3}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===3 ? "ans":"non"} >{row.opt4}</li>
                      </ol>
                    </div>:<></>
                  ))
                }
              </div>
              
            </div>
          </div>
        
      </div>
      <div className="page-container hidden-on-narrow page-break">
        
          <div className={`pdf-page ${layoutSelection.value}`}>
            <div className="inner-page">
              {/* <div className="pdf-header">
                <span className="company-logo">
                  <img src={companylogo} alt="QuestionGen" width={40}/> QuestionGen
                </span>
                <span className="invoice-number" ><h3>Topic: {topic}</h3></span>
              </div> */}
              <div className="pdf-footer">
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}} className='name'>
                  {name}
                </div>
                <div style={{float: 'right'}}><h4>Date:</h4>{today.getDate()+ '-' +(today.getMonth() + 1) + '-'+ today.getFullYear() } </div>
                </div>
                <div style={{display: 'block',clear: 'both'}}>
                <div style={{float: 'left'}}>
                  <br />
                  {designation}
                
                  <br />
                  {institute}
                </div>
                </div>
              </div>
                <div className="pdf-body">
                <div id="grid" />
                {
                  questions.map((row)=>(
                    parseInt(row.quesno)>5?
                    <div style={{marginBottom: "15px"}}>
                      <h4>Q{row.quesno}. {row.ques}</h4>
                      <ol style={{marginLeft: "20px"}}>
                        <li class={answer_idx[parseInt(row.quesno)-1]===0 ? "ans":"non"}>{row.opt1}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===1 ? "ans":"non"}>{row.opt2}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===2 ? "ans":"non"}>{row.opt3}</li>
                        <li class={answer_idx[parseInt(row.quesno)-1]===3 ? "ans":"non"}>{row.opt4}</li>
                      </ol>
                    </div>:<></>
                  ))
                }
              </div>
              
            </div>
          </div>
      </div>
      </PDFExport>
      </>
      }
      
      <div className="box wide hidden-on-narrow">
        <div className="boxcenter">
            
            <Button style={{background:"#ffc107",fontWeight: "bold"}} onClick={handleExportWithComponent}>
              Question
            </Button>
            <Button style={{background:"#ffc107",fontWeight: "bold"}} onClick={handleExportWithComponent2}>
              Answer
            </Button>
          </div>
    </div>
    </div>
   
  )
}

export default QuestionPage