import './DetailPost.css'

const DetailPost = ({ post }) => {

    return (
        <a href={post?.URL} target='_blank' className="detail-post">
            <div>
                <img className="img-post" src={post?.imgUrl} alt="post" />
            </div>
            <div className="header-post">
                {post?.header}
            </div>
        </a>
    )
}

export default DetailPost;
