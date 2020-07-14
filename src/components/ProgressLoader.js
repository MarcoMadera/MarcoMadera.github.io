import { useEffect } from "react";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "./styles/ProgressLoader.css";

const ProgressLoader = () => {
  useEffect(() => {
    nprogress.start();

    return () => {
      nprogress.done();
    };
  });

  return null;
};

export default ProgressLoader;
