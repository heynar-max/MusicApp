import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components"
import { HomePage } from "../page"


export const MusicRouter = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    )
}
