import React, { Suspense } from "react";
import { lazy } from "react";
import Loading from "../../componant/Loading";

const Gallery = lazy(() => import("../../componant/gallery/Gallery"));

function MainPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Gallery />
    </Suspense>
  );
}

export default MainPage;
