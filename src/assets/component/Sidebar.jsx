
import PropTypes from 'prop-types';
import Sidebar2 from './Sidebar2';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ clicks, handleRemove }) => {



    const [totalCalory, setTotalCalory] = useState(0);

    const [totalTime, setTotalTime] = useState(0);

    const [addRacipy, setAddRacipy] = useState([]);
    const Display = show => {
        setAddRacipy([...addRacipy, show])

    }

    const TotalTime = (time) => {

        setTotalTime(totalTime + parseInt(time))

    }

    const TotalCalories = (calory) => {
        setTotalCalory(totalCalory + parseInt(calory))
    }



    return (

        <div className='w-5/12 lg:p-12 max-sm:w-full shadow-2xl'>
            <h1 className='text-center text-[24px] font-semibold max-sm:pb-5 pb-6'>Want to Coock : {clicks.length}</h1>
            <hr className='border-[1px] border-solid border-[#2828281a] w-full ' />
            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Time</th>
                            <th className='text-xl'>Calories</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='max-sm:px24 lg:px-3'>
                {
                    // eslint-disable-next-line react/prop-types
                    clicks.map((item, index) =>
                        <div className="overflow-x-auto" key={index} >
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className='text-[16px] font-normal'>{index + 1}</td>
                                        <td className='text-[16px] font-normal'>{item.recipe_name}</td>
                                        <td className='text-[16px] font-normal'>{item.preparing_time}</td>
                                        <td className='text-[16px] font-normal'>{item.calories}</td>
                                        <td><button onClick={() => { handleRemove(item.id); Display(item); TotalTime(item.preparing_time); TotalCalories(item.calories); }} className='btn bg-green-500 rounded-3xl text-[16px]  text-black font-medium'>Preparing</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    )
                }
            </div>
            <div className='mt-28'>
                <h1 className='text-center text-[24px] font-semibold pb-6'>Currently Cooking : {addRacipy.length}</h1>
                <hr className='border-[1px] border-solid border-[#2828281a] w-full ' />
                <div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th></th>
                                <th className='text-xl'>Name</th>
                                <th className='text-xl'>Time</th>
                                <th className='text-xl'>Calories</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <Sidebar2 addRacipy={addRacipy}></Sidebar2>

            </div>
            <div className='mt-14 flex justify-around max-sm:mb-10'>
                <h1 className='text-[16px] font-medium'>Total time :{totalTime} </h1>
                <h1 className='text-[16px] font-medium'>Total calories : {totalCalory}</h1>
            </div>

        </div >

    );
};

Sidebar.propTypes = {
    click: PropTypes.object,
    handleRemove: PropTypes.function
};

export default Sidebar;