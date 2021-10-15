var express = require("express");
var router = express.Router();
var Professor = require('./professor');

//ROTA PARA SALVAR
router.post('/', (req, res)=>{
  let prof = new Professor({
    name:req.body.name,
    materia:req.body.materia
  })

  prof.save((err, d)=>{
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(d)
    }
  })
});

//ROTA PARA LISTAR
router.get('/', (req, res)=>{
  Professor.find().exec((err, profs)=>{
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(profs)
    }
  })
});

//ROTA PARA DELETAR
router.delete('/:id', async (req, res)=>{
  try{
    let id = req.params.id;
    await Professor.deleteOne({_id: id})
    res.status(200).send({});
  }catch(err){
    res.status(500).send(err)
  }
})

//ROTA PARA EDITAR
router.patch('/:id', (req, res)=>{
  Professor.findById(req.params.id, (err, prof)=>{
    if(err){
      res.status(500).send(err)
    }else if(!prof){
      res.status(404).send({})
    }else{
      prof.name = req.body.name;
      prof.materia = req.body.materia;
      prof.save()
        .then((d) => res.status(200).send(d))
        .catch((e)=> res.status(500).send(e))
    }   
  })
})

module.exports = router;