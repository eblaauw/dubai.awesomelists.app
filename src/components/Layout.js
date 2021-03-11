import React from "react"
import SEO from "./SEO"
import List from "../components/List"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="container mx-auto px-4 md:px-0 font-sans lg:w-3/4">
        <div className="mt-12 md:mt-20">
          <h1 className="text-4xl md:text-5xl font-bold relative font-title">✨ Awesome list of amazing places in Dubai</h1>
        </div>
        <div className="w-full">
          <div className="mt-8 md:mt-8 mb-8">
            <div className="shadow p-5 rounded-md">
              <p className="text-gray-800 pt-1">
                Dubai is an amazing place to be in, but it can be hard to find the right places. You won't see a big list with all possible options, you'll only see the best of the best in this list.<br /> <br />
          </p>
          <List />
            </div>
          </div>
        </div>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          &copy; Edzo Blaauw 2021
        </footer>
      </div>
    </>
  )
}

export default Layout
