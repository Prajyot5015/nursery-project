
const plants = [
    {
        "id": 1,
        "name": "Mango",
        "category": "indoor",
        "image": "https://th.bing.com/th/id/OIP.LYPvC0O42rOv3XAdUaHo-gHaE8?rs=1&pid=ImgDetMain",
        "price": 150,
        "description": "Mango plant"
    },
    {
        "id": 537,
        "name": "Bamboo",
        "category": "indoor",
        "image": "https://th.bing.com/th/id/OIP.LYPvC0O42rOv3XAdUaHo-gHaE8?rs=1&pid=ImgDetMain",
        "price": 150,
        "description": "Bamboo plant"
    }
]

const postPlant = (req, res)=>{
    const {
        name,
        category, 
        image, 
        price, 
        description} =req.body
        
        if(!name){
          return  res.json({
                success : false,
                data : null,
                message : "name is required"
            })
        }
        
        if(!category){
            return  res.json({
                  success : false,
                  data : null,
                  message : "category is required"
              })
          }
          if(!image){
            return  res.json({
                  success : false,
                  data : null,
                  message : "image is required"
              })
          }
          if(!price){
            return  res.json({
                  success : false,
                  data : null,
                  message : "price is required"
              })
          }
          if(!description){
            return  res.json({
                  success : false,
                  data : null,
                  message : "description is required"
              })
          }

        const randomId= Math.round(Math.random() * 1000)

        const newPlant = {
            id: randomId,
            name: name,
            category: category,
            image: image,
            price: price,
            description: description
        }

        plants.push(newPlant)

        res.json({
            success : true,
            data : newPlant,
            message : "New Plant Added Successfully"
        })

}

const getPlant = (req, res)=>{

    res.json({
        success : true,
        data : plants,
        message : "All Plants Fetched successfully"
    })
}

const getPlantId = (req,res)=>{
    const { id } = req.params

    const plant = plants.find((p)=> p.id == id)

    res.json({
        success : plant ? true : false,
        data : plant || null,
        message : plant ? "Plant Fetched Successfully" : "Plant Not found"
    })
}

const putPlantId = (req, res)=>{
    const {
        name,
        category, 
        image, 
        price, 
        description} =req.body

    const { id } = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    const newObject = {
        id,
        name: name,
        category : category,
        image : image,
        price : price,
        description : description

        /*  if key and Value same 
            name,
            category,
            image,
            price,
            description */
    }

    if(index==-1){
        return res.json({
            success : false,
            message : `Plant not found for id ${id}`,
            data : null
        })
    }
    else{
        plants[index] = newObject

        res.json({
            success : true,
            message : "Plant Updated Successfully",
            data : newObject
        })
    }  
}

const deletePlantId = (req, res)=>{
    const { id } = req.params

    let index = -1

    plants.forEach((plant, i)=>{
        if(plant.id == id){
            index = i
        }
    })

    if(index == -1){
        return res.json({
            success : false,
            message : `Plant not found for id ${id}`,
            data : null
        })
    }

    plants.splice(index,1)

    res.json({
        success : true,
        message : "Plant Deleted Successfully",
        data : null
    })

}

export {
    postPlant,
    getPlant,
    getPlantId,
    putPlantId,
    deletePlantId
}