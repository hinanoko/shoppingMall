import { useSelector } from "react-redux";
import Fresh from "../product/fresh";
import Beverage from "../product/beverage";
import Frozen from "../product/frozen";
import Home from "../product/home";
import PetFood from "../product/petFood";
import SearchItem from "../product/search";
import imgSrc from "../images/mall.jpg"

const Main = function () {
    const product = useSelector(state => state.productHandler.products)
    if (product === "FRESH") {
        return (
            <div>
                <Fresh></Fresh>
            </div>
        )
    } else if (product === "BEVERAGE") {
        return (
            <div>
                <Beverage></Beverage>
            </div>
        )
    } else if (product === "FROZEN") {
        return (
            <div>
                <Frozen></Frozen>
            </div>
        )
    } else if (product === "HOME") {
        return (
            <div>
                <Home></Home>
            </div>
        )
    } else if (product === "PETFOOD") {
        return (
            <div>
                <PetFood></PetFood>
            </div>
        )
    } else if (product === "SEARCH") {
        return (
            <div>
                <SearchItem></SearchItem>
            </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={imgSrc} style={{ display: 'block', height: "600px", width: "1000px", marginTop: '-50px' }}></img>
            </div>
        )
    }
}

export default Main