import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

function Navbar(props) {
  const cart = props.cart;
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px]";
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="h-[60px] shadow-md relative">
        <div className="pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
          {/* Logo */}
          <div className="flex-1 text-start  mobile:ml-6">
            <div className="font-bold text-lg mobile:text-sm">E-Store</div>
          </div>
          <div className="flex flex-1  items-center justify-center">
            <div className="cursor-pointer text-[16px] mobile:hidden">En</div>

            {/* Search Input */}
            <div className="flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
              <input
                type="text"
                className="border-none mobile:w-[50px] outline-none"
                placeholder="Search"
              />
              <SearchIcon
                className="text-[#8a4af3] m"
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
            <div className={style}>Register</div>
            <div className={style}>Sign In</div>
            <div className={style}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
