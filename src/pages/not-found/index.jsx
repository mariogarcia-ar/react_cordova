import { useEffect } from "react";
import LayoutGuest from "../../components/layouts/guest";
import { useApp } from "../../hooks/useApp";

function NotFoundPage() {
  const {setPageTitle} = useApp();
  
  useEffect(()=>{
    setPageTitle('Not Found');
  },[])

  return (
    <LayoutGuest id="NotFoundPage">
      Not Found
    </LayoutGuest>
  )
}

export default NotFoundPage
