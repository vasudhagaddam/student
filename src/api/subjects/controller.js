import Subjects from './model';

export const create = (req, res) => {
  console.log(req.body);
  Subjects.findOneAndUpdate({subject:req.body.subject}, req.body, {upsert:true,new:true}, (err, result) => {
    if (err) {
      res.send({ error: true, message: err.message });
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) =>
  Subjects.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  Subjects.find({}, (err, subjects) => {
    if (err) {
      res.send(err);
    } else {
      res.send(subjects);
    }
  })

export const update = (req, res) => {
  Subjects.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const destroy = (req, res) =>
  Subjects.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  }); 