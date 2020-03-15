//Users Pets Extract from data

export function UsersPets(data){
    return data.filter(item => {
        return item.featured === true
    })
}