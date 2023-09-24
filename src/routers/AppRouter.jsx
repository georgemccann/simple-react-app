import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { 
    Dashboard, 
    Page404
  } from "@/containers";
 
export default function AppRouter() { 
  return (
    <>
      <Suspense>
        <Router> 
          <Routes> 
            <Route exact index element={<Dashboard/>} />
            <Route path="*" element={<Page404 />} />
          </Routes> 
        </Router>
      </Suspense>
    </>
  );
}
