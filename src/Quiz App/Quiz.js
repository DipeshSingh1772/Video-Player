import React from 'react'
import { useState } from 'react';
let score = 0;
let index = 0;
let ans = 0;
const Quiz = (props) => {

    const[notanswer, setnotanswer] = useState("");
    const[dataindex,setdataindex] = useState(0);
    const[showscore, setshowscore] = useState(0);

    const handlechange = (event) => {
        ans = event.target.id;

        if(ans===props.data[index].Ans)
        {
            score = score + 1 ;
        }

    }

    const handlesubmit = () => {  
   
        if(ans===0)
        {
            setnotanswer("You Are Not Answered !")
        }
        else
        {
            setnotanswer("");
            if(dataindex <= props.data.length - 1)
            {
                index = index + 1;
                setdataindex(index);
                setshowscore(score);
            }                
        }
    }

    const handleAgain = () => {
        index=0;                           
        score=0;                     //here reset all the stuff to restart quiz
        setdataindex(0);
        setshowscore(0);
    }

    return(
        <div className="main_div">
            { dataindex > props.data.length - 1 ?
            
            <div>
                <h1>Your Total Score: {showscore}</h1>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary" onClick={handleAgain}>Start Again</button>
                </div>
            </div>
            
            : 
            
            <div className="main_div">
                <h3>{notanswer}</h3>
                <div className="child_div">
                    <h1 className="question" >{props.data[dataindex].question}</h1>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="ans1" value="option1" onChange={handlechange} />
                        <label class="form-check-label" for="exampleRadios1"> {props.data[dataindex].a}</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="ans2" value="option2" onChange={handlechange} />
                        <label class="form-check-label" for="exampleRadios1"> {props.data[dataindex].b}</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="ans3" value="option3" onChange={handlechange} />
                        <label class="form-check-label" for="exampleRadios1"> {props.data[dataindex].c}</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="ans4" value="option4" onChange={handlechange} />
                        <label class="form-check-label" for="exampleRadios1"> {props.data[dataindex].d}</label>
                    </div>

                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
                    </div>
                </div>
            </div>

        }
        </div>
    )
}

export default Quiz;