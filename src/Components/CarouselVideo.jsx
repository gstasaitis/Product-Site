const Carouselvideo = () => {
  const videoUrl = './src/media/video/productvideo.mp4';

  return (
    <div>
     <video autoPlay muted loop playsInline src={videoUrl} alt="productvideo" />
    </div>
  );
};

export default Carouselvideo;
