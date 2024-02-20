import productVideo from '../media/video/productvideo.mp4'; 

const CarouselVideo = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline src={productVideo} alt="productvideo" />
    </div>
  );
};

export default CarouselVideo;
