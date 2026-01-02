import { model, Schema } from 'mongoose';
import type {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/student.interface.js';

const userNameSchema = new Schema<UserName>({
  first: { type: String, required: true },
  middle: { type: String },
  last: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: { type: String, enum: ['Active', 'Inactive'], required: true },
});

export const StudentModel = model<Student>('Student', studentSchema);
