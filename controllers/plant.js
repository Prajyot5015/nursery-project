import Plant from "../models/Plant.js"

const plants = []

const postPlant = async (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description } = req.body

    const newPlant = new Plant({
        name: name,
        category: category,
        image: image,
        price: price,
        description: description
    })

    const savedPlant = await newPlant.save();

    res.json({
        success: true,
        data: savedPlant,
        message: "New Plant Added Successfully"
    })

}

const getPlant = async (req, res) => {

    const allPlants = await Plant.find();

    res.json({
        success: true,
        data: allPlants,
        message: "All Plants Fetched successfully"
    })
}

const getPlantId = async (req, res) => {
    const { id } = req.params

    const plant = await Plant.findById(id)

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "Plant Fetched Successfully" : "Plant Not found"
    })
}

const putPlantId = async (req, res) => {
    const {
        name,
        category,
        image,
        price,
        description } = req.body

    const { id } = req.params

    await Plant.updateOne({ _id: id },
        {
            $set: {
                name: name,
                category: category,
                image: image,
                price: price,
                description: description
            }
        })

        const updatedPlant = await Plant.findById(id)

        res.json({
            success : true,
            message : "Plant Updated Successfully",
            data : updatedPlant
        })
}

const deletePlantId = (req, res) => {
    const { id } = req.params

    let index = -1

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }
    })

    if (index == -1) {
        return res.json({
            success: false,
            message: `Plant not found for id ${id}`,
            data: null
        })
    }

    plants.splice(index, 1)

    res.json({
        success: true,
        message: "Plant Deleted Successfully",
        data: null
    })

}

export {
    postPlant,
    getPlant,
    getPlantId,
    putPlantId,
    deletePlantId
}