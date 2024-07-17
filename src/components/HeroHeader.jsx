import "../styles/heroheader.css";
const HeroHeader =()=>{
   return(
    <div className="header">
        <div className="left-header">
          <div className="left-top line yellow"></div>
          <div className="left-middle line yellow"></div>
          <div className="left-bottom line yellow"></div>
        </div>
        <div className="main">
           <p>Leaderboard</p>
        </div>
        <div className="right-header">
            <div className="right-top line blue"></div>
            <div className="right-middle line blue"></div>
            <div className="right-bottom line blue"></div>
        </div>
    </div>
   );
}
export default HeroHeader;