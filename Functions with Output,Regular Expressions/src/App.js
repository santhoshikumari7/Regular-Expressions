
import './App.css';
import SSCStudent from './components/SSCStudent';
import TenthMarkSheet from './components/TenthMarkSheet';

function App() {

  let generateAge = ()=>{
   return 35;
};

let age =generateAge();

console.log(age);

let calculateResult = (engMarks,telMarks,hindMarks,mathMarks,sciMarks,sociMarks)=>{
  let totalMarks = engMarks + telMarks + hindMarks + mathMarks+ sciMarks + sociMarks;

  let perc = totalMarks/600*100;

  let result;
  let passMarks = 35;

  if(engMarks >= passMarks &&
    telMarks >= passMarks &&
    hindMarks >= passMarks &&
    mathMarks >= passMarks &&
    sciMarks >= passMarks &&
    sociMarks >= passMarks
  ){
    result ="pass";
  }else{
    result = "fail";
  }

  let summary = {
    tot:totalMarks,
    per:perc,
    res:result
  };

  return summary;

};

let anvithaResults = calculateResult(56,77,89,76,85,68);

console.log(anvithaResults);

let navishaResults = calculateResult(66,77,88,99,55,44);

console.log(navishaResults);

let useNav = ()=>{
  return()=>{
    console.log("I am a returned function");
  };
};

let uNav = useNav();

uNav();

  return (
    <div className="App">
      <h1>Learning Functions With Return Type</h1>
      <SSCStudent name="divya"/>
      <TenthMarkSheet/>
        </div>
  );
}

export default App;
