import React, { useEffect } from "react";

function useOnClickOutside(handler) {
    const ref = React.useRef();

    useEffect(() => {

        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
                console.log("Clicked");
            }
        }
        document.addEventListener("click",handleClick,true) //third argument for capturing event in capturing phase

        return () => document.removeEventListener("click", handleClick,true);
    }, [handler]);

    return ref;
}

export { useOnClickOutside };
