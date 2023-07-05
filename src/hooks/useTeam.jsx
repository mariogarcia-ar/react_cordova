// import { useState } from "react";
import { useContext } from "react";
import { TeamContext } from "../context/team";

export const useTeam = () =>{
    const context = useContext(TeamContext)

    const getIsReady = () =>{
        return !!context.isReady;
    }

    const _isTeamCompleted = (_members)=>{
        let ready = _members.length >= 1;
        context.setIsTeamReady(ready)
    }

    const addMember = (member) =>{
        let _members = [...context.team, member];
        context.setTeam(_members);
        _isTeamCompleted(_members);
    }
    
    const removeMember = (member) =>{
        let _members = context.team.filter( ele => ele.stars_id !== member.stars_id)
        context.setTeam(_members);
        _isTeamCompleted(_members);
    }

    const getMember = (position) =>{ // porque es para la inicializacion
        let _idx = position - 1;
        return context.team[_idx];
    }

    const getTeam = () =>{
        return context.team;
    }

    const isTeamReady = ()=>{
        return context.isTeamReady;
    }

    return { getIsReady,
             addMember, removeMember, getMember, 
             getTeam, isTeamReady}
}