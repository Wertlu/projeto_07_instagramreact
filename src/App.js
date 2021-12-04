import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import FundoMobile from "./FundoMobile";
export default function App() {
    return (
        <div>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
            <FundoMobile />
        </div>
    )
}