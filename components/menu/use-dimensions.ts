import { useEffect, useRef } from "react";

export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, right: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.right = ref.current.offsetLeft;
    }, []);

    return dimensions.current;
};