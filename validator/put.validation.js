const { z } = require("zod");

const putTaskSchema = z.object({
  name: z
    .string()
    .refine((username) => username.length >= 2, {
      message: 'The Name needs at least 3 letters'
    }),
  description: z
    .string()
    .refine((description) => description.length >=10, {
      message: 'The task description cannot be shorter than 10 letters',
    }),
});

module.exports = {
  putTaskSchema,
};
