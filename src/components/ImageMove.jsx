import footerImg from "../assets/Banner.png";
import "../styles/imageMove.css";
const ImageMove=()=>{
   return(
    <div className="image-scroll">
        <img src={footerImg} alt="Footer Banner" />
      </div>
   );
}
export default ImageMove;