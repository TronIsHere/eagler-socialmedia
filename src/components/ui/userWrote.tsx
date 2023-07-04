import { faBookBookmark, faBookmark, faCircle, faComment, faCommentDots, faFeather, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";


const UserWroteColumn:FC = ()=>{
    return(
        <div className="border-b-2 border-whiteGray pb-8 p-5">
            <div className="flex">
                <img src="https://placehold.co/500x500?text=Hello+World" alt="" className="rounded-full avatar-small" />
                <span className="text-white ml-5">Erwin Aghajani  👋</span>
                <span className="text-low-color-accent ml-2 cursor-pointer hover:text-accent">@Feranki</span>
                <div className="bg-low-color-accent rounded-full w-1 h-1 custom-dot-margin"></div>
                <div className="text-low-color-accent ml-2">5d</div>
            </div>
            <div className="ml-16 -mt-3">
            <p className=" text-white    ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui vero perferendis labore Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, neque temporibus beatae est, hic aut qui dolorem, voluptates rerum distinctio dignissimos eos ea! <br></br>
             Veniam magni est nobis sequi, iusto quae! </p>
             <br />
             <p className="text-links">#eagler #startup #competition</p>
             <br />
             <p className="text-white">Follow us on the eagler</p>
             <div className="flex mt-5 text-low-color-accent">
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <span className="ml-2 -mt-1 mr-4">25</span>
                <FontAwesomeIcon icon={faFeather}></FontAwesomeIcon>
                <span className="ml-2 -mt-1 mr-4">2</span>
                <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
                <span className="ml-2 -mt-1 mr-4">5</span>
                <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
             </div>
             </div>
           
        </div>

    )
}

export default UserWroteColumn