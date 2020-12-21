import Joi from "joi";

const bodyRequestSchema = Joi.object({
    name: Joi.string().required()
})
export default bodyRequestSchema;