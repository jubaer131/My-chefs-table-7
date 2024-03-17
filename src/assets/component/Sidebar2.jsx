

const Sidebar2 = ({ addRacipy }) => {



    return (

        <div className="lg:px-10">
            {
                // eslint-disable-next-line react/prop-types
                addRacipy.map((data, index) =>
                    <div className="overflow-x-auto" key={index} >
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className='text-[16px] font-normal'>{index + 1}</td>
                                    <td className='text-[16px] font-normal'>{data.recipe_name}</td>
                                    <td className='text-[16px] font-normal'>{data.preparing_time}</td>
                                    <td className='text-[16px] font-normal'>{data.calories}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                )
            }
        </div>


    );
};

export default Sidebar2;