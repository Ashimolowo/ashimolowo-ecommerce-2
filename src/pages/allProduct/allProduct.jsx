import { useNavigate } from "react-router-dom";
import productData from './../../components/homepageProductCard/productData';
import ProductInfo from './../productInfo/productInfo';
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import MyContext from "../../context/myContext";
import Loader from "../../components/loader/loader";


const AllProduct = () => {
    const navigate = useNavigate()

    const context = useContext(MyContext)
    const {loading, getAllProduct} = context;
    return (
        <Layout>
            <div className="py-8">
           {/**/}
           <div className="">
            <h1 className="text-center mb-5 text-2xl font-semibold">All Products</h1>
           </div>
           {/*main*/}
           <section className="text-gray-600 body-font">
            <div className="container px-5 lg:px-0 py-5 mx-auto">
                {/*loader */}
                <div className="flex justify-center">
                    {loading && <Loader/>}
                </div>
                <div className="flex flex-wrap -m-4">
                    {getAllProduct.map((item, index) => {
                        const {id, title, price, productImageUrl} = item
                        return (
                            <div key={index} className="p-4 w-full md:w-1/4">
                                <div className="h-full boarder border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                    <img src={productImageUrl} alt="Shaybah💦" className="lg:h-80 h-96 w-full" 
                                        onClick={() => navigate(`/ProductInfo/${id}`)}/>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                NAAS
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0,25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            ₦{price}
                                            </h1>

                                            <div className="flex justify-center">
                                                <button className="bg-customStone hover:bg-brown-300 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           </section>
        </div>
        </Layout>
      );
}
 
export default AllProduct;
