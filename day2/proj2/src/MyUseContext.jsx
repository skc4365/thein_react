import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

function MyUseContext() {
    const [user, setUser] = useState("Linus");
    return (
        <div>
            <UserContext.Provider value={user}>
                <h3>{`Hello ${user}!!!`}</h3>
                <Component2/>
            </UserContext.Provider>
        </div>
    );
}
function Component2(){
    return(<>
        <h3>컴퍼넌트 22 : useContext 있음</h3>
        <Component3/>
    </>);
}
function Component3(){
    const user = useContext(UserContext)
    return(<>
        <h3>컴퍼넌트 333 : useContext 사용했음</h3>
        <h2>{`Hello ${user} again`}</h2>
    </>);
}
export default MyUseContext;