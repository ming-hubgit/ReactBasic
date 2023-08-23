import React from 'react';
import "./App.css";
//import ImportFuncComponent from './Components/ImportFuncComponent';
//import ImportComponent from "./R003_ImportComponent"
//import LifecycleEx from "./R004_LifecycleEx";
//import LifecycleExFunc from './Components/LifecycleExFunc';
//import LifecycleEx from "./R005_LifecycleEx"
//import LifecycleExFuncSecond from './Components/LifecycleExFuncSecond';
//import LifecycleEx from "./R006_LifecycleEx"
//import LifecycleExFuncThird from './Components/LifecycleExFuncThird';
//import LifecycleEx from "./R007_LifecycleEx";
//import LifecycleEx from "./R008_LifecycleEx";
//import Es6 from "./R009_Es6";
//import SpreadOperator from "./R011_SpreadOperator";
//import ClassPrototype from './R012_Class&Prototype';
//import ArrowFunc from './R013_ArrowFunction';
//import ForEach from "./R014_ForEach"
//import Map from "./R015_Map";
//import Jquery from "./R016_Jquery"
//import Props from "./R017_Props";
//import PropsDatatype from "./R018_PropsDatatype";
import PropsBoolean from "./R019_PropsBoolean";


const App = () => {
  return (
    <div>
      <h1>Strat React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
    </div>
  );
};

export default App;
