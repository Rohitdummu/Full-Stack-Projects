import {useEffect,useState} from "react"
import {useRef} from "react"
import "./style.css"
import axios from "axios"

function Body(){

    const [name,setName]=useState("")
    const [ratings,setRatings]=useState(0)
    const [duration,setDuration]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")

    const handleChange=(e,statename)=>{
        e.preventDefault();
        setFlag(false)
        if(statename==="name"){
            setName(e.target.value)
        }
        if(statename==="ratings"){
            setRatings(e.target.value)
        }
        if(statename === "duration"){
            console.log("check")
            try{
                console.log("check2")
              const regex = /^\d+(.\d+)?[mMhH]$/g
              if(regex.test(e.target.value)){
                console.log("check3")
                setFlag(false)
                let num = e.target.value.match(/\d+/g)
                var time = e.target.value.match(/[a-zA-Z]+/g);
                if(time[0] === "m" || time[0] ==="M"){
                  let conv = num;
                  var Hours = (conv /60).toFixed(1)
                  setDuration(`${Hours} Hrs`)
                }
                else if(time[0] === 'H' || time[0] ==="h"){
                    let hour = e.target.value.match(/^\d+(.\d+)?/g)
                    let b = parseInt(hour[0]);
                    b > 4 ? alert("exceed"):
                    setDuration(`${hour[0]} Hrs`)
                }          
              }
              else{
                setFlag(true)
                setMessage("specify time in minutes or hours")
              }
            }
            catch(err){
                console.log("check4")
              console.log(err)
            }
          }
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(duration)

        try{

            if(name==="" || ratings===0 || duration===""){
                setFlag(true)
                setMessage("Please enter valid values in every field")

            }
            // else{
            //     let lastLetter=duration.slice(-1)

            //     if(lastLetter==="m"||lastLetter==="h"){
            //         if(lastLetter==="m"){
            //             let minutes=duration.slice(0,duration.length-1)
            //             console.log(minutes)
            //             var newduration=""
            //             let hours=minutes/60
            //             newduration=newduration+hours+"h"
            //             console.log(newduration)//2h
            //             setDuration(newduration)
            //             console.log(duration)//120m
            //         }
            //     }
            //     else{
            //         setFlag(true)
            //         setMessage("Please specify time in minutes or hours")
            //     }

            // }
            // console.log(duration)
            // console.log("hit here")
            // console.log(duration)
           
                const response= axios.post("http://localhost:3001/createMovie",{
                "name":name,
                "rating":ratings,
                "duration":duration

            })

        }
        catch(error){
            console.log(error)

        }

        // setName("")
        // setRatings(0)
        // setDuration("")

    }

return(
<div className="container d-flex">
    <div class="row">
    <form class="form" id="cont1" className="mt-5 d-flex flex-column p-3 bg-light rounded">
        <label>Movie Name:</label>
        <input type="text" placeholder="Enter Movie Name" defaultValue={"any name"} onChange={(e)=>handleChange(e,"name")}></input><br></br><br></br>
        <label>Ratings:</label>
        <input type="text" placeholder="Enter Ratings"  defaultValue={"0"} onChange={(e)=>handleChange(e,"ratings")}></input><br></br><br></br>
        <label>Duration:</label>
        <input type="text" placeholder="Enter Duration" defaultValue={"120m or 2h"}  onChange={(e)=>handleChange(e,"duration")}></input><br></br><br></br>
        <button type="button" id="btn" class="btn btn-success" onClick={(e)=>handleSubmit(e)}>Add Movie</button>
        {
            flag?<div>{message}</div>:<></>
        }
    </form>
    <div className="container mt-5">
    Search Movie: <input type="text" placeholder="Search for movie by name"></input>
    <div className="container mt-5" id="cont2">
        <div class="row">

        </div>
    </div>

    </div>
   

    </div>

{/* <div className=" d-flex ">
    <form class="form" id="cont1" className="mt-5 d-flex flex-column p-3 bg-light rounded w-100" ></form>
</div> */}

{/* <div className="d-flex justify-content-center p-5 mt-5">
<form class="form" id="cont2" className="mt-5 d-flex flex-column p-3 bg-dark rounded w-100" ></form>

</div> */}


</div>


)    



}
export default Body;