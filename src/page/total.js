import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstPage from "./firstPage";
import Cart from "./cart";
import Payment from "./payment";
import Confirm from "./confirm";

const Total = function () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage></FirstPage>}></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>
                    <Route path="/payment" element={<Payment></Payment>}></Route>
                    <Route path="/confirm" element={<Confirm></Confirm>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Total;