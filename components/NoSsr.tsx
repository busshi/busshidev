import { Fragment, ReactNode, useEffect, useState } from "react";

/* Only render children on client side */

const PreventSsr = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <Fragment>{children}</Fragment> : null;
};

export default PreventSsr;
