import { useEffect } from "react";
import Layout from "../../components/layouts";
// import StationDashboard from "../../components/station-dashboard";
import SubStations from "../../components/sub-station";
import { useApp } from "../../hooks/useApp";
import { useStations } from "../../hooks/useStations";

function StationDashboardPage() {
  const {setPageTitle} = useApp(); 
  const {getCurrentStation} = useStations();
  
  useEffect(()=>{
    setPageTitle(getCurrentStation()?.title);
  },[])

  return (
    <Layout id="StationDashboardPage">
      <SubStations  />
    </Layout>
  )
}

export default StationDashboardPage
//       <StationDashboard />