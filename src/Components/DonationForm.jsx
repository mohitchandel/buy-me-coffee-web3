import React from "react";
import { useAccount } from "wagmi";

export const DonationForm = () => {
  const { address, isConnected } = useAccount();

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-200 "
              src="coffee.png"
              alt="Workflow"
              width={100}
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Donate to Mohit
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Your Message
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="current-message"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Message in one line"
                />
              </div>
              <div>
                <label htmlFor="amount" className="sr-only">
                  Amount in MATIC
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  autoComplete="amount"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Amount (In MATIC)"
                />
              </div>
            </div>

            <div>
              {isConnected ? (
                <button
                  disabled={isConnected}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Donate
                </button>
              ) : (
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
