import React from "react";
import "./Post.css";

const Post = (props) => {
    const { header, imgUrl, URL } = props.info;

    return (
        <a href={URL} target="_blank">
            <div className="post">
                <div>
                    <img src={imgUrl} alt={header} />
                </div>
                <div>
                    <h3>{header}</h3>
                    <p>Nguồn: {URL}</p>
                </div>
            </div>
        </a>
    );
};

export default Post;
