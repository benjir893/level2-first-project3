import exprss from 'express';
import { StudentController } from './student.controller.js';
// import { Student } from './student.model';js';

const router = exprss.Router();
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent);

export const studentRoutes = router; // since router iteself is an object.
