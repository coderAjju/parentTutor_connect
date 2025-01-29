import { body } from "express-validator";

const validateParentIncomingData = [
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

  // Validate children
  //   children field is a array of
  body("children")
    .isArray()
    .withMessage("Children must be an array")
    .custom((children) => {
      children.forEach((child, index) => {
        if (typeof child !== "object" || child === null) {
          throw new Error(`Child at index ${index} must be an object`);
        }
        if (!child.name || typeof child.name !== "string") {
          throw new Error(`Child at index ${index} must have a valid name`);
        }
        if (!child.age || typeof child.age !== "number") {
          throw new Error(`Child at index ${index} must have a valid age`);
        }
      });
      return true;
    }),
];

export default validateParentIncomingData;
