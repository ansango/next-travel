import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Avatar,
  Container,
} from "components/common";

import { useSession } from "next-auth/react";
const navList = (
  <ul className="py-5 lg:py-0 mb-4 mt-2 flex flex-col gap-6 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="font-normal"
    >
      <a href="#" className="flex items-center">
        Pages
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="font-normal"
    >
      <a href="#" className="flex items-center">
        Account
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="font-normal"
    >
      <a href="#" className="flex items-center">
        Blocks
      </a>
    </Typography>
  </ul>
);
export const Nav = () => {
  const { data } = useSession();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <header>
      <Container>
        <Navbar className="mx-auto max-w-full px-0" shadow={false}>
          <div className="mx-auto flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center space-x-4 lg:space-x-0">
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="mr-4 cursor-pointer py-1.5 font-normal"
              >
                <span>Material Tailwind</span>
              </Typography>
            </div>
            <div className="hidden lg:block ml-auto">{navList}</div>
            {data?.user && (
              <Avatar
                src="https://avatars.githubusercontent.com/u/1016365?v=4"
                size="sm"
                variant="circular"
                className="ml-8"
              />
            )}
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </Navbar>
      </Container>
    </header>
  );
};
