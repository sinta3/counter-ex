import React from "react";

import Plus from "../component/plus/Plus";
import Minus from "../component/minus/Minus";

import "./Counter.css";

function Counter() {
    return (
        <div>
            <Plus />
            <Minus />
        </div>
    );
}

export default Counter;
