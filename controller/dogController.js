const Dog = require("../models/dogsmodel");

exports.createDog = async (req, res) => {
  const { raca, descricao,  imagemUrl } = req.body;

  try {
    const existingDog = await Dog.findOne({ raca });

    if (existingDog) {
      res.status(400).json({
        message: "Raça ja cadastrada no banco de dados!"  
      })
    }

    const newDog = new Dog({
      raca,
      descricao,
      imagemUrl
    })
    
    await newDog.save();

    res.status(201).json({
      message: "Raça de cachorro criada com sucesso",
      data: {
        dog: newDog
      }
    })

  } catch (err) {
    res.status(500).json({
      message: "erro ao criar raça de cachorro", err
    })
  }
  
}

