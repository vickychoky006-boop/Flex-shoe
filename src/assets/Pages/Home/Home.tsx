import Categories from "../../components/Categories/Categories"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Heroes from "../../components/Heroes/Heroes"
import HomeCard from "../../components/HomeCard/HomeCrad"
import Product from "../../components/Product/Product"
import ReviewVideo from "../../components/ReviewVideo/ReviewVideo"

function Home(){
    return(
        <>
        <Header/>
        <Heroes/>
        <Product/>
        <Categories/>
        <HomeCard/>
        <ReviewVideo/>
        <Footer/>
        
        

        
        </>
    )
}
export default Home
