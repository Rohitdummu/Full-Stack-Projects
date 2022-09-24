import React,{useState} from 'react'

function Li() {
  const [movie,setMovie] = useState('')
  const [rating,setRating] = useState()
  const [duration,setDuration] = useState('')
  const [data,setData] = useState({})
  const [msg,setMsg] = useState("")
  const [msg1,setMsg1] = useState("")
  const styl = { width: '20rem', margin: 'left', display: 'block' }
  const handlechange=(e)=>{
    
    e.preventDefault()
    if(e.target.name==='movie'){
      setMovie(e.target.value)
    }
    if(e.target.name==='rating'){
      if(e.target.value > 100){
        setMsg1("limit exceeded")
      }
      else{
        setMsg1("")
        setRating(e.target.value)
      }
    }
    if(e.target.name === 'duration'){
      try{
        const regex = /^\d+(.\d+)?[mMhH]$/g
        if(regex.test(e.target.value)){
          setMsg("")
          let num = e.target.value.match(/\d+/g)
          var time = e.target.value.match(/[mhMH]+/g);
          if(time[0] === "m" || time[0] ==="M"){
            let conv = num;
            var Hours = (conv /60).toFixed(1)
            setDuration(`${Hours} Hrs`)
          }
          else if(time[0] === 'H' || time[0] ==="h"){
            let hour = e.target.value.match(/^\d+(.\d+)?/g)
            let b = parseInt(hour[0]);
            b > 4 ? setMsg("exceed"):
            setDuration(`${hour[0]} Hrs`)
          }
        }
        else if(!regex.test(e.target.value)){
          setMsg("specify time in minutes or hours")
        }
        //setData({...data,movie:movie,rating:rating,Time:duration})
      }
      catch(err){
        console.log(err)
      }
    }
}
const handlesubmit = (e)=>{ 
  e.preventDefault()
  console.log(duration,movie,rating)
  //console.log(data)
  fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    movie:movie,rating:rating,Time:duration
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
  return (
    <div style={{ width: '28rem', height: '23rem' }} className=' container my-5'>
      <div className='row'>
                <div className='col p-5'>
                          <form onSubmit={(e)=>{handlesubmit(e)}}>
                          <div className="mb-3">
                              <label className="form-label">Movie Name<span className='text-danger'>*</span></label>
                              <input className="form-control"  placeholder=' Enter movie name' style={styl} type="text" name="movie" onChange={(e)=>handlechange(e)}/>
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Rating<span className='text-danger'>*</span></label>
                              <input className="form-control" placeholder=' Enter rating' style={styl} type="number" name="rating" onChange={(e)=>handlechange(e)}/>
                              {msg1.length!==0 ? <span className="text-danger">{msg1}</span>:null}
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Duration<span className='text-danger'>*</span></label>
                              <input className="form-control" placeholder=' Enter duration' style={styl} type="text" name="duration"  onChange={(e)=>handlechange(e)} />
                              {msg.length!==0 ? <span className="text-danger">{msg}</span>:null}
                          </div>
                          <input type="submit" style={{margin:'auto',display:'block'}} className="btn btn-primary" value="Submit" />
                          </form>
                </div>
      </div>
    </div>
  )
}

export default Li