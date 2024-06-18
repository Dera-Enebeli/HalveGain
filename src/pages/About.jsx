import React from "react";

export default function About() {
  return (
    <main className="bg-gray-100 px-4 md:px-8">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 px-4 py-12 mt-12 rounded-lg shadow-xl">
        <div className="container mx-auto">
          <img
            src="/src/assets/images/Group+Photography.jpeg"
            alt="About Us Image"
            className="absolute inset-0 w-full h-full object-cover opacity-25 rounded-lg"
          />
          <div className="relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              Empowering Your Crypto Journey
            </h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              At HalveGain, we are dedicated to revolutionizing the way you
              trade cryptocurrencies. Our mission is to empower traders of all
              levels with cutting-edge technology and expert insights, ensuring
              success in the dynamic world of digital asset.
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Whether you're a seasoned investor or just starting out, HalveGain
              provides intuitive tools and comprehensive resources to help you
              navigate the complexities of the market with confidence. Join us
              and embark on your journey to financial freedom today.
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              HalveGain is committed to reshaping the landscape of
              cryptocurrency trading. Our vision is to democratize access to
              advanced trading strategies and empower individuals to achieve
              their financial goals in the ever-evolving crypto market.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto my-20">
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <img
              src="/src/assets/images/cus.png"
              alt="About Us Image"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-3xl font-semibold text-gray-800 mb-8">
              Empowering Your Financial Future: Discover Our Story and Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              HalveGain is dedicated to revolutionizing the cryptocurrency
              space. Our cutting-edge platform leverages blockchain technology
              to navigate halving events in the digital currency market. We
              empower investors to capitalize on halving events and maximize
              returns from leading cryptocurrencies like Bitcoin. Our goal is to
              facilitate passive wealth growth without hidden charges, helping
              investors achieve financial freedom.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg px-6 shadow-md">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Modern Solutions
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  HalveGain offers AI-powered trading with real-time market
                  analysis, customizable strategies, 24/7 support, a secure
                  platform.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 pb-4 shadow-md">
                <div className="h-12 w-12 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {/* Icon */}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Cutting-edge Technology
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-2">
                  HalveGain leverages cutting-edge technology to provide
                  advanced trading solutions, offering users access to
                  state-of-the-art algorithms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
