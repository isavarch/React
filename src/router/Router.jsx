import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "../App"
import Ejemplo from "../Ejemplo"
import Git from "../gitSearch/Git" 


const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<App/>}/>
            <Route path="/buscador" element={<Git/>}/>
            <Route path="/ejemplo" element={<Ejemplo/>}/>

        </Routes>
        </BrowserRouter>

    )
}

export default Router;