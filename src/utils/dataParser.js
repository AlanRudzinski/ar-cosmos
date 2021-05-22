export const keyResolver = title => {
    switch (title) {
        case 'starlink':
            return {
                name: 'OBJECT_NAME',
                status: 'CREATION_DATE',
                id: 'GP_ID'
                
                } 
        case 'capsules': 
            return {
                name: 'type',
                status: 'status',
                id: 'id'
            }
        case 'crew': 
            return {
                name: 'name',
                status: 'status',
                id: 'id'
            }
        case 'rockets': 
            return {
                name: 'name',
                status: 'active',
                id: 'id'
            }
        default:
            return{
                name: 'name',
                status: 'status'
            }
    }
}

const dataPraser = (data, title) => {
    if(!data) return {}
    let dataToReturn = data;
    if(title === 'starlink') {
        console.log(1)
        dataToReturn = data.map(el => el?.spaceTrack)
    }
    const { name, status, id } = keyResolver(title);
    return dataToReturn.map(element => (
        element ? { 
        name: element[name], 
        status: element[status], 
        id: element[id]
    } : {}))
}


export default dataPraser;