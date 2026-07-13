import album1 from "../../img/Review vid/vid1.mp4";
import album2 from "../../img/Review vid/vid2.mp4";
import album3 from "../../img/Review vid/vid3.mp4";
import album4 from "../../img/Review vid/vid4.mp4";
import album5 from "../../img/Review vid/vid5.mp4";
import album6 from "../../img/Review vid/vid6.mp4";


import "./ReviewVideo.css"
function ReviewVideo() {
  return(
    <>
    <div className="mt-5 ">
    <h1>SHOE IN ACTION</h1>
    <p>Watch our collection come to life
with every step and every move.</p>
<div className="video-container ">
  

  <article className="video-card ">
    <video controls>
      <source src={album1} type="video/mp4" />
    </video>
    <h3>Nike Air Force</h3>
    <p>Lightweight running performance...</p>
  </article>

  <article className="video-card">
    <video controls>
      <source src={album2} type="video/mp4" />
    </video>
    <h3>Nike Court Vision</h3>
    <p>Inspired by basketball heritage..</p>
  </article>

  <article className="video-card">
    <video controls>
      <source src={album3} type="video/mp4" />
    </video>
    <h3>Adidas VL Court</h3>
    <p>Energy return in every stride...</p>
  </article>

  <article className="video-card">
    <video controls>
      <source src={album4} type="video/mp4" />
    </video>
    <h3>Adidas Runfalcon 5</h3>
    <p>Perfect for active lifestyles...</p>
  </article>

  <article className="video-card">
    <video controls>
      <source src={album5} type="video/mp4" />
    </video>
    <h3>Puma Smashic</h3>
    <p>Retro style with modern comfort....</p>
  </article>

  <article className="video-card ">
    <video controls>
      <source src={album6} type="video/mp4" />
    </video>
    <h3>Puma Flyer Flex</h3>
    <p>Flexible and lightweight feel...</p>
  </article>

</div>
</div>
</>

  ) 
}

export default ReviewVideo