export const keyResolver = title => {
    switch (title) {
        case 'starlink':
            return {
                name: 'version',
                status: 'id'
                } 
        case 'capsules': 
            return {
                name: 'type',
                status: 'status'
            }
        case 'crew': 
            return {
                name: 'name',
                status: 'status'
            }
        case 'rockets': 
            return {
                name: 'name',
                status: 'active'
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
    const { name, status } = keyResolver(title);
    return data.map(element => ({ 
        name: element[name], 
        status: element[status], 
        id: element.id 
    }))
}


export default dataPraser;