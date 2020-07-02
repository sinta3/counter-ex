import React, { useState } from "react";

function Plus() {
    let [countPlus, setCount] = useState(0);

    return (
        <div className="plus">
            <h4>Counter: {countPlus}</h4>
            <button
                onClick={() => {
                    if (countPlus >= 0) {
                        setCount(countPlus + 1);
                    } else {
                        alert("the number is negative");
                    }
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    if (countPlus > 0) {
                        setCount(countPlus - 1);
                    } else {
                        alert("the number will be negative");
                    }
                }}
            >
                -
            </button>
            <button onClick={() => setCount((countPlus = 0))}>reset</button>
        </div>
    );
}

export default Plus;
