import express from 'express'

const app = express()

const PORT = 5000
app.use(express.json())

const plants = [
    {
        "id": 503,
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

app.post("/plant", (req, res)=>{
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

})

app.get("/plants", (req, res)=>{

    res.json({
        success : true,
        data : plants,
        message : "All Plants Fetched successfully"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})