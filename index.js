import express from 'express'

const app = express()

const PORT = 5000
app.use(express.json())

const plants = []

app.post("/plant", (req, res)=>{
    const {
        name,
        category, 
        image, 
        price, 
        description} =req.body

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

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})