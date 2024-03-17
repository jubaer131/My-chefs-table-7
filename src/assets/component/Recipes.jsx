
import PropTypes from 'prop-types';
import Recipy from './Recipy';
import { useEffect, useState } from 'react';


const Recipes = ({ handleClick }) => {
    const [recipies, setrecipies] = useState([]);
    useEffect(() => {
        fetch('SpecialRecipy.json')
            .then(res => res.json())
            .then(data => setrecipies(data))
    }, [])


    return (
        <div className='w-7/12 grid grid-cols-1 lg:grid-cols-2  gap-5 max-sm:w-full'>


            {
                recipies.map((recipy) => <Recipy recipy={recipy} handleClick={handleClick} key={recipy.id}
                ></Recipy>)
            }

        </div>
    );
};

Recipes.propTypes = {

};

export default Recipes;