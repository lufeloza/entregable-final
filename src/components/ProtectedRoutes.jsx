import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ()=>{

   // localStorage.getItem('token')
    // si hay un valor almacenado nos mostrara el valor almacenao
    // de lo contrario nas traera un -> Null

    const tokenValue = localStorage.getItem('token')

    if(tokenValue){
        return <Outlet/> // La vista
    }else{
        return <Navigate to= '/loguin' /> // la redireccion
    }

}

export default ProtectedRoutes