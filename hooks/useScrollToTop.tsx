import { useEffect } from "react";

function useScrollToTop(trigger: unknown) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trigger]);
}

export default useScrollToTop;
