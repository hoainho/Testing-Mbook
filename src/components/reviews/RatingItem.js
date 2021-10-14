import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classname';
export default function RatingItem(props) {
    const {avatar= '', author_name= '',time= '', book= '',title= '',content= ''} = props
    const [like, setLike] = useState(false);
    const handleLikeReply = () => {
        let newValue = like;
        newValue = !newValue;
        setLike(newValue);
    }
    return (
        <div className="action__list rating">
            <div className="action__list-avatar rating__avatar">
                <img className="action__list-avatar-image" src={avatar} />
            </div>
            <div className="action__list-comments rating__content">
                <div >
                    <h3 className="action__list-comments-name rating__content-title">{author_name}</h3>
                    <span className="rating__content-date">
                        <i class="fa fa-clock-o pr-2" aria-hidden="true"></i> {time}
                    </span>
                </div>
                <div className="rating__content-container">
                    <div className="rating__content-container-image">
                        <img className="rating__content-container-image-pic" src={book} alt="image" />
                    </div>
                    <div>
                        <div className="rating__content-container-decsription">
                            <h2 className="rating__content-container-decsription-title">
                                {title}
                            </h2>
                            <p className="rating__content-container-decsription-text">
                               {content}
                            </p>
                            {/* <Link to="/reviewsDetails"> Đọc tiếp</Link> */}
                            {/* <a href="/reviewsDetails"> Đọc tiếp</a> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
