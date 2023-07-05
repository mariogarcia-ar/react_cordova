import { useEffect } from "react";
import Layout from "../../components/layouts";
import LayoutHeadless from "../../components/layouts/headless";
import Subpages from "../../components/sub-pages";

import { useApp } from "../../hooks/useApp";

function HomePage() {
  const {setPageTitle} = useApp();

  useEffect(()=>{
    setPageTitle('');
  },[])

  return (
    <LayoutHeadless id="HomePage">
      <Subpages id="home" redirect_to="/station" />
    </LayoutHeadless>
  )
}

export default HomePage
