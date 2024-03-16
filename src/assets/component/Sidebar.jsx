
import PropTypes from 'prop-types';

const Sidebar = ({ click }) => {

    return (

        <div className='w-5/12'>
            <h1>Want to Coock :</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
                <div>
                    {
                        // eslint-disable-next-line react/prop-types
                        click.map((item, index) => {
                            <div key={index}>
                            <tr>
                                <th>{index}</th>
                                <td>{item.recipe_name}</td>
                                <td>{item.preparing_time}</td>
                                <td>{item.calories}</td>
                            </tr>
                        </div>
                        }
                        )}

                </div>
            </div>
        </div >
    );
};

Sidebar.propTypes = {

};

export default Sidebar;