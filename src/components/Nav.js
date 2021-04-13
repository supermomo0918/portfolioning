import React, { useState, useRef } from 'react'
import { FaAlignJustify } from 'react-icons/fa'

const scrollToRefHome = (ref) =>
  window.scrollTo({
    top: (0, ref.current.offsetTop),
    behavior: 'smooth',
  })
const Nav = () => {
  const [state, setState] = useState(true)
  // scrollTop
  const myRefHome = useRef(null)
  const ScrollToHome = () => scrollToRefHome(myRefHome)
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              {/* <img src="/images/logo.png" alt="logo" /> */}
              <h1 className="logo-font">蘇椲甯的履歷表</h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li onClick={ScrollToHome}>
                <a ref={myRefHome}>首頁</a>
              </li>
              <li
                onClick={() => {
                  window.scrollBy({
                    top: 780,
                    behavior: 'smooth',
                  })
                }}
              >
                <a href="#">關於我</a>
              </li>
              <li
                onClick={() => {
                  window.scrollBy({
                    top: 1780,
                    behavior: 'smooth',
                  })
                }}
              >
                <a href="#">技能</a>
              </li>
              <li
                onClick={() => {
                  window.scrollBy({
                    top: 2480,
                    behavior: 'smooth',
                  })
                }}
              >
                <a href="#">作品集</a>
              </li>
              <li
                onClick={() => {
                  window.scrollBy({
                    top: 3300,
                    behavior: 'smooth',
                  })
                }}
              >
                <a href="#">聯絡我</a>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  )
}

export default Nav
