import "./Ratings.css"
import star from "./assets/star.png"
import thanks from "./assets/tnakScreenIcon.png"
import React, { useState } from "react"
const RatingComponent = () => {

    const [clickedBtn, setClickedBtn] = useState<number>()
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleBtnclicked(button: number) {
        setClickedBtn(button)
        console.log(clickedBtn)
    }
    function submitForm(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitted(true)

    }
    return isSubmitted ? (
        <div className="container">
            <div className="ratingCard thank-you-component">
                <img src={thanks} />
                <p className="selected">You selected {clickedBtn} out of 5 </p>

                <h2 className="heading">Thank You!</h2>
                <p className="para" style={{fontSize:"18px"}}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>
            </div>
        </div>) : (
        <form onSubmit={submitForm}>
            <div className="container">
                <div className="ratingCard">
                    <img className="star" src={star} />
                    <h2 className="heading">How did we do?</h2>
                    <p className="para">Please let us know how we did with your support request.All feedback is appreciated to help us improve our offerering.</p>
                    <div className="btnGroup">
                        {[1, 2, 3, 4, 5].map(num => (<button type="button" className="page" onClick={() => handleBtnclicked(num)}>{num}</button>))}
                    </div>
                    <button disabled={clickedBtn === undefined} className="submit-btn">SUBMIT</button>

                </div>
            </div>
        </form>
    )

}

export default RatingComponent;