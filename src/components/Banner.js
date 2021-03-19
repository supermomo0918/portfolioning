import React,{useState} from "react"
import {
  FaGithub,
  FaMobileAlt,
  FaEnvelope,
  FaPlay,
} from "react-icons/fa";
import image from "../../images/me.png";
const Banner = () => {
  const [banner] = useState({
    phone:"0905566096",
    github:"supermomo0918",
    email:"su830918ggg@yahoo.com.tw",
    name: "蘇椲甯",
    nameen: "Winnie",
    work: "前端工程師",
    school:
      "致理科技大學",
    profession:"商務科技管理系 資訊管理學士",
    birth: "生日 : 1994/09/18",
    image: image,
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li title={banner.phone}>
                    <FaMobileAlt className="headerIcon" />
                  </li>
                  <li title={banner.github}>
                    <FaGithub className="headerIcon" />
                  </li>
                  <li title={banner.email}>
                    <FaEnvelope className="headerIcon"/>
                  </li>
                </ul>
                <h1 className="banner_name">{banner.name}
                <span className="banner_nameen">{banner.nameen}</span></h1>
                
                <span className="banner_work">{banner.work}</span>
                <p>{banner.school}<br/>
                {banner.profession}<br/>
                {banner.birth}
                </p>
                <div className="header__buttons">
                  <a href="https://pda.104.com.tw/profile/preview?vno=759uevaqi" target="_blank" className="btn-outline">
                    查看更多<FaPlay className="play"/>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
              <div className="banner__img">
                <img src={banner.image} alt="" width="450"/>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
