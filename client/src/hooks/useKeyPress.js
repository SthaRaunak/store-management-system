import { useEffect } from "react";

function useKeyPress(targetKey, action) {
    useEffect(() => {
        const keyPressHandler = (e) => {
            if (e.key == targetKey) {
                action();
            }
        };
        window.addEventListener("keyup", keyPressHandler);
        window.addEventListener("keydown", keyPressHandler);
        return () => {
            window.removeEventListener("keyup", keyPressHandler);
            window.removeEventListener("keydown", keyPressHandler);
        };
    }, [targetKey, action]);
}

export { useKeyPress };
