import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex fixed flex-wrap place-items-center ">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-accent text-white w-screen">
            <div className="px-5 xl:px-10 py-2 flex w-full items-center">
              <Link to={"/"} className="text-3xl font-bold font-heading">
                ReduxWasp.
              </Link>
            </div>
            <div className="flex items-center justify-between w-full">
              <Link to={"/products"} className="text-xl font-heading">
                Products.
              </Link>
              <Link to={"/cart"} className="xl:hidden flex mr-6 items-center">
                <div className="relative py-2">
                  <div className="top-4 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      {cart.length}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Nav;
