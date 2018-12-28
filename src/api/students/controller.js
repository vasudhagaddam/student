import Students from './model';

export const create = (req, res) => {
  Students.findOneAndUpdate({name:req.body.name}, req.body, {upsert:true,new:true},  (err, result)  => {
    if (err) {
      res.send(err);
    } else {
      sendAllStudents(res);
    }
  })
}

export const show = (req, res) =>
  Students.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })

export const index = (req, res) =>
  sendAllStudents(res);

export const searchStudent = (req, res) => {
  console.log(req.query);
  Students.find({ name: { '$regex' : req.query.string, '$options' : 'i' }}).exec((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

// export const update = (req, res) => {
//   Students.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
//     if (err) {
//       res.send(err);
//     } else {
//       sendAllStudents(res);
//     }
//   })
// }

export const destroy = (req, res) =>
  Students.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllStudents(res);
    }
  }); 

  const sendAllStudents = (res) => {
    Students.find((er, students) => {
      if (!er) {
        res.send(students);
      } else {
        res.send(er);
      }
    })
  }
