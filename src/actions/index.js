export const addProperties =(propertiesData) =>{
    return{
        type:'ADD_PROPERTIES',
        addProperties:propertiesData
    }
}

export const deleteProperties =(propertiesData) =>{
    return{
        type:'DELETE_PROPERTIES',
        deleteProperties:propertiesData
    }
}

export const updateProperties =(propertiesData) =>{
    return{
        type:'UPDATE_PROPERTIES',
        updateProperties:propertiesData
    }
}


export const addAgents =(agentData) =>{
    return{
        type:'ADD_AGENTS',
        delete:agentData
    }
}

export const deleteAgents =(agentData) =>{
    return{
        type:'DELETE_AGENTS',
        data:agentData
    }
}
