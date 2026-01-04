import { model, Schema } from 'mongoose';
import validator from 'validator';
import type {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/student.interface.js';

const userNameSchema = new Schema<UserName>({
  first: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, 'maximum 50 character allowed'],
    validate: {
      validator: function (value: string) {
        const firstNamestr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        console.log(firstNamestr);
        return firstNamestr === value;
      },
      message:
        '{VALUE} First name must start with an uppercase letter rest lowercase',
    },
  },
  middle: { type: String, trim: true },
  last: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} has number. please remove numbers',
    },
  },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
    maxLength: [100, 'maximum 100 character allowed'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
    maxLength: [100, 'maximum 100 character allowed'],
    trim: true,
  },
  fatherContactNo: { type: String, required: true, maxLength: 15, trim: true },
  motherName: { type: String, required: true, maxLength: 100, trim: true },
  motherOccupation: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  motherContactNo: { type: String, required: true, maxLength: 15, trim: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true, maxLength: 100, trim: true },
  occupation: { type: String, required: true, maxLength: 100, trim: true },
  contactNo: { type: String, required: true, maxLength: 15, trim: true },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true, trim: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valied. should be either male or female.',
    },
    required: [true, 'Gender is required'],
    trim: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, 'date of birth is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email address is required'],
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email address',
    },
  },
  contactNo: {
    type: String,
    required: [true, 'contact is required'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'emergency contact is required'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
    trim: true,
  },
  presentAddress: {
    type: String,
    required: [true, 'present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImage: { type: String },
  isActive: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
});

export const StudentModel = model<Student>('Student', studentSchema);
