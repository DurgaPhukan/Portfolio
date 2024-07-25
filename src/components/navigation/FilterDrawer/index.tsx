import { useState } from "react";

function FilterDrawer() {
  const [filters, setFilters] = useState([
    {
      name: "catagories",
      type: "radio",
      open: false,
      options: [
        {
          label: "Tshirt",
          selected: false,
        },
        {
          label: "Jeans",
          selected: true,
        },
      ],
      svg: (
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "brand",
      type: "radio",
      open: false,
      options: [
        {
          label: "Levi's",
          selected: false,
        },
        {
          label: "Jeans",
          selected: true,
        },
      ],
      svg: (
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "price",
      type: "radio",
      open: false,
      options: [
        {
          label: "99 to 199",
          selected: false,
        },
        {
          label: "199 to 599",
          selected: false,
        },
        {
          label: "599 to 1099",
          selected: true,
        },
        {
          label: "1099 to max",
          selected: false,
        },
      ],
      svg: (
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerHandler = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const filterOpenHandler = (name: string) => {
    const filtersCopy = [...filters];
    filtersCopy.forEach((filter) => {
      if (filter.name === name) {
        filter.open = !filter.open;
      }
    });
    setFilters(filtersCopy);
  };

  const checkboxHandler = (name:string,clickedOption:string)=>{
    console.log(name,clickedOption);
    
    const filtersCopy = [...filters];
    filtersCopy.forEach(filter=>{
      if(filter.name === name){
        filter.options.forEach(option=>{
          if(option.label === clickedOption && filter.name === name){
            option.selected = !option.selected
          }
        })
      }
    })
    setFilters(filtersCopy);
  }
  return (
    <div>
      {/* <!-- drawer init and show --> */}
      <div className=" md:hidden mx-auto max-w-screen-2xl py-4 lg:py-8">
        <button
          onClick={drawerHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          Filter
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-navigation"
        className={`md:static sm:z-0 fixed top-48 md:top-20 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          !isDrawerOpen ? "-translate-x-full" : ""
        } bg-white w-full md:w-52 xl:w-full dark:bg-gray-800 md:-translate-x-0`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Filter
        </h5>
        <button
          onClick={drawerHandler}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="md:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {filters.map((filter) => (
              <li id={filter.name}>
                <button
                  onClick={() => filterOpenHandler(filter.name)}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  {filter.svg}
                  <span className="flex-1 ml-3 text-left whitespace-nowrap uppercase">
                    {filter.name}
                  </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <ul
                  id="dropdown-example"
                  className={`${filter.open ? "" : "hidden"} py-2 space-y-2`}
                >
                  {filter.options.map((option) => (
                    <li id={option.label}>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <div 
                        className="flex items-center">
                          <input
                            onClick={()=>checkboxHandler(filter.name,option.label)}
                            checked={option.selected}
                            id={option.label}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                             onClick={()=>checkboxHandler(filter.name,option.label)}
                            htmlFor={option.label}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {option.label}
                          </label>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FilterDrawer;
