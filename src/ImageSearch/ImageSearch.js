import React from 'react'
import { useState } from 'react';
import axios from 'axios'



const ImageSearch = ()=> {


    const[search, setsearch] = useState("")
    const[data, setdata]  = useState([]);
    const[status, setstatus] = useState(1)

    const handlechange = (event) => {
        const value = event.target.value;
        setsearch(value);
    }

    const url = "https://api.unsplash.com/search/photos?page=1&query=█" + search + "&client_id=R4536C12UrIund67OvF5HRNgXnuXOIacRt3jVYWYhcU"

    const fetchApi = async() => {
        const respose = await axios.get(url);
        
        if(respose.data.total===0)
        {
            setstatus(0);
        }
        else{
            setdata(respose.data.results);
            setstatus(1);
        }
    }

    const handleclick = () => {
        fetchApi();
        console.log(search)
    }
    

    return(
        <div>

            <br/>
            <h3 className="navbar-brand" >Image Search Gallary</h3>

            <nav class="navbar navbar-light bg-light">
                <div className="container-fluid">   
                    <p class="d-flex">            
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handlechange} />
                        <button className="btn btn-outline-success" onClick={handleclick}>Search</button>
                    </p>    
                </div>
            </nav>

            {   status===0? 
                <h2 className="notsearch">oops!! You Not Searched, Please Search Anything</h2>                
                : data.map((item)=>{
                    return(
                        
                        
                            <img src={item.urls.small} class="rounded float-start" alt={search}/>
                       
                    )
                })
            }

        </div>
    )
}

export default ImageSearch