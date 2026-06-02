const db = require("../config/db");

const createStudent = (name,email,age,callback)=>{

    const query =
    "INSERT INTO students(name,email,age) VALUES(?,?,?)";

    db.execute(
        query,
        [name,email,age],
        callback
    );
};

const getAllStudents = (callback)=>{

    const query =
    "SELECT * FROM students";

    db.execute(query,callback);
};

const getStudentById = (id,callback)=>{

    const query =
    "SELECT * FROM students WHERE id=?";

    db.execute(query,[id],callback);
};

const updateStudent = (
    id,
    name,
    email,
    age,
    callback
)=>{

    const query =
    "UPDATE students SET name=?, email=?, age=? WHERE id=?";

    db.execute(
        query,
        [name,email,age,id],
        callback
    );
};

const deleteStudent = (id,callback)=>{

    const query =
    "DELETE FROM students WHERE id=?";

    db.execute(query,[id],callback);
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};