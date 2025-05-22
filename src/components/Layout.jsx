import { Outlet } from "react-router-dom"
import Header from "./Header"
import ScrollWrapper from "../components/ScrollWrapper"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <ScrollWrapper>
                <main>
                    <Outlet/>
                </main>
            </ScrollWrapper>
        </div>
    )
}