import { useEffect } from "react";
import Layout from "../../components/layouts";
import Station from "../../components/station";
import { useApp } from "../../hooks/useApp";
import { useStations } from "../../hooks/useStations";

function StationPage() {
  const {getCurrentStation, getIsReady} = useStations();
  const {setPageTitle} = useApp();
  
  useEffect(()=>{
    if(getIsReady())
      setPageTitle(getCurrentStation()?.title)
  },[getCurrentStation()])

  return (
    <Layout id="StationPage">
      <Station />
    </Layout>
  )
}

export default StationPage
