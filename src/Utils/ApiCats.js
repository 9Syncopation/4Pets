

///Url
export  const url = "http://localhost:1337"


// flatten 

export function flattenPets (data){
    return data.map(item => {
        //cloudinary 
        let image = item.image[0].url

        //local setup
        // let image = `${url}${item.image[0].url}`
        return {...item, image}
    })
}
