import React, { useState } from 'react'

const Skills = () => {
  const [skills] = useState({
    subHeader: '技能',
  })
  return (
    <div className="Skills h-800">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{skills.subHeader}</h1>
          <p className="mainContent">{skills.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row skill-row">
          <div className="col-4 skill-rwd">
            <h2>前端</h2>
            <ul className="skills__ul">
              <li>網頁響應式切版 - HTML/CSS、Boostrap RWD</li>
              <li>CSS模組化 - Bootstrap + SCSS客製化樣式</li>
              <li>網頁動態效果 - jQuery、CSS transform</li>
              <li>元件設計/圖片處理 - AI/PS</li>
              <li>視覺稿 - XD</li>
              <li>框架開發電商平台 - React</li>
            </ul>
          </div>
          <div className="col-4 skill-rwd">
            <h2>後端</h2>
            <ul className="skills__ul">
              <li>串接資料庫 - 連接MySQL串接PHP api</li>
              <li>伺服器/路由建立/串接資料庫 - Node/express</li>
            </ul>
          </div>
          <div className="col-4 skill-rwd">
            <h2>其他</h2>
            <ul className="skills__ul">
              <li>版本控制 - 使用 Git 進行與團隊協作</li>
              <li>影片剪接 - PR</li>
            </ul>
          </div>
          <div class="bg-polygon-three"></div>
          <div class="big-polygon-three"></div>
        </div>
      </div>
    </div>
    
  )
}

export default Skills
