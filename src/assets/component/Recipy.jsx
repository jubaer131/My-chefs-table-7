
import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";

const Recipy = ({ recipy, handleClick }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipy;

    console.log(recipy)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-6 pt-10 ">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl max-h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr className='border-[1px] border-solid border-[#2828281a] w-full my-6' />
                    <div className=' w-full '>
                        <h3 className='text-left'>Ingradience :{ingredients.length}</h3>
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
                                <IoTimeOutline className=' h-8'></IoTimeOutline>
                                <p className='text-left'>{preparing_time}</p>
                            </div>

                            <p className='text-left'><span></span>{calories}</p>
                        </div>
                        <div className='text-left'>
                            <button onClick={() => { handleClick(recipy) }} className="btn  lg:w-[170px] lg:h-[60px] bg-green-500 rounded-3xl border-0 lg:text-xl">Want to cook</button>
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