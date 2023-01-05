import Bikalpa from "./Bikalpa1.png"
import "./MyImg.css"
export default function MyImg(){
    return(
        <>
            <div className="myimg-container">
                <svg id="myimg-svg" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
	                <path fill="#57E089" d="M408,336Q351,432,241,430Q131,428,75,334Q19,240,70.5,138Q122,36,239,37.5Q356,39,410.5,139.5Q465,240,408,336Z" />
                    <image xlinkHref={Bikalpa} width="480" height="480" preserveAspectRatio="xMidYMid meet" />
                </svg>
            </div>
        </>
    )
}
