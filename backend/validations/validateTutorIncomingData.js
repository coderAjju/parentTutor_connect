import { body } from "express-validator";

const validateTutorIncomingData = [
  // Validate fullName
  body("fullName")
    .isString()
    .withMessage("Full Name must be a string")
    .isLength({ min: 3, max: 50 })
    .withMessage("Full Name must be between 3 and 50 characters long")
    .trim()
    .escape(),

  // Validate email
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Validate phoneNumber
  body("phoneNumber")
    .isMobilePhone()
    .withMessage("Please enter a valid phone number")
    .optional({ checkFalsy: true }),

  // Validate password
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),

  // Validate qualifications
  body("qualifications")
    .isArray({ min: 1 })
    .withMessage("Qualifications must be an array with at least one entry")
    .custom((qualifications) => {
      qualifications.forEach((qualification, index) => {
        if (typeof qualification !== "string" || qualification.trim() === "") {
          throw new Error(
            `Qualification at index ${index} must be a non-empty string`
          );
        }
      });
      return true;
    }),

  // Validate subjects
  body("subjects")
    .isArray({ min: 1, max: 3 })
    .withMessage("Only 3 subjects are allowed.")
    .custom((subjects) => {
      subjects.forEach((subject, index) => {
        if (typeof subject !== "string" || subject.trim() === "") {
          throw new Error(
            `Subject at index ${index} must be a non-empty string`
          );
        }
      });
      return true;
    }),

  // Validate experience
  body("experience")
    .isInt({ min: 0 })
    .withMessage("Experience must be a non-negative integer"),

  // Validate hourlyRate
  body("hourlyRate")
    .isFloat({ min: 0 })
    .withMessage("Hourly Rate must be a non-negative number"),

  // Validate availability
  body("availability")
    .isArray({ min: 1 })
    .withMessage("Availability must be an array with at least one entry")
    .custom((availability) => {
      availability.forEach((slot, index) => {
        if (typeof slot !== "string" || slot.trim() === "") {
          throw new Error(
            `Availability slot at index ${index} must be a non-empty string`
          );
        }
      });
      return true;
    }),
];

export default validateTutorIncomingData;
