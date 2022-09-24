import React,{useState} from 'react'

function Li() {
  const [movie,setMovie] = useState('')
  const [rating,setRating] = useState()
  const [duration,setDuration] = useState('')
  const [data,setData] = useState({movie:'',duration:'',rating:0})
  const styl = { width: '20rem', margin: 'left', display: 'block' }
  const handlechange=(e)=>{
    
    e.preventDefault()
    // if(e.target.name==='movie'){
    //   setMovie(e.target.value)
    // }
    // if(e.target.name==='rating'){
    //   setRating(e.target.value)
    // }
    // if(e.target.name === 'duration'){
    //   // setDuration(e.target.value)
    //   // console.log(e.target.value)
    //   let num = e.target.value.match(/\d+/g)
    //     var time = e.target.value.match(/[a-zA-Z]+/g);
    //     if(time[0] === "m" || time[0] ==="M"){
    //       let conv = num;
    //       var Hours = (conv /60).toFixed(1)
    //       setDuration(`${Hours} Hrs`)
    //     }
    //     else if(time[0] === 'H' || time[0] ==="h"){
    //       let hour = e.target.value.match(/\d+/g)
    //       hour[0]>5 ? alert("exceed"):
    //       setDuration(`${hour[0]} Hrs`)
    //     }
    // }
    setData({...data,[e.target.name]:e.target.value})
    
}

// const Duration = (e)=>{
//   e.preventDefault()
//         let num = e.target.value.match(/\d+/g)
//         var time = e.target.value.match(/[a-zA-Z]+/g);
//         if(time[0] === "m" || time[0] ==="M"){
//           let conv = num;
//           var Hours = (conv /60).toFixed(1)
//           setDuration(`${Hours} Hrs`)
//         }
//         else if(time[0] === 'H' || time[0] ==="h"){
//           let hour = e.target.value.match(/\d+/g)
//           hour[0]>5 ? alert("exceed"):
//           setDuration(`${hour[0]} Hrs`)
//         }
// }

const handlesubmit = (e)=>{ 
  e.preventDefault()
  // setData({...data,movie,duration,rating})
        let num = data.duration.match(/\d+/g)
        var time = data.duration.match(/[a-zA-Z]+/g);
        if(time[0] === "m" || time[0] ==="M"){
          let conv = num;
          var Hours = (conv /60).toFixed(1)
          setData({...data,duration:`${Hours} Hrs`})
        }
        else if(time[0] === 'H' || time[0] ==="h"){
          let hour = data.duration.match(/\d+/g)
          hour[0]>5 ? alert("exceed"):
          setData({...data,duration:`${hour[0]} Hrs`})
       }
  //setData({...data,movie,duration,rating})
  console.log(data)
  // console.log(duration)

}
  return (
    <div style={{ width: '28rem', height: '23rem' }} className='bg-success container my-5'>
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
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Duration<span className='text-danger'>*</span></label>
                              <input className="form-control" placeholder=' Enter duration' style={styl} type="text" name="duration"  onChange={(e)=>handlechange(e)} />
                          </div>
                          <input type="submit" style={{margin:'auto',display:'block'}} className="btn btn-primary" value="Submit" />
                          </form>
                </div>
      </div>
    </div>
  )
}

export default Li