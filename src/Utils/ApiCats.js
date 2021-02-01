///Url
export const url = "https://react-4pet-api.herokuapp.com";

// flatten

export function flattenPets (data){
    return data.map(item => {
        //cloudinary 
        let image = item.image
        // let image = item.image[0].url
        //local setup
        // let image = `${url}${item.image[0].url}`
        return {...item, image}
    })
}
