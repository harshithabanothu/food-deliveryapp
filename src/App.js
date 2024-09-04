import React from "react";
import ReactDOM from "react-dom/client";

const Footer=()=>{
    return(
        <footer className="footer">
            <p>
              CopyRight &copy; {currYear},Made with love by <strong>Harshitha</strong>
            </p>
        </footer>
    );
};
const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);