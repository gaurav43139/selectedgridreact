
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [twodmatrix,setTwodmatrix]=useState([])
  const [start,setStart]=useState([])
  const [end,setEnd]=useState([])
  function creatematrix(){
    let matrix=[]
    for(let i=0;i<=9;i++){
      for (let j=0;j<=9;j++){
        const obj={pos:[i,j],isColor:false}
        matrix.push(obj)
      }
    }
    setTwodmatrix(matrix)
  }
  console.log(twodmatrix,'m')
  useEffect(()=>{creatematrix()},[])

  function handledrag(e,item){
    setStart(item.pos)
  }
  function handledrop(e,item){
    setEnd(item.pos)
  }
  console.log(start,'s')
  console.log(end,'e')

  useEffect(()=>{
     color(start,end)
  },[start,end])

  function color(start,end){
    let cells=document.querySelectorAll('.cell')
    const [startRow,startCol]=start
    const [endRow,endCol]=end
    
    cells.forEach(cell => cell.classList.remove('selected')) //here i am removing the previous selection
    for(let i=startRow;i<=endRow;i++){
      for(let j=startCol;j<=endCol;j++){
        cells[i*10+j].classList.add('selected')

      }
    }

  }

  return (
    <div className='app'>
      <div className='board'>
        {twodmatrix.map((item,i)=>{ 
          return <div 
          key={i}
          draggable 
          className='cell'
          onDragStart={(e)=>handledrag(e,item)}
          onDragOver={(e)=>handledrop(e,item)}
          
          >{item.pos}</div>
        })}
      </div>
      
    </div>
  )
}

export default App
