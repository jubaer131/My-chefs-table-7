
import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFire } from "react-icons/fa";

const Recipy = ({ recipy, handleClick }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipy;


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-6 pt-10 ">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl max-h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-[16px] font-normal'>{short_description}</p>
                    <hr className='border-[1px] border-solid border-[#2828281a] w-full my-6' />
                    <div className=' w-full '>
                        <h3 className='text-left text-[18px] font-medium mb-4'>Ingradience :{ingredients.length}</h3>
                        <div className='pl-6 text-left  px-5'>

                            {
                                ingredients.map((ingredient, index) => <li key={index}
                                >{ingredient}</li>)

                            }

                        </div>
                    </div>
                    <hr className='border-[1px] border-solid  border-[#2828281a] w-full my-6' />
                    <div className='w-full'>
                        <div className='flex justify-start items-start gap-8 mb-8'>
                            <div className='flex gap-2 justify-start items-center'>
                                <span>  <IoTimeOutline className=' h-8'></IoTimeOutline></span>
                                <p className='text-left'>{preparing_time}</p>
                            </div>
                            <div className='flex gap-2 justify-start items-center'>
                                <span><FaFire></FaFire></span>
                                <p className='text-left'>{calories}</p>

                            </div>

                        </div>
                        <div className='text-left'>
                            <button onClick={() => handleClick(recipy)} className="btn  lg:w-[170px] lg:h-[60px] bg-green-500 rounded-3xl border-0 lg:text-xl font-medium">Want to cook</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipy.propTypes = {
    recipy: PropTypes.object,
};

export default Recipy;