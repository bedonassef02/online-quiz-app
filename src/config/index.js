const Joi = require('joi');

const envVarsSchema = Joi.object({
  PORT: Joi.number().integer().min(1).max(65535).default(3000),

  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  DATABASE_URI: Joi.string().uri().required(),

  ENABLE_SEED: Joi.boolean().default(false),

  JWT_SECRET: Joi.string().required(), // Ensure JWT_SECRET is required for security
  JWT_EXPIRES_IN: Joi.string().required(), // Ensure JWT_EXPIRES_IN is a number string
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = envVars;
