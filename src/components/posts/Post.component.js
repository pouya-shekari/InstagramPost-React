import PropTypes from 'prop-types'
import {Comments} from './comments/Comments.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
const Post = (props) =>{
    return (
        <>
            <div className="Post">
                <div className="Post-header">
                    <div className="Post-header-profile-image">
                        <img src={props.avatar} alt="Post Profile Image"/>
                    </div>
                    <div className="Post-header-username">
                        {props.username}
                    </div>
                    <div className="Post-header-more-btn">
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
                <div className="Post-image">
                    <img src={props.postImage} alt="Post Image"/>
                </div>
                <div className="Post-caption">
                    <span className="Post-caption-username">{props.username}</span>
                    {props.caption}
                    <div className="Post-caption-time">
                        {props.time}
                    </div>
                </div>
                {props.comments.map(item=>{
                    return(
                        <Comments userName={item.username} avatar={item.avatar} time={item.time}
                            comment={item.comment} isLike={item.isLike}
                        />
                    )
                })}
            </div>
        </>
    )
}

Post.defaultProps = {
    caption: "",
}

Post.propTypes = {
    avatar: PropTypes.any.isRequired,
    username: PropTypes.string.isRequired,
    postImage: PropTypes.any.isRequired,
    caption:PropTypes.string,
    time: PropTypes.string.isRequired
}

export {Post}