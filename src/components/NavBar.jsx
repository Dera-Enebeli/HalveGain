import React, { useState } from "react";
import styled from "styled-components";
import Yes from "../asset/images/Yes.svg";
import No from "../asset/images/No.svg";
import { useNavigate } from "react-router-dom";
import cardtonicLogo from "../asset/images/cardtonicLogo.svg";
import { Turn as Hamburger } from "hamburger-react";

import { AiOutlineClose } from "react-icons/ai";
import Switch from "./Switch";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";

function NavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <AnimatePresence onExitComplete={true}>
      <Navigation>
        {isOpened ? (
          <MobileNav
            isOpened={isOpened}
            setIsOpened={setIsOpened}
            setIsOpen={setIsOpen}
          />
        ) : (
          <MobileNav />
        )}
        <div className="logo">
          <img src={cardtonicLogo} alt="" />
        </div>
        <div className="greetings">
          <p>
            Good Afternoon, <span>The_ot</span>
          </p>
        </div>

        <div>
          <div className="logOut">
            <Switch />
            <svg
              className="logOutBtn"
              width="134"
              height="56"
              viewBox="0 0 134 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClick}
            >
              <rect width="134" height="56" rx="28" fill="#F0F4F5"></rect>
              <path
                d="M115.758 22.4423C114.696 20.1928 113.016 18.3039 110.898 16.9786C107.953 15.1404 104.47 14.5564 101.083 15.3384C97.7008 16.1153 94.8217 18.1668 92.9835 21.1119C91.1403 24.0571 90.5563 27.5405 91.3383 30.9274C92.1203 34.3092 94.1717 37.1883 97.1118 39.0265C99.1836 40.3214 101.56 41.0069 103.992 41.0069H104.15C106.572 40.9764 108.928 40.2757 110.969 38.9859C111.563 38.6101 111.736 37.8281 111.36 37.234C110.984 36.6399 110.202 36.4673 109.608 36.8431C107.968 37.884 106.069 38.4476 104.119 38.473C102.119 38.4984 100.164 37.9449 98.4574 36.8837C96.0861 35.4009 94.4358 33.0855 93.8112 30.3637C93.1866 27.6319 93.6538 24.8289 95.1365 22.4575C98.1934 17.5676 104.663 16.0747 109.552 19.1316C111.259 20.1979 112.609 21.7162 113.462 23.5239C114.295 25.2859 114.62 27.2409 114.402 29.1704C114.326 29.8661 114.823 30.4958 115.524 30.5719C116.22 30.6481 116.849 30.1505 116.926 29.4497C117.195 27.0581 116.788 24.6309 115.758 22.4423Z"
                fill="#FF2E2E"
              ></path>
              <path
                d="M108.411 23.5948C107.913 23.0972 107.111 23.0972 106.613 23.5948L104.003 26.2099L101.393 23.5999C100.895 23.1022 100.093 23.1022 99.5954 23.5999C99.0978 24.0975 99.0978 24.8998 99.5954 25.3974L102.205 28.0074L99.5954 30.6174C99.0978 31.115 99.0978 31.9173 99.5954 32.415C99.8442 32.6638 100.169 32.7856 100.494 32.7856C100.819 32.7856 101.144 32.6638 101.393 32.415L104.003 29.805L106.613 32.415C106.862 32.6638 107.187 32.7856 107.512 32.7856C107.837 32.7856 108.162 32.6638 108.411 32.415C108.908 31.9173 108.908 31.115 108.411 30.6174L105.801 28.0023L108.411 25.3923C108.908 24.8947 108.908 24.0924 108.411 23.5948Z"
                fill="#FF2E2E"
              ></path>
              <path
                d="M27.664 30.84H31.984V33H24.96V21.344H27.664V30.84ZM36.6404 24.576C37.2697 24.576 37.843 24.6747 38.3604 24.872C38.8777 25.0693 39.3204 25.352 39.6884 25.72C40.0617 26.088 40.3497 26.536 40.5524 27.064C40.7604 27.5867 40.8644 28.176 40.8644 28.832C40.8644 29.4933 40.7604 30.0907 40.5524 30.624C40.3497 31.152 40.0617 31.6027 39.6884 31.976C39.3204 32.344 38.8777 32.6293 38.3604 32.832C37.843 33.0293 37.2697 33.128 36.6404 33.128C36.0057 33.128 35.427 33.0293 34.9044 32.832C34.387 32.6293 33.939 32.344 33.5604 31.976C33.187 31.6027 32.8964 31.152 32.6884 30.624C32.4857 30.0907 32.3844 29.4933 32.3844 28.832C32.3844 28.176 32.4857 27.5867 32.6884 27.064C32.8964 26.536 33.187 26.088 33.5604 25.72C33.939 25.352 34.387 25.0693 34.9044 24.872C35.427 24.6747 36.0057 24.576 36.6404 24.576ZM36.6404 31.288C37.211 31.288 37.6297 31.088 37.8964 30.688C38.1684 30.2827 38.3044 29.6693 38.3044 28.848C38.3044 28.0267 38.1684 27.416 37.8964 27.016C37.6297 26.616 37.211 26.416 36.6404 26.416C36.0537 26.416 35.6244 26.616 35.3524 27.016C35.0804 27.416 34.9444 28.0267 34.9444 28.848C34.9444 29.6693 35.0804 30.2827 35.3524 30.688C35.6244 31.088 36.0537 31.288 36.6404 31.288ZM45.1536 24.56C45.5056 24.56 45.8363 24.5947 46.1456 24.664C46.4603 24.7333 46.751 24.832 47.0176 24.96H49.5216V25.864C49.5216 26.0027 49.4816 26.112 49.4016 26.192C49.327 26.272 49.1963 26.3333 49.0096 26.376L48.4016 26.512C48.4763 26.752 48.5136 27 48.5136 27.256C48.5136 27.672 48.4256 28.0453 48.2496 28.376C48.079 28.7067 47.8416 28.9893 47.5376 29.224C47.239 29.4533 46.8843 29.632 46.4736 29.76C46.063 29.8827 45.623 29.944 45.1536 29.944C44.8923 29.944 44.647 29.928 44.4176 29.896C44.2363 30.0027 44.1456 30.1253 44.1456 30.264C44.1456 30.4027 44.2176 30.504 44.3616 30.568C44.511 30.6267 44.7056 30.6693 44.9456 30.696C45.1856 30.7173 45.4603 30.7333 45.7696 30.744C46.079 30.7493 46.3936 30.768 46.7136 30.8C47.0336 30.8267 47.3483 30.8747 47.6576 30.944C47.967 31.0133 48.2416 31.1253 48.4816 31.28C48.7216 31.4347 48.9136 31.6427 49.0576 31.904C49.207 32.16 49.2816 32.488 49.2816 32.888C49.2816 33.2613 49.191 33.6267 49.0096 33.984C48.8283 34.3413 48.5616 34.6587 48.2096 34.936C47.8576 35.2133 47.4256 35.4347 46.9136 35.6C46.4016 35.7707 45.815 35.856 45.1536 35.856C44.503 35.856 43.9403 35.7947 43.4656 35.672C42.9963 35.5493 42.6043 35.3867 42.2896 35.184C41.9803 34.9867 41.751 34.7573 41.6016 34.496C41.4523 34.2347 41.3776 33.9627 41.3776 33.68C41.3776 33.312 41.4896 33.0027 41.7136 32.752C41.9376 32.496 42.2443 32.296 42.6336 32.152C42.447 32.0293 42.2976 31.872 42.1856 31.68C42.0736 31.488 42.0176 31.2453 42.0176 30.952C42.0176 30.8293 42.039 30.7013 42.0816 30.568C42.1243 30.4293 42.191 30.296 42.2816 30.168C42.3723 30.04 42.487 29.9173 42.6256 29.8C42.7643 29.6827 42.9296 29.5787 43.1216 29.488C42.6896 29.2587 42.3483 28.9547 42.0976 28.576C41.8523 28.1973 41.7296 27.7573 41.7296 27.256C41.7296 26.84 41.8176 26.4667 41.9936 26.136C42.1696 25.8 42.4096 25.5173 42.7136 25.288C43.023 25.0533 43.3856 24.8747 43.8016 24.752C44.2176 24.624 44.6683 24.56 45.1536 24.56ZM46.9936 33.304C46.9936 33.1707 46.951 33.064 46.8656 32.984C46.7856 32.904 46.6736 32.84 46.5296 32.792C46.391 32.744 46.2256 32.7093 46.0336 32.688C45.847 32.6667 45.6443 32.6507 45.4256 32.64C45.207 32.6293 44.9803 32.6213 44.7456 32.616C44.511 32.6053 44.279 32.5867 44.0496 32.56C43.895 32.6667 43.767 32.7867 43.6656 32.92C43.5696 33.048 43.5216 33.1947 43.5216 33.36C43.5216 33.4773 43.5456 33.584 43.5936 33.68C43.647 33.776 43.7376 33.8587 43.8656 33.928C43.9936 33.9973 44.1643 34.0507 44.3776 34.088C44.5963 34.1307 44.871 34.152 45.2016 34.152C45.559 34.152 45.8523 34.1307 46.0816 34.088C46.311 34.0453 46.4923 33.9867 46.6256 33.912C46.7643 33.8373 46.8603 33.7467 46.9136 33.64C46.967 33.5387 46.9936 33.4267 46.9936 33.304ZM45.1536 28.416C45.5643 28.416 45.8603 28.3147 46.0416 28.112C46.2283 27.904 46.3216 27.6373 46.3216 27.312C46.3216 26.976 46.2283 26.712 46.0416 26.52C45.8603 26.328 45.5643 26.232 45.1536 26.232C44.743 26.232 44.4443 26.328 44.2576 26.52C44.0763 26.712 43.9856 26.976 43.9856 27.312C43.9856 27.472 44.007 27.6187 44.0496 27.752C44.0976 27.8853 44.1696 28.0027 44.2656 28.104C44.3616 28.2 44.4816 28.2773 44.6256 28.336C44.775 28.3893 44.951 28.416 45.1536 28.416ZM62.1046 27.168C62.1046 28.0107 61.958 28.7947 61.6646 29.52C61.3766 30.2453 60.9686 30.8773 60.4406 31.416C59.9126 31.9493 59.2753 32.368 58.5286 32.672C57.7873 32.976 56.9633 33.128 56.0566 33.128C55.15 33.128 54.3233 32.976 53.5766 32.672C52.83 32.368 52.19 31.9493 51.6566 31.416C51.1286 30.8773 50.718 30.2453 50.4246 29.52C50.1366 28.7947 49.9926 28.0107 49.9926 27.168C49.9926 26.3253 50.1366 25.5413 50.4246 24.816C50.718 24.0907 51.1286 23.4613 51.6566 22.928C52.19 22.3947 52.83 21.976 53.5766 21.672C54.3233 21.368 55.15 21.216 56.0566 21.216C56.9633 21.216 57.7873 21.3707 58.5286 21.68C59.2753 21.984 59.9126 22.4027 60.4406 22.936C60.9686 23.4693 61.3766 24.0987 61.6646 24.824C61.958 25.5493 62.1046 26.3307 62.1046 27.168ZM59.3366 27.168C59.3366 26.592 59.262 26.0747 59.1126 25.616C58.9633 25.152 58.7473 24.76 58.4646 24.44C58.1873 24.12 57.846 23.8747 57.4406 23.704C57.0353 23.5333 56.574 23.448 56.0566 23.448C55.534 23.448 55.0673 23.5333 54.6566 23.704C54.2513 23.8747 53.9073 24.12 53.6246 24.44C53.3473 24.76 53.134 25.152 52.9846 25.616C52.8353 26.0747 52.7606 26.592 52.7606 27.168C52.7606 27.7493 52.8353 28.272 52.9846 28.736C53.134 29.1947 53.3473 29.584 53.6246 29.904C53.9073 30.224 54.2513 30.4693 54.6566 30.64C55.0673 30.8053 55.534 30.888 56.0566 30.888C56.574 30.888 57.0353 30.8053 57.4406 30.64C57.846 30.4693 58.1873 30.224 58.4646 29.904C58.7473 29.584 58.9633 29.1947 59.1126 28.736C59.262 28.272 59.3366 27.7493 59.3366 27.168ZM65.7175 24.704V29.968C65.7175 30.3787 65.8108 30.696 65.9975 30.92C66.1842 31.144 66.4588 31.256 66.8215 31.256C67.0935 31.256 67.3468 31.2 67.5815 31.088C67.8215 30.976 68.0535 30.8187 68.2775 30.616V24.704H70.7575V33H69.2215C68.9122 33 68.7095 32.8613 68.6135 32.584L68.4615 32.104C68.3015 32.2587 68.1362 32.4 67.9655 32.528C67.7948 32.6507 67.6108 32.7573 67.4135 32.848C67.2215 32.9333 67.0135 33 66.7895 33.048C66.5655 33.1013 66.3202 33.128 66.0535 33.128C65.6002 33.128 65.1975 33.0507 64.8455 32.896C64.4988 32.736 64.2055 32.5147 63.9655 32.232C63.7255 31.9493 63.5442 31.616 63.4215 31.232C63.2988 30.848 63.2375 30.4267 63.2375 29.968V24.704H65.7175ZM75.5908 33.128C75.1961 33.128 74.8468 33.072 74.5428 32.96C74.2441 32.8427 73.9908 32.68 73.7828 32.472C73.5801 32.2587 73.4254 32.0027 73.3188 31.704C73.2121 31.4053 73.1588 31.072 73.1588 30.704V26.416H72.4548C72.3268 26.416 72.2174 26.376 72.1268 26.296C72.0361 26.2107 71.9908 26.088 71.9908 25.928V24.96L73.3108 24.704L73.7988 22.68C73.8628 22.424 74.0441 22.296 74.3428 22.296H75.6388V24.72H77.6548V26.416H75.6388V30.536C75.6388 30.728 75.6841 30.888 75.7748 31.016C75.8708 31.1387 76.0068 31.2 76.1828 31.2C76.2734 31.2 76.3481 31.192 76.4068 31.176C76.4708 31.1547 76.5241 31.1333 76.5668 31.112C76.6148 31.0853 76.6574 31.064 76.6948 31.048C76.7374 31.0267 76.7854 31.016 76.8388 31.016C76.9134 31.016 76.9721 31.0347 77.0148 31.072C77.0628 31.104 77.1108 31.1573 77.1588 31.232L77.9108 32.408C77.5908 32.648 77.2308 32.8293 76.8308 32.952C76.4308 33.0693 76.0174 33.128 75.5908 33.128Z"
                fill="currentcolor"
              ></path>
            </svg>

            <svg
              onClick={() => setIsNotification(true)}
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="notification"
            >
              <rect width="56" height="56" rx="28" fill="#FFFFFF"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.6001 18.3008V15.4C26.6001 14.6272 27.2273 14 28.0001 14C28.7715 14 29.4001 14.6272 29.4001 15.4V18.3008C31.4805 18.6004 33.4251 19.5664 34.9287 21.07C36.7669 22.9082 37.8001 25.4016 37.8001 28V33.2696L38.9327 35.5348C39.4745 36.6198 39.4171 37.9078 38.7787 38.9396C38.1417 39.9714 37.0147 40.6 35.8023 40.6H29.4001C29.4001 41.3728 28.7715 42 28.0001 42C27.2273 42 26.6001 41.3728 26.6001 40.6H20.1979C18.9841 40.6 17.8572 39.9714 17.2202 38.9396C16.5818 37.9078 16.5244 36.6198 17.0676 35.5348L18.2001 33.2696V28C18.2001 25.4016 19.232 22.9082 21.0702 21.07C22.5752 19.5664 24.5183 18.6004 26.6001 18.3008ZM28.0001 21C26.1423 21 24.363 21.7378 23.0498 23.051C21.7366 24.3628 21.0001 26.1436 21.0001 28V33.6C21.0001 33.817 20.9484 34.0312 20.8518 34.2258C20.8518 34.2258 20.2287 35.4718 19.5707 36.7864C19.4629 37.0034 19.4742 37.2624 19.6016 37.4682C19.7289 37.674 19.9543 37.8 20.1979 37.8H35.8023C36.0445 37.8 36.2699 37.674 36.3973 37.4682C36.5247 37.2624 36.5359 37.0034 36.4281 36.7864C35.7701 35.4718 35.1471 34.2258 35.1471 34.2258C35.0505 34.0312 35.0001 33.817 35.0001 33.6V28C35.0001 26.1436 34.2623 24.3628 32.9491 23.051C31.6359 21.7378 29.8565 21 28.0001 21Z"
                fill="currentcolor"
              ></path>
            </svg>
            <Hamburger
              toggled={isOpened}
              toggle={setIsOpened}
              easing="ease-in"
              size={17}
              direction="left"
            />
          </div>
        </div>
        {isOpen && (
          <div className="logOutModal">
            <div className="modalContainer">
              <div className="question">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="logoutOptionContainer">
                <div onClick={() => navigate("/")} className="yes">
                  <p>Yes</p>
                  <img src={Yes} alt="" />
                </div>
                <div onClick={() => setIsOpen(false)} className="no">
                  <p>No</p>
                  <img src={No} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
        {isNotification && (
          <div className="notificationModal">
            <div className="notificationContainer">
              <Button onClick={() => setIsNotification(false)}>
                <AiOutlineClose className="icon" />
              </Button>
              <p>😊 !!You have no new notifications </p>
            </div>
          </div>
        )}
      </Navigation>
    </AnimatePresence>
  );
}

