import React from "react";
import { GiRobotGolem } from "react-icons/gi";
import { SiThealgorithms } from "react-icons/si";
import { SiManageiq } from "react-icons/si";
import { AiFillControl } from "react-icons/ai";
import { GrStar } from "react-icons/gr";
import Card from "../components/Card";
import { HiOutlineMail } from "react-icons/hi";
import { BiMapPin } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <section className="hidden sm:flex gap-4 bg-gray-400 p-2 md:justify-end pr-10">
        <div className="flex justify-center items-center px-6">
          <HiOutlineDeviceMobile
            size={30}
            className="text-custom-blue border border-custom-blue"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          {
            <HiOutlineMail
              size={30}
              className="text-custom-blue border border-custom-blue"
            />
          }

          <div>
            <h1 className="font-bold text-sm md:font-bold md:text-lg">Email</h1>
            <p>support@HalveGain.com</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div>
            {
              <BiMapPin
                size={30}
                className="text-custom-blue border border-custom-blue"
              />
            }
          </div>
          <div>
            <h1 className="font-bold text-sm md:font-bold md:text-lg">
              Address
            </h1>
            <p className="text-sm md:text-lg">
              1101 OAKVIEW DR GREENVILLE NC 27858-5228 USA
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center p-2  md:py-20 md:p-4 lg:px-[5rem] lg:items-center text-black bg-gray-300">
        <div className="">
          <h1 className="text-2xl font-extrabold md:font-extrabold md:text-start md:text-4xl mb-4">
            Maximize Profits with Our <br /> Halving Platform
          </h1>
          <p className="p-2">
            Unlock the Potential of the Bitcoin Halving Event
          </p>

          <p className="p-2">Let Us Trade for You!</p>
          <p className="p-2">
            The Bitcoin halving event holds the key to unprecedented profit
            potential, and we're here to unlock it for you!
          </p>

          <p className="p-2">
            Harnessing cutting-edge technology and expert strategies, we'll
            navigate the halving's waves, ensuring your investments ride the
            tide of success. With us at the helm, you'll seize every
            opportunity, secure in the knowledge that your financial future is
            in capable hands.
          </p>

          <p className="p-2">
            Don't miss out – join us today and transform the halving's promise
            into tangible wealth!
          </p>

          <button className="flex items-center justify-center shadow-xl hover:bg-purple-600 hover:shadow-purple-400 text-white p-4 bg-custom-blue rounded-full my-4 mx-auto sm:mx-0">
            <Link to="/register">Start Trading Now</Link>
          </button>
        </div>

        <div className="md:flex mx-auto my-auto">
          <img
            src="src/assets/images/cover2-removebg-preview.png"
            alt=""
            className="mx-auto my-auto w-full max-w-96 h-auto md:w-80 md:h-80"
          />
        </div>
      </section>

      <section className="flex flex-wrap gap-[4rem] text-center justify-center items-center m-5 p-10 rounded-lg shadow-lg md:gap-4 lg:gap-[8rem]">
        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
          <h1 className="text-4xl font-bold text-blue-700">$25M+</h1>
          <p className="text-lg font-normal text-gray-700">
            in trading volumes
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
          <h1 className="text-4xl font-bold text-blue-700">120K+</h1>
          <p className="text-lg font-normal text-gray-700">orders executed</p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
          <h1 className="text-4xl font-bold text-blue-700">5</h1>
          <p className="text-lg font-normal text-gray-700">
            crypto exchanges integrated
          </p>
        </div>
        <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
          <h1 className="text-4xl font-bold text-blue-700">40+</h1>
          <p className="text-lg font-normal text-gray-700">countries</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse md:justify-center md:items-center md:py-20 md:p-4 lg:px-[5rem] bg-gray-100">
        <div className="">
          <p className="p-4 md:p-2">
            <h1 className="text-center font-extrabold text-xl md:text-3xl mb-4 md:text-start">
              Maximize Profits with Our Halving Platform
            </h1>
            Experience the thrill of unlocking unprecedented profit potential
            with us. The Bitcoin halving event isn't just an event – it's a
            golden opportunity waiting to be seized.With our cutting-edge
            platform and expert trading strategies, we're your ticket to
            financial freedom.
          </p>

          <p className="p-4 md:p-2">
            Picture this: harnessing the power of the halving event, we navigate
            the volatile waves of the market, ensuring your investments soar to
            new heights. Our team of seasoned professionals is dedicated to your
            success, leveraging state-of-the-art technology to capitalize on
            every opportunity.
          </p>

          <p className="p-4 md:p-2">
            Join us today and embark on a journey where the sky's the limit.
            Don't just dream of financial freedom – make it a reality with us by
            your side. Your future awaits – seize it now!"
          </p>

          <section>
            <button className="flex items-center justify-center shadow-xl hover:bg-purple-600 hover:shadow-purple-400 text-white p-4 bg-custom-blue rounded-full my-4 mx-auto sm:mx-0">
              <Link to="/register">Start Trading Now</Link>
            </button>
          </section>
        </div>

        <div className="md:flex flex-shrink-0 mx-auto my-auto">
          <img
            src="src/assets/images/Buy_crypto_hero.webp"
            alt=""
            className="mx-auto my-auto flex-shrink-0 w-96 h-96"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:justify-center md:py-20 md:items-center md:p-4 lg:px-[5rem]">
        <div className="">
          <h1 className="pl-4 flex justify-start pt-4 font-extrabold text-xl md:text-3xl mb-4">
            Unleash the Power of Altcoins!
          </h1>

          <p className="p-4 md:p-2">
            Trade seamlessly across top networks like Ethereum, Polygon, Binance
            Smart Chain, Avalanche, and more, effortlessly capturing
            opportunities for explosive growth. With potential returns of up to
            10x, 20x, 30x and even 100x, our cutting-edge platform elevates your
            investment strategy, securing your financial future with confidence
            and ease.
          </p>
          <p className="p-4 md:p-2">
            Join us now and embark on a journey to transform your fortunes.
            Don't miss out on the limitless potential of altcoin trading –
            discover a world of opportunity awaiting you!"
          </p>
        </div>

        <div className="md:flex flex-shrink-0 mx-auto my-auto">
          <img
            src="src/assets/images/lyufg.png"
            alt=""
            className="mx-auto my-auto flex-shrink-0 w-96 h-96"
          />
        </div>
      </section>

      {/* <section className="flex flex-col justify-center items-center py-[6rem] bg-gra0">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl mb-2">HALVE GAIN</h1>

          <div className="text-center text-3xl md:text-4xl font-bold">
            Making trading less of a gamble,
            <br />
            and more of a strategy.
          </div>

          <div className="flex text-3xl font-bold md:text-5xl mt-2 justify-center items-center">
            and more of a strategy.
          </div>
        </div>

        <div>
          <button className="flex items-center shadow-xl hover:bg-yellow-500 hover:shadow-orange-300 justify-center md:justify-center text-white p-2 rounded-lg bg-custom-blue my-8 mx-auto sm:mx-0">
            ClICK HERE TO BEGIN
          </button>
        </div>
      </section> */}

      <section className="flex-col md:flex-col lg:flex-row flex justify-center bg-gray-300">
        <div className="sm:flex justify-start sm:items-center md:justify-start items-start lg:justify-center lg:items-center">
          <img
            src="src/assets/images/Group+Photography.jpeg"
            alt=""
            className="h-[35rem] w-[35rem] bg-custom-blue object-cover"
          />
        </div>

        <div className="sm:my-0 md:flex-wrap flex flex-col gap-[2rem] lg:my-3 bg-gray-100 pl-1 lg:w-[33rem]">
          <p className="text-xl text-custom-blue font-semibold px-3">
            HalveGain
          </p>

          <p className="font-bold text-3xl px-4">Why Investors choose us</p>

          <div>
            <p className="border-b-2"></p>
          </div>

          <div className="flex flex-row gap-2 p-3">
            <div className="rounded-full shrink-0 bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-white">01</span>
            </div>

            <div>
              <p>Instant Funding</p>
              <p>
                Instant Funding All our founding options including deposits and
                payouts are processed with speed to not delay investors
                activities and to enable fast closure of transactions.
              </p>
            </div>
          </div>

          <div>
            <p className="border-b-2"></p>
          </div>

          <div className="flex flex-row gap-2 p-3">
            <div className="rounded-full shrink-0 bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-white">02</span>
            </div>

            <div>
              <p>No Hidden Fees</p>
              <p>
                Transparency is the only policy and we strive to achieve the
                best result with integrity.
              </p>
            </div>
          </div>

          <div>
            <p className="border-b-2"></p>
          </div>
          <div className="flex flex-row gap-2 p-3">
            <div className="rounded-full shrink-0 bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-white">03</span>
            </div>

            <div>
              <p>Strong Security</p>
              <p>
                Security tops our list of interest; our very dynamic platform is
                protected & encrypted using government standard AES encryption.
              </p>
            </div>
          </div>

          <div>
            <p className="border-b-2"></p>
          </div>

          <div className="flex flex-row gap-2 p-3">
            <div className="rounded-full shrink-0 bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-white">04</span>
            </div>

            <div>
              <p>We Are ISO Certified Company</p>
              <p>We have achieved ISO 1182:1770 certification.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-12 bg-gray-500 text-white">
        <div className="max-w-4xl w-full px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-8">
                Empower Your Investments with AI Trading Bots
              </h2>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Maximize returns with advanced algorithms.
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Stay ahead of the market with real-time analysis.
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Stay ahead of the market with real-time analysis.
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Stay ahead of the market with real-time analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-full bg-custom-blue h-80 w-80 flex items-center justify-center mb-8">
                <span className="text-4xl font-bold">AI</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">Access automated trading 24/7.</p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Benefit from dedicated support and assistance.
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Benefit from dedicated support and assistance.
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <div className="rounded-full  bg-custom-blue h-8 w-8 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <p className="text-lg">
                    Benefit from dedicated support and assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-custom-blue  hover:bg-purple-600 hover:shadow-purple-400 text-white py-3 px-8 rounded-full shadow-md transition duration-300">
            <Link to="/register">Start Trading Now</Link>
          </button>
        </div>
      </section>

      <section className="mx-auto p-8 bg-custom-blue2">
        <h1 className="flex text-center pb-6 md:text-start text-2xl pt-10 md:text-4xl font-bold md:flex justify-center text-blue-900 md:mb-5">
          Trading With Our AI Crypto Trading Bots
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col md:flex-row items-center md:items-center p-6 border gap-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 md:w-15 md:h-15 rounded-full shrink-0 bg-custom-blue flex items-center justify-center shadow-md">
              <GiRobotGolem className="text-white text-4xl md:text-5xl" />
            </div>

            <div>
              <h2 className="flex justify-center text-center text-xl md:text-start md:text-2xl font-bold text-blue-900 mt-6">
                Halving Event Optimization
              </h2>
              <p className="flex text-center text-gray-700 mt-2 md:mt-4 md:text-start">
                Bots adjust strategies pre, during, and post-halving, maximizing
                Bots adjust strategies pre, during, and post-halving, maximizing
                Bots adjust strategies pre, during, and post-halving, maximizing
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 md:w-15 md:h-15 rounded-full shrink-0 bg-custom-blue flex items-center justify-center shadow-md">
              <SiThealgorithms className="text-white text-4xl md:text-5xl" />
            </div>

            <div>
              <h2 className="flex justify-center text-center text-xl md:text-2xl md:flex font-bold text-blue-900 mt-6">
                Algorithmic Strategies
              </h2>
              <p className="text-gray-700 text-center mt-2 md:mt-4 md:text-start">
                Utilize advanced algorithms for trend-following, mean reversion,
                Utilize advanced algorithms for trend-following, mean reversion,
                Utilize advanced algorithms for trend-following, mean reversion,
                and sentiment analysis.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 md:w-15 md:h-15 rounded-full shrink-0 bg-custom-blue flex items-center justify-center shadow-md">
              <SiManageiq className="text-white text-4xl md:text-5xl" />
            </div>

            <div className="">
              <h2 className="flex justify-center text-center text-xl md:text-2xl md:flex font-bold text-blue-900 mt-6">
                Risk Management
              </h2>
              <p className="text-gray-700 text-center mt-2 md:mt-4">
                Implement robust protocols for capital protection during market
                Implement robust protocols for capital protection during market
                Implement robust protocols for capital protection during market
                volatility.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 md:w-15 md:h-15 rounded-full shrink-0 bg-custom-blue flex items-center justify-center shadow-md">
              <AiFillControl className="text-white text-4xl md:text-5xl" />
            </div>

            <div>
              <h2 className="flex justify-center text-center text-xl md:text-2xl font-bold text-blue-900 mt-6">
                Transparency and Control
              </h2>
              <p className="text-gray-700 text-center mt-2 md:mt-4">
                Provide clients with real-time monitoring and customization
                Provide clients with real-time monitoring and customization
                Provide clients with real-time monitoring and customization
                options for their trading activities.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-10 md:mt-20">
          <img
            src="src/assets/images/bot2.gif"
            alt="AI Trading Bot"
            className="w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] lg:max-w-lg rounded-lg shadow-xl"
          />
        </div> */}
      </section>

      <section className="flex flex-col justify-center items-center md:justify-center mb-10">
        <div>
          <p className="sm:pt-10 md:text-black flex justify-center mt-6">
            PARTNERS
          </p>

          <h1 className="flex justify-center text-center items-center text-3xl p-3 font-bold md:text-3xl">
            Trusted by Companies World Wide
          </h1>

          <div className="flex justify-center items-center text-3xl text-custom-blue mt-6">
            ___
          </div>
        </div>

        <section className="flex pt-5 flex-wrap md:gap-6 gap-10 mb-10 px-5  lg:flex justify-around lg:flex-wrap">
          <div className="w-[20rem] ">
            <img src="src/assets/images/blockchain-1-300x65.png" alt="" />
          </div>
          <div className="w-[20rem]">
            <img src="src/assets/images/Coindesk-1-300x58.png" alt="" />
          </div>
          <div className="w-[20rem]">
            <img src="src/assets/images/coinbase.webp" alt="" />
          </div>
          <div className="w-[20rem]">
            <img src="src/assets/images/forbes-1-300x93.jpg" alt="" />
          </div>
        </section>
      </section>
      <section className="flex justify-start pt-20 bg-gray-200">
        <div className="flex flex-col p-4 md:pl-[4rem] pb-4">
          <h1 className="text-xl font-semibold md:font-semibold md:text-4xl">
            Trusted by Traders Worldwide
          </h1>
          <p className="text-xl font-normal md:font-normal md:text-3xl">
            Don’t just take our word for it. Here’s what some of our satisfied
            users have to say:
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-4 bg-gray-200 p-2">
        <div className="w-full md:w-1/3 mx-auto my-auto px-2 gap-4">
          <div className="border rounded-lg border-gray-300 p-6 flex-shrink-0">
            <div className="flex text-yellow-400">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
            <p>
              I've had the privilege of incorporating HalveGain into my trading
              strategy for several months now, and I can unequivocally affirm
              that it stands as the most impactful investment decision I've ever
              made. The platform's utilization of AI-powered algorithms has
              revolutionized my trading experience, offering unparalleled
              insights and recommendations that have propelled my profitability
              to new heights.
            </p>
            <div className="max-w-lg mt-10">
              <div className="flex flex-col p-2 rounded-md">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
                    <AiFillControl />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">Elder John Doe</h2>
                    <p className="text-sm md:text-base">English Teacher.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mx-auto my-auto px-2 gap-4">
          <div className="border rounded-lg border-gray-300 p-6 flex-shrink-0">
            <div className="flex text-yellow-400">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
            <p>
              HalveGain has completely changed the way I approach cryptocurrency
              trading. As someone relatively new to the world of digital assets,
              I was initially hesitant to dive in. However, HalveGain's
              intuitive platform and powerful AI-driven insights have given me
              the confidence to navigate the market with ease. Thanks to
              HalveGain, I've seen a significant increase in my trading profits
              and a reduction in my overall risk. It's truly a game-changer!
            </p>
            <div className="max-w-lg mt-10">
              <div className="flex flex-col p-2 rounded-md">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
                    <AiFillControl />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">Sotommom</h2>
                    <p className="text-sm md:text-base">Driver.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 mx-auto my-auto px-2 gap-4">
          <div className="border rounded-lg border-gray-300 p-6 flex-shrink-0">
            <div className="flex text-yellow-400">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
            <p>
              I've been using HalveGain for several months now, and I can
              confidently say it's the best investment decision I've ever made.
              The platform's AI-powered algorithms provide unparalleled trading
              recommendations, helping me capitalize on profitable opportunities
              while minimizing potential losses. What sets HalveGain apart is
              its user-friendly interface and comprehensive range of features,
              making it suitable for both beginners and seasoned traders.
            </p>
            <div className="max-w-lg mt-10">
              <div className="flex flex-col p-2 rounded-md">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-gray-300 text-custom-blue rounded-full text-4xl h-12 w-12">
                    <AiFillControl />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">Easy Bite</h2>
                    <p className="text-sm md:text-base">Plumber.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-[6rem] bg-gray-200">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl mb-2">WE MAKE A DIFFERENCE</h1>
          <div className="flex text-3xl sm:items-center justify-center items-center font-bold md:text-5xl">
            The Best Platform For
          </div>

          <div className="flex text-3xl font-bold md:text-5xl mt-2 justify-center items-center">
            Easy Investments
          </div>
        </div>

        <div>
          <button className="flex items-center shadow-xl hover:bg-purple-600 hover:shadow-purple-400 justify-center md:justify-center text-white p-2 rounded-lg bg-custom-blue my-8 mx-auto sm:mx-0">
            <Link to="/register">CLICK HERE TO GET STARTED</Link>
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center md:justify-center mb-10">
        <div>
          <p className="text-custom-blue flex justify-center mt-6">
            NO HIDDEN CHARGES!
          </p>
          <h1 className="font-bold text-3xl">Explore the Packages</h1>
          <div className="flex justify-center items-center text-3xl text-custom-blue mt-6">
            ___
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center p-4 md:p-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="py-6 px-8 text-white rounded-t-lg text-center">
            <h1 className="text-3xl font-bold">BASIC PLAN</h1>
          </div>
          <div className="px-8 pb-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">$100 - $900</h2>
            <p className="text-white bg-purple-600 inline-block rounded-full px-4 py-2 mb-6">
              21 Days
            </p>
            <ul className="flex flex-col items-center justify-center text-white text-left mb-6">
              <li className="mb-2">8% Profit weekly</li>
              <li className="mb-2">3% Referral percent</li>
              <li className="mb-2">$900 max price</li>
              <li className="mb-2">Support 24/7</li>
            </ul>
          </div>
          <button className="block w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-b-lg">
            Get now
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="py-6 px-8 text-white rounded-t-lg text-center">
            <h1 className="text-3xl font-bold">STANDARD PLAN</h1>
          </div>
          <div className="px-8 pb-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">$1,000 - $99,000</h2>
            <p className="text-white bg-blue-600 inline-block rounded-full px-4 py-2 mb-6">
              30 Days
            </p>
            <ul className="flex flex-col items-center text-white text-left mb-6">
              <li className="mb-2">15% Profit weekly</li>
              <li className="mb-2">5% Referral bonus</li>
              <li className="mb-2">$99,000 max price</li>
              <li className="mb-2">24/7 Support</li>
            </ul>
          </div>
          <button className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-b-lg">
            Get now
          </button>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="py-6 px-8 text-white rounded-t-lg text-center">
            <h1 className="text-3xl font-bold">EXECUTIVE PLAN</h1>
          </div>
          <div className="flex flex-col items-center px-8 pb-6">
            <h2 className="text-2xl font-semibold mb-4">$100,000 - 1M</h2>
            <p className="text-white bg-green-600 inline-block rounded-full px-4 py-2 mb-6">
              42 Days
            </p>
            <ul className="flex flex-col items-center text-white text-left mb-6">
              <li className="mb-2">20% Profit weekly</li>
              <li className="mb-2">12% Referral percent</li>
              <li className="mb-2">$Unlimited max</li>
              <li className="mb-2">Support 24/7</li>
            </ul>
          </div>
          <button className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-b-lg">
            Get now
          </button>
        </div>
      </section>

      <section className="flex flex-col md:flex-row md:justify-center md:items-center py-10 md:py-[10rem] mt-10 bg-gray-900 text-white">
        <div className="md:w-[80%] md:max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
            24/7 Support for Your Investment Journey
          </h1>

          <p className="text-lg md:text-xl px-4 md:px-0 mb-8 text-center">
            Experience seamless communication with our dedicated support team.
            Whether you have questions, need technical assistance, or require
            personalized guidance, we're here for you.
          </p>

          <button className="bg-custom-blue hover:bg-purple-600 hover:shadow-purple-400 text-white py-4 px-8 rounded-full shadow-xl transition duration-300 mx-auto block">
            <Link to="/contact">Contact Support</Link>
          </button>
        </div>
      </section>

      <section className="flex flex-col bg-slate-200 justify-center items-center md:justify-center">
        <div>
          <p className="text-custom-blue flex pt-[5rem] justify-center mt-6">
            OUR VERIFIED ASSOCIATES
          </p>
          <h1 className="font-bold text-3xl text-center">
            Discover Our Top Investors And Earners
          </h1>
          <div className="flex justify-center items-center text-3xl text-custom-blue mt-6">
            ___
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 px-2 flex-wrap bg-slate-200 pb-[20rem] md:flex-row justify-evenly pt-10">
        <div className="flex justify-center flex-col items-center  bg-gray-200 ">
          <img
            src="src/assets/images/roger-695x695-1-480x480.jpeg"
            alt=""
            className="flex h-[15rem] w-[15rem] rounded-lg hover:scale-105 object-cover "
          />
          <div className="p-5 font-bold ">Edward Dowd</div>
        </div>

        <div className="flex justify-center flex-col items-center  bg-gray-200 ">
          <img
            src="src/assets/images/rog4.jpeg"
            alt=""
            className="flex h-[15rem] w-[15rem] rounded-lg hover:scale-105 object-cover "
          />
          <div className="p-5 font-bold ">Jason Miller</div>
        </div>

        <div className="flex justify-center flex-col items-center  bg-gray-200 ">
          <img
            src="src/assets/images/rog3.jpeg"
            alt=""
            className="flex h-[15rem] w-[15rem] rounded-lg hover:scale-105 object-cover "
          />
          <div className="p-5 font-bold ">Steve Bannon</div>
        </div>

        <div className="flex justify-center flex-col items-center  bg-gray-200 ">
          <img
            src="src/assets/images/rog4.jpeg"
            alt=""
            className="flex h-[15rem] w-[15rem] rounded-lg hover:scale-105 object-cover "
          />
          <div className="p-5 font-bold ">Steve Cortes</div>
        </div>
      </section>
    </div>
  );
}
