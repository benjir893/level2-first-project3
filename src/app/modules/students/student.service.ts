import { StudentModel } from '../student.model.js';
import type { Student } from './student.interface.js';

const createStudentIntoDB = async (student: Student) => {
  const rusult = await StudentModel.create(student);
  return rusult;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
