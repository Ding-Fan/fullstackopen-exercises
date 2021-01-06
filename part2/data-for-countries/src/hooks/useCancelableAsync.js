import { useEffect } from "react";
export default function useCancelableAsync(theFunction, depencendies) {
  useEffect(() => {
    const theAbortController = new AbortController();
    theFunction(theAbortController);
    return () => {
      theAbortController.abort();
    };
  }, [...depencendies]);
}
