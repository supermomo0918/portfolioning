import React, { useState } from 'react'

const About = () => {
  const [header] = useState({
    subHeader: '關於我',
    image: '/images/me-cute.png',
  })
  const [state] = useState({
    name: '蘇椲甯',
    phone: '0905566096',
    github: 'supermomo0918',
    email: 'su830918ggg@yahoo.com.tw',
  })
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-800 alignCenter">
          <div className="col-4">
            <div className="about__img">
              <img src={header.image} />
            </div>
            <div className="info__contacts">
              <div className="columns">
                <div className="info__contacts_text">
                  <strong>姓名:</strong>
                  <p>{state.name}</p>
                </div>
                <div className="info__contacts_text">
                  <strong>信箱:</strong>
                  <p>{state.email}</p>
                </div>
                <div className="info__contacts_text">
                  <strong>手機:</strong>
                  <p>{state.phone}</p>
                </div>
                <div className="info__contacts_text">
                  <strong>Github:</strong>
                  <p>{state.github}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="about__info">
              <h1>自傳</h1>
              <p className="about__info-p1">
                <strong></strong>
                我是<strong>蘇椲甯</strong>
                ，與爸媽和妹妹一起同住在蘆洲在家中是老大，個性
                <strong>具有 冒險、衝勁的精神</strong>喜歡挑戰新事物。
                <strong>興趣廣泛、有親和力，</strong>
                無論進入到什麼陌生的環境都可以很快的和團隊或合作夥伴打成一片。
                畢業於致理科技大學商務科技管理系 – <strong>資訊管理學士</strong>
                ，在學校裡曾經
                <strong>擔任羽球社副社長以及系上羽球隊副隊長</strong>
                ，在任期間除了<strong>培養團隊默契、累積規劃能力</strong>
                之外，運用<strong>自學的美工(AI)以及剪接技術(PR)</strong>
                ，協助完成社內以及隊上事務。在大學期間從C++到手機app、網頁前後端語言都有接觸過雖然覺得很有興趣，但是涉略都不深，直到從資策會網站上知道了有前端工程師這項職業，可以讓同時對視覺設計、程式語言都喜歡的我去發揮。因此在資策會開訓前在下班後的閒暇之餘充實自己，
                <strong>
                  學習HTML/CSS3重新了解網頁的結構，JS／JQuery操作DOM並運用JQuery／CSS3
                  transfrom做出動態元件(如:下拉選單、進度條…)，SCSS客製化Bootstrap元件
                </strong>
                以打穩未來的學習基底。在資策會學習的期間，彷彿打通了我的任督二脈，在大學期間，覺得學習曲線很高的
                <strong>串接資料庫CRUD</strong>
                ，在老師、同學的指導和討論下變得游刃有餘，在這樣的環境下我學會了如何運用PHP/Node
                api串接MySQL資料庫以及<strong>建立伺服器、路由。</strong>
                另外除了一邊複習之前自學和上課的內容之外，還有一邊累積個人作品，在期間內做出
                <strong>
                  咖啡電商、JS小遊戲 – 吃拉麵、JS元件(如:計算機、時鐘…)。
                </strong>
                在這段時間裡我覺得最難能可貴的是遇到了一群和自己志同道合的同學，大家一起積極進取、一起討論Bug，直到了專題製作期間，過程中組員們各自發揮專長有的人擅長設計有些人擅長制定議題，而我負責
                <strong>分享以前的經驗以及程式上執行的邏輯與方法，</strong>
                之後大家分工合作、互相監督、維持專題進度等，讓我在這次的專案開發上得到一個寶貴的經驗與回憶。在踏入程式設計的領域後，越覺得程式設計是一個充滿挑戰性的事，會遇到許多要解決的問題，而我沉浸在逐步分析的過程中，並且會因為問題解決而開心，因此想投身程式設計的產業做進一步的學習和鑽研。希望您可以給我一個面試的機會，謝謝。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
