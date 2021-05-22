import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const Player = ()=>{

    const[search, setsearch] = useState("");
    const[apidata,setapidata] = useState([]);
    const[status, setstatus] = useState(1);

    const handlechange = (event) => {
        const data = event.target.value;
        setsearch(data);
        
    }

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyADAT94L9tnFQbL19lSb_P21-EmwSNyE40&type=video&maxResults=10&q=" + search ;

    const fetchapi = async() => {
        const response = await axios.get(url);
        setapidata(response.data.items);
    }

    const handleclick = () => {
        if(search==="")
            setstatus(0);
        else{
            setstatus(1);
            fetchapi();
        }
    }

    return(
        <div>

            <br/>
            <h3 className="navbar-brand" >Search Youtube Videos</h3>
            <nav class="navbar navbar-light bg-light">
                <div className="container-fluid">   
                    <p class="d-flex">            
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handlechange} />
                        <button className="btn btn-outline-success" onClick={handleclick}>Search</button>
                    </p>    
                </div>
            </nav>

            {   status===0?<h2 className="notsearch">Oops! You Not Searched, Search Something</h2>:
                apidata.map((item)=>{
                    return(
                        <iframe allowFullScreen="true" id="player" type="text/html" width="440" height="290"
                        src={`http://www.youtube.com/embed/${item.id.videoId}`}
                        title={item.snippet.title}
                        frameborder="10">   
                        </iframe>
                    )
                })
            }


        </div>
    )
}

export default Player