import * as React from 'react'
import Link from 'next/link'

function Footer () {
    return (
      <div className="main-content">
        <div className="container-1">
          <div className="left-side">
            <img src="/img/logo.jpg" className="logo"></img>
            <div className="social">
              <ul>
                <li><Link href="#"><a><img src="/img/ig.jpg"></img></a></Link></li>
                <li><Link href="#"><a><img src="/img/twitter.jpg"></img></a></Link></li>
                <li><Link href="#"><a><img src="/img/linkedin.jpg"></img></a></Link></li>
                <li><Link href="#"><a><img src="/img/fb.jpg"></img></a></Link></li>
                <li><Link href="#"><a><img src="/img/line.jpg"></img></a></Link></li>
              </ul>
            </div>
          </div>
          <div className="right-side">
            <ul>
              <li className="float-left">
                <h3>COMPETITIONS</h3>
                <ul>
                  <li>
                    <Link href="#"><a>Competitive Programming</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Capture the Flag</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Game Dev</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Datavidia</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Arkalogica</a></Link>
                  </li>
                </ul>
              </li>
              <li className="float-left">
                <h3>PRE-EVENTS</h3>
                <ul>
                  <li>
                    <Link href="#"><a>Technocamp</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Arkavidia Goes To School</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Arkavidia Academy</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a>Arkavidia On Air</a></Link>
                  </li>
                </ul>
              </li>
              <li className="float-left">
              <h3>EVENTS</h3>
              <ul>
                <li>
                  <Link href="#"><a>IT Fest</a></Link>
                </li>
                <li>
                  <Link href="#"><a>Arkavidia Talks</a></Link>
                </li>
              </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-2">
          ARKAVIDIA 7.0 - 2020
        </div>
        
        <style jsx>
          {`
            .main-content {
              position: absolute;
              width: 100%;
              height: 290px;
              left: 0px;
              right: 0px;
              margin: 0;
            }

            .float-left {
              float:left;
            }
            
            ul {
              list-style-type: none;
            }

            .container-1{
              margin: 68px 0 50px 0;
              position: absolute
              height: 239px;
              display: flex;
            }

            .left-side {
              margin: 0 0 0 70px;
            }

            .logo {
              width:406px;
              height:113px;
              display:block;
            }
            
            .left-side ul li{
              float: left;
              margin-left:10px;
            }
            
            .left-side ul li img {
              margin-left: 20px;
            }

            .right-side {
              margin: 0 10px 0 100px;
            }

            .right-side ul li{
              margin : 0 23px 0 0;
            }

            .right-side ul li h3{
              font-family: Viga;
              font-style: Regular;
              font-size: 24px;
              line-height: 32px;
              color: #431785;
              margin: 0;
            }

            .right-side ul li ul li {
              margin-top: 10px;
              margin-left: -39px;
            }

            .right-side ul li ul li a{
              font-family: Roboto;
              font-style: Regular;
              font-size: 18px;
              line-height: 21px;
              text-decoration: none;
              color: #000000;
            }

            .container-2 {
              display:flex;
              position: absolute;
              background-color: #000000;
              width: 100%;
              height: 51px;
              font-family: Viga;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 24px;
              color: #FFFFFF;
              align-items:center;
              justify-content:center;
            }

            @media (orientation:portrait) {
              .container-1{
                  display: initial;
              }
              .left-side {
                margin: 10px 0 0 20px;
              }

              .logo {
                width:165.5px;
                height:46.6px;
              }

              .social{
                margin-left:-10px;
                display: inline-block;
              }

              .left-side ul li{
                float: left;
                margin-left:5px;
              }

              .left-side ul li img {
                margin-left: 5px;
                width:16.71px;
                height:16.71px;
              }

              .right-side{
                margin: 0px 0 0 -20px;
              }

              .right-side ul li{
                margin-top: 15px;
              }

              .right-side ul li h3{
                font-size: 14px;
              }

              .right-side ul li ul li{
                margin-top: 0px;
              }

              .right-side ul li ul li a{
                font-size: 11px;
              }

              .float-left{
                float:none;
              }

              .container-2 {
                height: 21px;
                font-size: 7.34px;
                line-height: 9.86px;
              }

            }

          `}
        </style>
      </div>
    )
  }

export default Footer