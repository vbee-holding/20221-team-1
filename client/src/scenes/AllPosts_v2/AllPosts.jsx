import React, { useEffect, useState } from "react";
import { fetchApi } from "../../apis";
import DOMAIN from "../../config";
import Post from "../../containers/Post_v2/Post";
import "./AllPosts.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        const result = await fetchApi(`${DOMAIN}/posts`);
        if (result) setPosts(result);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="container-posts">
            {posts.map((el) => (
                <Post key={el.id} info={el} />
            ))}
        </div>
    );
};

export default Posts;
