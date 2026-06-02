const Student =
require("../models/studentModel");

const addStudent = (req,res)=>{

    const {name,email,age} = req.body;

    Student.createStudent(
        name,
        email,
        age,
        (err,result)=>{

            if(err){
                return res.status(500)
                .send(err.message);
            }

            console.log("Student Added");

            res.status(201).json({
                message:
                "Student Added Successfully"
            });
        }
    );
};

const getStudents = (req,res)=>{

    Student.getAllStudents(
        (err,result)=>{

            if(err){
                return res.status(500)
                .send(err.message);
            }

            res.json(result);
        }
    );
};

const getStudent = (req,res)=>{

    const {id} = req.params;

    Student.getStudentById(
        id,
        (err,result)=>{

            if(err){
                return res.status(500)
                .send(err.message);
            }

            if(result.length===0){
                return res.status(404).json({
                    message:
                    "Student Not Found"
                });
            }

            res.json(result[0]);
        }
    );
};

const updateStudent = (req,res)=>{

    const {id} = req.params;

    const {name,email,age} =
    req.body;

    Student.updateStudent(
        id,
        name,
        email,
        age,
        (err,result)=>{

            if(err){
                return res.status(500)
                .send(err.message);
            }

            if(result.affectedRows===0){
                return res.status(404).json({
                    message:
                    "Student Not Found"
                });
            }

            console.log("Student Updated");

            res.json({
                message:
                "Student Updated Successfully"
            });
        }
    );
};

const deleteStudent = (req,res)=>{

    const {id} = req.params;

    Student.deleteStudent(
        id,
        (err,result)=>{

            if(err){
                return res.status(500)
                .send(err.message);
            }

            if(result.affectedRows===0){
                return res.status(404).json({
                    message:
                    "Student Not Found"
                });
            }

            console.log("Student Deleted");

            res.json({
                message:
                "Student Deleted Successfully"
            });
        }
    );
};

module.exports = {
    addStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
};