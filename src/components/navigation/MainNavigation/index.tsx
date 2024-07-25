import { useState } from "react";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
const navigationsProductRoutes = [
  { name: "Men", icon: "Men", link: "/men" },
  { name: "Women", icon: "Explore", link: "/women" },
  { name: "Kids", icon: "Reels", link: "/kids" },
  { name: "Home&Living", icon: "Messanger", link: "/home&living" },
  { name: "Beauty", icon: "Notification", link: "/beauty" },
];

function MainNavigation() {
  // const token = useRouteLoaderData('root')

  const [isMainDropDownMenuOpen, setIsMainDropDownMenuOpen] = useState(false);
  const [isProfileDropDownMenuOpen, setIsProfileDropDownMenuOpen] =
    useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const [searchSmallScreenOpen, setSearchSmallScreenOpen] = useState(false);
  const mainDropDownMenuHandler = () => {
    setIsMainDropDownMenuOpen(!isMainDropDownMenuOpen);
    console.log("clicked", isMainDropDownMenuOpen);
  };

  return (
    <nav className="z-50 sticky top-0 bg-white border-gray-200 dark:bg-gray-900 shadow-sm">
      <h3>This is nav</h3>
      <ul>
        {navigationsProductRoutes.map((route: any) => {
          return (
            <li key={route.name}>
              <NavLink
                onClick={mainDropDownMenuHandler}
                to={route.link}
                aria-current="page"
              >
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default MainNavigation;
