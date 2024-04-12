import React from "react";
import { toast } from "react-toastify";

function useCopyText() {
    const [copiedText, setCopiedText] = React.useState(null);
    const copy = async (text) => {
        if (navigator?.clipboard) {
            toast.error("Clipboard not supported in your Browser");
            return false;
        }
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        } catch (err) {
            setCopiedText(null);
            console.error(err.message);
            return false;
        }
    };
    return [copiedText, copy];
}

export { useCopyText };
