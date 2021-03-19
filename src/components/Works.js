import React, { useState } from 'react'
import image1 from "../images/utsuwa.png";
import image2 from "../images/coffee.png";
import image3 from "../images/nightmarket.png";
const Works = () => {
  const [header] = useState({
    subHeading: '作品集',
  })
  const [state] = useState([
    {
      id: 1,
      image: image1,
      title: "窯 - utsuwa",
      msgimage: "圖片處理 : Ai Ps Xd",
      msgfont: 'Html CSS JS Sass Bootstrap React',
      msgback: '後端語言/框架 : Node MySQL',
    },
    {
      id: 2,
      image: image2,
      title: "咖啡電商",
      msgimage: "圖片處理 : Ai Ps",
      msgfont: 'Html CSS JS Sass Bootstrap',
      msgback: '後端語言/框架 : PHP MySQL',
    },
    {
      id: 3,
      image: image3,
      title: "Fun松饒河趣",
      msgimage: "圖片處理 : Ai Ps",
      msgfont: 'Html CSS JS Flash',
      msgback: '後端語言/框架 : 無',
    },

  ])
  return (
    <div className="Works">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((Works) => (
            <div className="col-4" key={Works.id}>
              <div className="work">
                <div className="workHeading">
                  <div className="works_img">
                    <img src={Works.image} alt="" width="300" />
                  </div>
                </div>
                <div className="work__rs">
                  <span>{Works.title}</span>
                </div>
                <ul>
                  <li className="works_skill">運用技術</li>
                  <li>{Works.msgimage}</li>
                  <li>前端語言/框架 : </li>
                  <li>{Works.msgfont}</li>
                  <li>{Works.msgback}</li>
                </ul>
                {/* <div className="work__btn">
                  <a href="" className="btn btn-outline">
                    查看更多
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