const Navigation = styled.div`
  padding: 0.5rem 7rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5;
  @media screen and (max-width: 640px) {
    width: 100vw;
    padding: 0 0.2rem;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.body};
    gap: 3rem;
  }
  @media screen and (max-width: 890px) {
    width: 100vw;
    padding: 0 0.2rem;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.body};
    gap: 3rem;
  }
  .logo {
    display: none;
    @media screen and (max-width: 640px) {
      display: block;
      img {
        width: 100px;
      }
    }
    @media screen and (max-width: 890px) {
      display: block;
    }
  }
  .notificationModal {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    z-index: 3;
    .notificationContainer {
      background-color: ${({ theme }) => theme.colors.white};
      margin-top: 6rem;
      height: fit-content;
      padding: 3rem 3rem;
      border-radius: 1.5rem;
      width: 60vw;
      position: relative;
      p {
        text-align: start;
        font-size: 18px;
        font-weight: 900;
        color: ${({ theme }) => theme.colors.lightblue1};
      }
    }
  }
  .logOutModal {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    z-index: 3;
    .modalContainer {
      background-color: ${({ theme }) => theme.colors.white};
      width: 45rem;
      height: 18rem;
      margin-top: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 1.6rem;
      gap: 1.5rem;
      .question {
        p {
          font-size: 21px;
          color: ${({ theme }) => theme.colors.textcolor};
          font-weight: 900;
        }
      }
    }
    .logoutOptionContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      .yes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 0.8rem;
        padding: 0.4rem 0.6rem;
        font-size: 12px;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.lightblue1};
        background-color: ${({ theme }) => theme.colors.black};
      }
      .no {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border-radius: 0.8rem;
        padding: 0.4rem 0.6rem;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.textcolor};
        background-color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
      }
    }
  }
  .greetings {
    align-self: flex-end;
    p {
      font-weight: 600;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.darkblue};
      @media screen and (max-width: 640px) {
        display: none;
      }
      @media screen and (max-width: 890px) {
        display: none;
      }
    }
    span {
      font-weight: 600;
      font-size: 17px;
      color: ${({ theme }) => theme.colors.lightblue1};
      @media screen and (max-width: 640px) {
        display: none;
      }
      @media screen and (max-width: 890px) {
        display: none;
      }
    }
  }
  .logOut {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
    cursor: pointer;
    .logOutBtn {
      @media screen and (max-width: 640px) {
        display: none;
      }
      @media screen and (max-width: 890px) {
        display: none;
      }
    }
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    .notification {
      width: 45px;
    }
    .hamburger-react {
      display: none;
      @media screen and (max-width: 640px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        background-color: #cffcff;
        border-radius: 50%;
        z-index: 2;
      }
      @media screen and (max-width: 890px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        background-color: #cffcff;
        border-radius: 50%;
        z-index: 2;
      }
    }
  }
`;
const Button = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.textcolor};
  padding: 0.4rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .icon {
    color: ${({ theme }) => theme.colors.button};
    font-size: 15px;
  }
`;

export default NavBar;
