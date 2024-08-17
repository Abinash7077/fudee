import React,{useState} from 'react';

function SortBy({sortByDialog}) {
  const sortData=[
    {
      id:1,
      title:'Relevance(Default)'
    },
    {
      id:2,
      title:'Delivery Time'
    },
    {
      id:3,
      title:'Rating'
    },
    {
      id:4,
      title:'Cost:LowToHigh'
    },
    {
      id:5,
      title:'Cost:HighToLow'
    },
  ]
  const [activeSort,setActiveSort]= useState(0);
  const [sortOption,setSortOption] = useState(0)
  return (
    <>
       {sortByDialog?<><div className="absolute top-[40px] left-0  flex items-center justify-center  bg-opacity-50">
       <div className=" h-[250px] min-w-[215px] bg-white rounded-lg md:p-4">
        <div className="flex w-full h-full justify-between flex-col">{
          sortData.map((item,index)=>(
<>
<div className="flex cursor-pointer items-center gap-4 justify-between" key={index} onClick={()=>{setActiveSort(index);setSortOption(index)}}>
  <h3 className= {`text-md list-none ${activeSort==index?'text-black font-semibold':'text-gray-400'} `} key={index} >{item.title}</h3>
<input type="radio" className='w-[18px] h-[18px]' checked={sortOption==index}/>
</div>
</>
          ))
        }
        <hr className='w-full bg-gray-500 h-[1px]' />
        <button className='text-orange-600 font-bold text-left text-[16px] font-sans'>Apply</button>
        </div>
       </div>
       </div></>:''}
    </>
  );
}

export default SortBy;
