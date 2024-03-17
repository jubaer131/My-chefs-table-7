


const Banner = () => {
    return (


        <div className="hero bg-opacity-100  lg:h-[650px] mt-5 lg:mt-14 rounded-3xl " style={{ backgroundImage: 'url(https://i.ibb.co/44TTzg0/banner.png)' }}>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[900px] ">
                    <h1 className="max-sm:pt-8 mb-5 lg:text-5xl text-xl font-bold lg:leading-[60px]">Welcome to our exceptional cooking class experience!</h1>
                    <p className="mb-5 text-[15px] lg:text-[18px] lg:leading-[30px]">
                        In our classes, you will learn from expert chefs who are passionate about sharing their knowledge and techniques.You will leave each class feeling inspired,  and ready to recreate mouthwatering dishes in your own kitchen.
                    </p>
                    <div className="flex justify-center items-center gap-6">
                        <button className="btn  lg:w-[170px] lg:h-[60px] bg-green-500 rounded-3xl border-0 lg:text-xl">Explore Now</button>
                        <button className="btn bg-[#ffffff00] text-white lg:w-[170px] lg:h-[60px]  rounded-3xl  lg:text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>


    );
};



export default Banner;