import Aside from "./Componets/Aside/Aside"
import Main from "./Componets/Main/Main"
import Sidebar from "./Componets/Sidebar/Sidebar"
import User from "./Componets/User/User"


function App() {

    return (
        <>
            <Sidebar />
            <div className="container">
                <User />
                <Main />
                <Aside />
            </div>
        </>
    )
}

export default App
