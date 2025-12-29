import { Suspense } from "react";
import Loader from "@/components/common/Loader";

const LazyWrapper = (Component, fallback  = <Loader />) => {
  return (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyWrapper;
