import React from "react";

const ServicePage = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="container mx-auto py-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">AI-Powered Trading</h2>
            <p className="text-gray-700 mb-4">
              Our AI algorithms analyze market data in real-time to provide
              accurate trading signals and optimize your investment strategy.
            </p>
            <ul className="list-disc ml-6">
              <li>Automated trading recommendations</li>
              <li>24/7 monitoring of market trends</li>
              <li>Customizable trading parameters</li>
              <li>Integration with major exchanges</li>
              <li>Advanced risk management tools</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Explore more about AI-Powered Trading{" "}
              <a href="/ai-trading" className="text-blue-500 underline">
                here
              </a>
              .
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Portfolio Management</h2>
            <p className="text-gray-700 mb-4">
              Our platform offers portfolio management tools to help you
              diversify your investments and maximize returns.
            </p>
            <ul className="list-disc ml-6">
              <li>Track and analyze portfolio performance</li>
              <li>Automatic rebalancing of assets</li>
              <li>Investment tracking and reporting</li>
              <li>Asset allocation optimization</li>
              <li>Real-time portfolio insights</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Learn more about Portfolio Management{" "}
              <a
                href="/portfolio-management"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Community Support</h2>
            <p className="text-gray-700 mb-4">
              Join our community of traders to share insights, discuss market
              trends, and learn from industry experts.
            </p>
            <ul className="list-disc ml-6">
              <li>Interactive forums and discussion groups</li>
              <li>Live webinars and Q&A sessions</li>
              <li>Access to exclusive trading resources</li>
              <li>Networking opportunities with other traders</li>
              <li>Personalized support from our team</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Join our Community Support program{" "}
              <a href="/community-support" className="text-blue-500 underline">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
