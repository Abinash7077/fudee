import React, { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
const Filter = ({showFilter,closeFilterDialog}) => {
  const filterItem = [
    { itemName: "Sort" },
    { itemName: "Delivery Time" },
    { itemName: "Cuisines" },
    { itemName: "Explore" },
    { itemName: "Ratings" },
    { itemName: "Veg/Non-Veg" },
    { itemName: "Offers" },
    { itemName: "Cost For Two" },
  ];

  const contentMap = {
    "Sort": [
      {
        title: 'SORT BY',
        list: ['Relevance', 'Delivery Time', 'Ratings', 'Cost:LowToHigh', 'Cost:HighTOLow']
      }
    ],
    "Delivery Time": [
      {
        title: 'FILTER BY',
        list: ['Fast Delivery']
      }
    ],
    "Cuisines": [
      {
        title: 'FILTER BY CUISINES',
        list: ['Afghani', 'American', 'Andhra', 'Arabian', 'Asian', 'Assamese', 'Awadhi', 'Bakery', 'Bakery']
      }
    ],
    "Explore": [
      {
        title: 'FILTER BY',
        list: ['New On Swiggy', 'Swiggy Exclusive']
      }
    ],
    "Ratings": [
      {
        title: 'FILTER BY',
        list: ['Ratings 4.5+', 'Ratings 4.0+', 'Ratings 3.5+']
      }
    ],
    "Veg/Non-Veg": [
      {
        title: 'FILTER BY',
        list: ['Pure Veg', 'Non Veg']
      }
    ],
    "Offers": [
      {
        title: 'RESTAURANTS WITH',
        list: ['Offers']
      }
    ],
    "Cost For Two": [
      {
        title: 'FILTER BY',
        list: ['Rs. 300- Rs. 600', 'Greater than Rs. 600', 'Less than Rs. 3000']
      }
    ]
  };

  const [activeItem, setActiveItem] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index); // Toggle active state
  };
  

  const handleCheckboxChange = (filterCategory, itemIndex) => {
    setCheckedItems((prevState) => {
      const currentCategoryState = prevState[filterCategory] || [];
      if (currentCategoryState.includes(itemIndex)) {
        return {
          ...prevState,
          [filterCategory]: currentCategoryState.filter((i) => i !== itemIndex),
        };
      } else {
        return {
          ...prevState,
          [filterCategory]: [...currentCategoryState, itemIndex],
        };
      }
    });
  };

  return (
    <>
        {showFilter?<><div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-2/3 h-[470px] bg-white rounded-lg md:p-6">
            <div className="flex items-center justify-between"><h2 className="font-bold text-2xl mb-2">Filter</h2><span><RxCross2 style={{width:'20px',height:'20px'}} onClick={closeFilterDialog}/></span></div>
            <hr />
            <div className="flex pt-3">
              <div className="w-1/3 h-[390px] overflow-hidden flex flex-col gap-2">
                <div
                  className="h-[auto] relative flex flex-col gap-2 overflow-y-auto"
                  style={{ scrollBehavior: "smooth" }}
                >
                  {filterItem.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleItemClick(index)}
                      className={`h-[80px] flex items-center relative ${
                        activeItem === index ? 'bg-gray-200' : 'bg-white'
                      } cursor-pointer rounded-lg`}
                    >
                      {activeItem === index && (
                        <div className="absolute top-1 flex items-center left-0 w-[5px] h-[80%] my-auto bg-orange-500 rounded-r-lg"></div>
                      )}
                      <Link href="/" className="text-lg font-extrabold block p-4 w-full">
                        {item.itemName}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="bg-gray-200 h-[370px]" style={{ width: '1px' }} />
              <div className="w-2/3 px-4">
                {activeItem !== null && (
                  <>
                    <p className="text-gray-800 font-bold">
                      {contentMap[filterItem[activeItem].itemName][0].title}
                    </p>
                    <ul>
                      {contentMap[filterItem[activeItem].itemName][0].list.map((item, index) => (
                        <li key={index} className="text-gray-600 mt-2 flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={checkedItems[filterItem[activeItem].itemName]?.includes(index) || false}
                            onChange={() => handleCheckboxChange(filterItem[activeItem].itemName, index)}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div></>:''}
    </>
  );
};

export default Filter;
