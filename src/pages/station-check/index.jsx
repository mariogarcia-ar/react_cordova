import { useEffect } from "react";
import Layout from "../../components/layouts";
import StationCheck from "../../components/station-check";
import { useApp } from "../../hooks/useApp";
import { useStations } from "../../hooks/useStations";

function StationCheckPage() {
  const {getCurrentStation, getIsReady} = useStations();
  const {setPageTitle} = useApp();
  
  useEffect(()=>{
    if(getIsReady())
      setPageTitle(getCurrentStation()?.title)
  },[getCurrentStation()])

  return (
    <Layout id="StationCheckPage">
      <StationCheck />
    </Layout>
  )
}

export default StationCheckPage
