import { useCallback, useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";

const INPUT_INFO = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
}

function App() {

  const [inputInfo, setInputInfo] = useState({...INPUT_INFO});

  const handleInputChange = useCallback((e, typeContent)=>{
    setInputInfo((prevInputInfo)=>{
      return {
        ...prevInputInfo,
        [typeContent]: +e.target.value,
      };
    });
  }, []);

  return (
    <>
      <Header/>
      <main>
        <UserInput onChange={handleInputChange}/>
        <Result data={inputInfo}/>
      </main>
    </>
  )
}

export default App
