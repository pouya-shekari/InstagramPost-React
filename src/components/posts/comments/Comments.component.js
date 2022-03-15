import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from "@fortawesome/free-regular-svg-icons";

const Comments = (props)=>{
    return(
        <div className="Post-comments">
            <div className="Comment">
                <div className="Comment-user-profile">
                    <img src={props.avatar} alt="User Comment Profile"/>
                </div>
                <div className="Comment-comment">
                    <div className="Comment-text">
                        <span className="Post-caption-username">{props.username}</span>
                        {props.comment}
                    </div>
                    <div className="Comment-detail">
                        <span>{props.time}</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className="Comment-like">
                    {props.isLike ? <FontAwesomeIcon style={{color:'red'}} icon={faHeartSolid} /> : <FontAwesomeIcon icon={faHeart} />}
                </div>
            </div>

        </div>
    )
}

Comments.propTypes = {
    username : PropTypes.string.isRequired,
    avatar: PropTypes.any.isRequired,
    comment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    isLike : PropTypes.bool.isRequired
}

export {Comments}