import pool from '../config/db.js';

export const fetchAllStudent = async () => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;
}

<<<<<<< HEAD
//insert
export const insert = async (student) =>{
    const [result] = await pool.query(
        "INSERT INTO student(name, srcode, program) VALUES (?,?,?)",
        [student.name, student.srcode, student.program]
    )
    return result.insertId;
} 
=======
export const insert = async (student) => {
    const [result] = await pool.query(
        "INSERT INTO student(name, srcode, program) VALUES (?,?,?)",
        [student.name, student.srcode, student.program]
    );
    return result.insertId;
}

>>>>>>> 761e369bf11f40d54c6b7991fb41e5f87c938732
