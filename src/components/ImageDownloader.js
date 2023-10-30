
const ImageDownloader = (photoUrl, fileName) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default ImageDownloader