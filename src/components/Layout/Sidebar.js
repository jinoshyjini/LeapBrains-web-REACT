import React, { Component } from 'react';
import '../../assets/css/sideBar.less';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Profile from "../../assets/images/icons/customprofile.png"

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <>      
        <div className='navbar__brand text-center'>
          <Link to="/Dashboard">
            <svg width="50" height="50" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 14.3614V40.1398L24.5498 52.5123V26.8633L48.5387 13.5015L24.7693 1L1 13.5015V14.3614Z" stroke="white" strokeWidth="1.98415" strokeLinejoin="round" />
              <path d="M24.113 52.6923L48.9998 39.4866V13.5811L24.113 27.4391" stroke="white" strokeWidth="1.98415" strokeLinejoin="round" />
              <path d="M11.1683 44.5337V20.4134L36.2345 7.0498" stroke="white" strokeWidth="1.98415" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <nav className=" sidebar sidebar__light">
          <div className="sb-sidenav-menu">
            <div className="sidebar__nav">
              <ul className='text-center'>
                <li className='active'>
                  <Link to="/Dashboard">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#303F9F" />
                        <path d="M16.0945 14.9672L12.7523 12.5508V6.75C12.7523 6.64687 12.668 6.5625 12.5648 6.5625H11.4375C11.3344 6.5625 11.25 6.64687 11.25 6.75V13.2047C11.25 13.2656 11.2781 13.3219 11.3273 13.357L15.2039 16.1836C15.2883 16.2445 15.4055 16.2258 15.4664 16.1437L16.1367 15.2297C16.1976 15.1429 16.1789 15.0258 16.0945 14.9672Z" fill="#303F9F" />
                      </svg>
                    </p>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/MyWork">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 19.6875H4.3125V4.3125H19.6875V19.6875ZM11.5312 9.375H15.8438C15.9469 9.375 16.0312 9.29063 16.0312 9.1875V8.0625C16.0312 7.95937 15.9469 7.875 15.8438 7.875H11.5312C11.4281 7.875 11.3438 7.95937 11.3438 8.0625V9.1875C11.3438 9.29063 11.4281 9.375 11.5312 9.375ZM11.5312 12.75H15.8438C15.9469 12.75 16.0312 12.6656 16.0312 12.5625V11.4375C16.0312 11.3344 15.9469 11.25 15.8438 11.25H11.5312C11.4281 11.25 11.3438 11.3344 11.3438 11.4375V12.5625C11.3438 12.6656 11.4281 12.75 11.5312 12.75ZM11.5312 16.125H15.8438C15.9469 16.125 16.0312 16.0406 16.0312 15.9375V14.8125C16.0312 14.7094 15.9469 14.625 15.8438 14.625H11.5312C11.4281 14.625 11.3438 14.7094 11.3438 14.8125V15.9375C11.3438 16.0406 11.4281 16.125 11.5312 16.125ZM7.96875 8.625C7.96875 8.87364 8.06752 9.1121 8.24334 9.28791C8.41915 9.46373 8.65761 9.5625 8.90625 9.5625C9.15489 9.5625 9.39335 9.46373 9.56916 9.28791C9.74498 9.1121 9.84375 8.87364 9.84375 8.625C9.84375 8.37636 9.74498 8.1379 9.56916 7.96209C9.39335 7.78627 9.15489 7.6875 8.90625 7.6875C8.65761 7.6875 8.41915 7.78627 8.24334 7.96209C8.06752 8.1379 7.96875 8.37636 7.96875 8.625ZM7.96875 12C7.96875 12.2486 8.06752 12.4871 8.24334 12.6629C8.41915 12.8387 8.65761 12.9375 8.90625 12.9375C9.15489 12.9375 9.39335 12.8387 9.56916 12.6629C9.74498 12.4871 9.84375 12.2486 9.84375 12C9.84375 11.7514 9.74498 11.5129 9.56916 11.3371C9.39335 11.1613 9.15489 11.0625 8.90625 11.0625C8.65761 11.0625 8.41915 11.1613 8.24334 11.3371C8.06752 11.5129 7.96875 11.7514 7.96875 12ZM7.96875 15.375C7.96875 15.6236 8.06752 15.8621 8.24334 16.0379C8.41915 16.2137 8.65761 16.3125 8.90625 16.3125C9.15489 16.3125 9.39335 16.2137 9.56916 16.0379C9.74498 15.8621 9.84375 15.6236 9.84375 15.375C9.84375 15.1264 9.74498 14.8879 9.56916 14.7121C9.39335 14.5363 9.15489 14.4375 8.90625 14.4375C8.65761 14.4375 8.41915 14.5363 8.24334 14.7121C8.06752 14.8879 7.96875 15.1264 7.96875 15.375Z" fill="black" />
                      </svg>
                    </p>
                    My work
                  </Link>
                </li>
                <li>
                  <Link to="/Schedule">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.625 2.3125H14.6875V0.8125C14.6875 0.709375 14.6031 0.625 14.5 0.625H13.1875C13.0844 0.625 13 0.709375 13 0.8125V2.3125H7V0.8125C7 0.709375 6.91563 0.625 6.8125 0.625H5.5C5.39687 0.625 5.3125 0.709375 5.3125 0.8125V2.3125H1.375C0.960156 2.3125 0.625 2.64766 0.625 3.0625V18.625C0.625 19.0398 0.960156 19.375 1.375 19.375H18.625C19.0398 19.375 19.375 19.0398 19.375 18.625V3.0625C19.375 2.64766 19.0398 2.3125 18.625 2.3125ZM17.6875 17.6875H2.3125V8.78125H17.6875V17.6875ZM2.3125 7.1875V4H5.3125V5.125C5.3125 5.22813 5.39687 5.3125 5.5 5.3125H6.8125C6.91563 5.3125 7 5.22813 7 5.125V4H13V5.125C13 5.22813 13.0844 5.3125 13.1875 5.3125H14.5C14.6031 5.3125 14.6875 5.22813 14.6875 5.125V4H17.6875V7.1875H2.3125Z" fill="black" />
                      </svg>

                    </p>
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.75 0.75H1.25C0.835156 0.75 0.5 1.08516 0.5 1.5V16.5C0.5 16.9148 0.835156 17.25 1.25 17.25H20.75C21.1648 17.25 21.5 16.9148 21.5 16.5V1.5C21.5 1.08516 21.1648 0.75 20.75 0.75ZM19.8125 3.34687V15.5625H2.1875V3.34687L1.54063 2.84297L2.46172 1.65938L3.46484 2.43984H18.5375L19.5406 1.65938L20.4617 2.84297L19.8125 3.34687V3.34687ZM18.5375 2.4375L11 8.29688L3.4625 2.4375L2.45938 1.65703L1.53828 2.84062L2.18516 3.34453L10.1914 9.56953C10.4217 9.74841 10.7049 9.84551 10.9965 9.84551C11.2881 9.84551 11.5713 9.74841 11.8016 9.56953L19.8125 3.34687L20.4594 2.84297L19.5383 1.65938L18.5375 2.4375Z" fill="black" />
                      </svg>

                    </p>
                    Messenger
                  </Link>
                </li>
                <li>
                  <Link to="/MyNetwork">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3166 14.4035C16.73 13.8164 16.0445 13.3372 15.2916 12.9879C16.3534 12.1277 17.0307 10.8152 17.0307 9.34332C17.0307 6.74645 14.8651 4.61598 12.2682 4.65582C9.71117 4.69567 7.65101 6.77926 7.65101 9.34332C7.65101 10.8152 8.3307 12.1277 9.39007 12.9879C8.63704 13.3369 7.95153 13.8161 7.36507 14.4035C6.08539 15.6855 5.35882 17.3777 5.31195 19.1824C5.31132 19.2074 5.31571 19.2323 5.32485 19.2556C5.334 19.2789 5.34771 19.3001 5.36518 19.318C5.38265 19.3359 5.40354 19.3502 5.4266 19.3599C5.44966 19.3696 5.47443 19.3746 5.49945 19.3746H6.81195C6.91273 19.3746 6.99711 19.2949 6.99945 19.1941C7.04398 17.8347 7.59476 16.5621 8.56273 15.5964C9.05806 15.0985 9.64723 14.7037 10.2961 14.435C10.9451 14.1662 11.6408 14.0289 12.3432 14.0308C13.7705 14.0308 15.1135 14.5863 16.1237 15.5964C17.0893 16.5621 17.6401 17.8347 17.6869 19.1941C17.6893 19.2949 17.7737 19.3746 17.8744 19.3746H19.1869C19.212 19.3746 19.2367 19.3696 19.2598 19.3599C19.2829 19.3502 19.3037 19.3359 19.3212 19.318C19.3387 19.3001 19.3524 19.2789 19.3615 19.2556C19.3707 19.2323 19.3751 19.2074 19.3744 19.1824C19.3276 17.3777 18.601 15.6855 17.3166 14.4035ZM12.3432 12.3433C11.5416 12.3433 10.7869 12.0316 10.2221 11.4644C9.93864 11.1832 9.71472 10.8477 9.56372 10.4781C9.41271 10.1084 9.33771 9.71213 9.3432 9.31286C9.35023 8.54411 9.65726 7.80114 10.194 7.25036C10.7565 6.67379 11.5088 6.3527 12.3127 6.34332C13.1073 6.33629 13.8784 6.64567 14.4455 7.20114C15.0268 7.77067 15.3455 8.53239 15.3455 9.34332C15.3455 10.1449 15.0338 10.8972 14.4666 11.4644C14.1884 11.744 13.8574 11.9657 13.4929 12.1165C13.1285 12.2674 12.7377 12.3445 12.3432 12.3433ZM6.47211 9.96207C6.45101 9.75817 6.43929 9.55192 6.43929 9.34332C6.43929 8.97067 6.47445 8.60739 6.54007 8.25348C6.55648 8.1691 6.51195 8.08239 6.4346 8.04723C6.11585 7.90426 5.82289 7.70739 5.56976 7.45895C5.2715 7.16975 5.03679 6.82155 4.88062 6.43656C4.72444 6.05158 4.65024 5.63828 4.66273 5.22301C4.68382 4.47067 4.98617 3.75582 5.51351 3.21676C6.09242 2.62379 6.87054 2.30035 7.69789 2.30973C8.44554 2.31676 9.16742 2.60504 9.71351 3.11598C9.89867 3.28942 10.058 3.4816 10.1916 3.68785C10.2385 3.76051 10.3299 3.79098 10.4096 3.76285C10.8221 3.61989 11.258 3.5191 11.7057 3.47223C11.8369 3.45817 11.9119 3.31754 11.8534 3.20035C11.0916 1.69332 9.53539 0.652698 7.73539 0.624573C5.13617 0.58473 2.97054 2.7152 2.97054 5.30973C2.97054 6.7816 3.64789 8.0941 4.7096 8.95426C3.96429 9.29879 3.27757 9.77457 2.68226 10.3699C1.39789 11.6519 0.671323 13.3441 0.624448 15.1511C0.623823 15.1761 0.62821 15.201 0.637353 15.2243C0.646495 15.2476 0.660207 15.2688 0.67768 15.2868C0.695154 15.3047 0.716036 15.3189 0.739096 15.3286C0.762155 15.3383 0.786926 15.3433 0.811948 15.3433H2.12679C2.22757 15.3433 2.31195 15.2636 2.31429 15.1629C2.35882 13.8035 2.9096 12.5308 3.87757 11.5652C4.56664 10.8761 5.41039 10.398 6.33148 10.166C6.42289 10.1425 6.48382 10.0558 6.47211 9.96207V9.96207Z" fill="black" />
                      </svg>
                    </p>
                    My Network
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8L14.5 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5 18V12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 15H15.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 2V8H20.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    Library
                  </Link>
                </li>
                <li>
                  <Link to="/Notification">
                    <p className='icon mb-0'>
                      <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3125 19H17.6562V9.70312C17.6562 5.84492 14.8043 2.65664 11.0938 2.12617V1.0625C11.0938 0.458203 10.6043 -0.03125 10 -0.03125C9.3957 -0.03125 8.90625 0.458203 8.90625 1.0625V2.12617C5.1957 2.65664 2.34375 5.84492 2.34375 9.70312V19H1.6875C1.20352 19 0.8125 19.391 0.8125 19.875V20.75C0.8125 20.8703 0.910937 20.9688 1.03125 20.9688H6.9375C6.9375 22.6586 8.31016 24.0312 10 24.0312C11.6898 24.0312 13.0625 22.6586 13.0625 20.9688H18.9688C19.0891 20.9688 19.1875 20.8703 19.1875 20.75V19.875C19.1875 19.391 18.7965 19 18.3125 19ZM10 22.2812C9.27539 22.2812 8.6875 21.6934 8.6875 20.9688H11.3125C11.3125 21.6934 10.7246 22.2812 10 22.2812ZM4.3125 19V9.70312C4.3125 8.18281 4.90312 6.75547 5.97773 5.68086C7.05234 4.60625 8.47969 4.01562 10 4.01562C11.5203 4.01562 12.9477 4.60625 14.0223 5.68086C15.0969 6.75547 15.6875 8.18281 15.6875 9.70312V19H4.3125Z" fill="black" />
                      </svg>
                    </p>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <p className='icon mb-0'>
                      <img src={Profile} className='profileimage' />
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Sidebar;