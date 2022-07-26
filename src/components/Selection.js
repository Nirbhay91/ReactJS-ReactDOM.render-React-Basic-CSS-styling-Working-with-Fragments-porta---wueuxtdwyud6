import React, {useState} from 'react'
// import '../styles/App.css';
function Selection({applyColor}) {
  const [state,setState] = useState({background:''});
  return (
    <div onClick={()=>{
      applyColor(setState);
    }} style={{backgroundColor: `${state.background}`}} className='fix-box'>
      <h2 className='subheading'>Selection</h2>
    </div>
  )
}

export default Selection
