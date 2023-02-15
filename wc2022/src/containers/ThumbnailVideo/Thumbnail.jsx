const Thumbnail = (props) => {
    const url = props.link;
    const newUrl = url.replace('watch?v=', 'embed/');
    const finalUrl = newUrl.replace('&feature=onebox', '');

    return (
        <iframe src={finalUrl} frameborder="0" allowFullScreen width={80 + '%'} height={500 + 'px'} ></iframe >
    )
}

export default Thumbnail;
