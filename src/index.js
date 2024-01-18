import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {HashRouter as Router} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import Loader from "./container/Loader";

ReactDOM.render(
    <Suspense fallback={<Loader size={100}/>}>
        <Provider store={store}>
            <React.StrictMode>
                <Provider store={store}>
                    <Router>
                        <App/>
                    </Router>
                </Provider>
            </React.StrictMode>
        </Provider>
    </Suspense>,
    document.getElementById("root")
);
