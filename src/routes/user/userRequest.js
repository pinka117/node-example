import Joi from "joi";

const bodyRequestSchema = Joi.object({
  name: Joi.string().required(),
  mail: Joi.string().required().email(),
  surname: Joi.string(),
  password: Joi.string().required(),
});
export default bodyRequestSchema;
