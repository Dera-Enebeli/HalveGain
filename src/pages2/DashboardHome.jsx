import React, { useState } from "react";
import SideBar from "../component/SideBar";
import styled from "styled-components";
import NavBar from "../component/NavBar";
import eye from "../asset/images/eye.svg";
import walletLink from "../asset/images/walletLink.svg";
import startTradeLink from "../asset/images/startTradeLink.svg";
import { Link } from "react-router-dom";
import Table from "../settingsModals/shared/Table";
import MobileTable from "../settingsModals/shared/MobileTable";

function DashboardHome() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Main>
      <SideBar />
      <MainContainer>
        <NavBar />
        <Content>
          <div className="top">
            <div className="cardOne">
              <div className="deposit">
                <img
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                  src={eye}
                  alt=""
                />
                {show ? (
                  <p className="assets">
                    {" "}
                    &#8358; 0.<span>00</span>{" "}
                  </p>
                ) : (
                  <p className="money">**********</p>
                )}

                <p>Your Wallet Funds</p>
              </div>
              <div>
                <Link to="/wallet">
                  <img style={{ cursor: "pointer" }} src={walletLink} alt="" />
                </Link>
              </div>
            </div>
            <div className="cardTwo">
              <div>
                <p>Start Trade</p>
              </div>
              <div>
                <Link to="/start-trade">
                  <img
                    style={{ cursor: "pointer" }}
                    src={startTradeLink}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="dashboard">
              <p>Dashboard</p>
            </div>
          </div>

          <ButtomTable>
            <Table />
            <MobileTable />
          </ButtomTable>
        </Content>
      </MainContainer>
    </Main>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex: 4.5;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.body};
  transition: all 0.5s;
  @media screen and (max-width: 640px) {
    /* background-color: red; */
    /* overflow: hidden; */
  }
`;
const Main = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.1rem 6rem 3rem 6rem;
  height: 83vh;
  overflow-y: scroll;
  @media screen and (max-width: 640px) {
    height: 100vh;
    padding: 0;
  }
  @media screen and (max-width: 890px) {
    height: 100vh;
    padding: 0;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.7rem;
    @media screen and (max-width: 640px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    .cardOne {
      display: flex;
      background-color: ${({ theme }) => theme.colors.white};
      justify-content: center;
      align-items: center;
      gap: 6rem;
      padding: 1.3rem 0rem;
      border-radius: 1.5rem;
      transition: all 0.5s;
      @media screen and (max-width: 640px) {
        width: 90vw;
      }

      flex: 1.6;
      .deposit {
        p {
          color: ${({ theme }) => theme.colors.darkblue};
        }
        .money {
          font-size: 30px;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.textcolor};
        }
        .assets {
          font-size: 30px;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.textcolor};
          span {
            font-size: 27px;
            font-weight: 900;
            color: ${({ theme }) => theme.colors.gray};
          }
        }
      }
    }
  }
  .cardTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    padding: 1.3rem 0rem;
    border-radius: 1.5rem;
    flex: 1.4;
    transition: all 0.5s;

    background-color: ${({ theme }) => theme.colors.darkblue};
    @media screen and (max-width: 640px) {
      width: 90vw;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
      font-size: 21px;
    }
  }
  .dashboard {
    display: flex;
    align-items: flex-end;
    flex: 1;
    flex-direction: row-reverse;
    padding: 1.3rem 0rem;
    cursor: pointer;

    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.darkblue};
    @media screen and (max-width: 640px) {
      width: 90vw;
      font-size: 25px;
    }
  }
`;

const ButtomTable = styled.div`
  @media screen and (max-width: 640px) {
    /* background-color: red; */
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default DashboardHome;
