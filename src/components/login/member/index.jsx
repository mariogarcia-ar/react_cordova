
import { useEffect } from 'react';
import { useState } from 'react';
import { useTeam } from '../../../hooks/useTeam';
import MemberForm1 from './form1'
import MemberForm2 from './form2';


function Member({position}) {
  const [member, setMember] = useState();
  const {getIsReady, getMember} = useTeam();

  useEffect(()=>{
    if(getIsReady()){
      setMember(getMember(position))
    }      
  },[getIsReady()])


  return (
    <>
    {!member
          ? <MemberForm1  member={member}  setMember={setMember} position={position}/>
          : <MemberForm2  member={member}  setMember={setMember} position={position}/>
    }
    </>
  )
}

export default Member
 