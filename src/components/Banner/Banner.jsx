import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row  gap-2 justify-center md:items-center my-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-2'>Boi Poka has collection almost 12000</h2>
                <p className='text-xl  text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure est nobis animi quia! Laudantium velit consequatur nulla commodi nisi molestiae pariatur! Saepe distinctio laudantium ipsum modi doloribus officia ratione.</p>
            </div>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;