const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
    conn.query('SELECT * FROM persona', (err,personas)=>{
        if (err){
            res.json(err);
        }
        res.render('persona', {
            data: personas
        });
    });
    });
};

controller.save = (req, res) => {
const data =req.body;

 req.getConnection((err, conn) => {
  conn.query('INSERT INTO persona set ?',[data], (err,persona)=>{
  res.redirect('/');
  });
   })
 }

 controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM persona WHERE id = ?', [id], (err,persona)=> {       
        res.render('editarpersona',{
            data: persona[0]
        });
        });
        });  
 };

 controller.update = (req, res) => {
    const {id} = req.params;
    const newPersona = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE persona set ? WHERE id =?', [newPersona, id],(err,rows)=> {
            res.redirect('/editarpersona.js');
        });
        });
 };


 controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM persona WHERE id = ?', [id], (err,rows)=> {       
            res.redirect('/');

});
   })  
     
        
 };
 

module.exports= controller;