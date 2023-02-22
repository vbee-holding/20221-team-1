const Thumbnail = ({ link }) => {
    const url = link.replace('watch?v=', 'embed/');
    const finalUrl = url.replace('&feature=onebox', '');

    return (
        <iframe src={finalUrl} allowFullScreen width={80 + '%'} height={500 + 'px'} ></iframe >
    )
}

export default Thumbnail;
