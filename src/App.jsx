import './App.css'
import Card from './componets/Card'
import Data from './data.json'
import test from './test.json'


function App() {
  return (
          let items = [];
          for (let x=0; x<
            Data.length; x++){
            items.push()
          }

    <>
    <div>
      <h1 className='headStyle'>ToDo App</h1>
      <Card titleText = {Data[2].title} DescText = {test[].desc} />    
      <Card titleText = "Sanu" DescText = "She is my Happiness " /> 
      <Card titleText = "Pagol" DescText = "She is my lifeline " /> 

      
    </div>    
    </>
  )
}

export default App


