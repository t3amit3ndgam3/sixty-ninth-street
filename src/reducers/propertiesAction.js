const initialData = {
    properties :[]
}

const propertiesAction = ( state = initialData, action)=>{
    switch(action.type){
        case "ADD_PROPERTIES":
            const {addProperties} = action.payload;
            return{
                // add properties section
                initialData
            };
        case "DELETE_PROPERTIES":
            const {deleteProperties} = action.payload;
            return{
                // DELETE properties section
                initialData
            };
        case "UPDATE_PROPERTIES":
            const {updateProperties} = action.payload;
            return{
                // UPDATE properties section
                initialData
            }
                           
        default: return initialData;
    }
}

export default propertiesAction