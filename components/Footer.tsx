import * as React from 'react'
import Link from 'next/link'
import { Theme } from '../styles/theme'

function Footer() {
  return (
    <footer className="container-fluid">
      <div id="main-footer" className="row mb-5 max-content">
        <div className="col-lg-4 px-5">
          <img id="footer-logo" src="/img/logo.jpg"></img>
          <ul id="social-link">
            <li><Link href="#"><a><img src="/img/ig.jpg"></img></a></Link></li>
            <li><Link href="#"><a><img src="/img/twitter.jpg"></img></a></Link></li>
            <li><Link href="#"><a><img src="/img/linkedin.jpg"></img></a></Link></li>
            <li><Link href="#"><a><img src="/img/fb.jpg"></img></a></Link></li>
            <li><Link href="#"><a><img src="/img/line.jpg"></img></a></Link></li>
          </ul>
        </div>
        <div id="footer-link" className="col-lg-8">
          <ul>
            <li>
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
          </ul>
          <ul>
            <li>
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
          </ul>
          <ul>
            <li>
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
      <div id="bottom-footer" className="row p-3">
        ARKAVIDIA 7.0 - 2020
      </div>

      <style jsx>{`
          #main-footer {
            margin:auto;
          }

          #bottom-footer{
            font-size: 1.2rem;
            background-color: black;
            color: white;
            justify-content: center;
            font-family: Viga;
          }

          ul {
            list-style-type: none;
          }

          #footer-logo {
            width: 100%;
            max-width: 400px;
          }

          #social-link {
            justify-content: flex-end;
            display: flex;
            padding: 0px;
            flex-direction: row;
            max-width: 400px;
          }
          
          #social-link li {
            margin-right: 10px;
          }
          
          #footer-link {
            display: flex;
            flex-direction: row;

            justify-content: space-around;
          }

          #footer-link ul {
            padding: 0;
          }

          #footer-link ul li {
            padding-top: 0.5rem;
          }

          #footer-link ul li a {
            font-size: 1rem;
            text-decoration: none;
            color: #000000;
          }

          #footer-link ul h3 {
            font-family: Viga;
            font-size: 1.5rem;
            color: ${Theme.colors.purple.dark};
            margin: 0;
          }

          @media (max-width: 800px) {
            #footer-link {
              flex-direction: column;
            }
            #footer-logo {
              max-width: 250px;
            }
            #social-link {
              justify-content: flex-start;
            }
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer