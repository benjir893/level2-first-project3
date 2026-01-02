import { type Request, type Response } from 'express';
import { StudentService } from './student.service.js';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      messege: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentService.getSingleStudentFromDB(
      studentId as string,
    );
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
