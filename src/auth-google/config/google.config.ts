import { registerAs } from '@nestjs/config';
import dotenv from 'dotenv';
import { IsOptional, IsString } from 'class-validator';
import validateConfig from '../../utils/validate-config';
import { GoogleConfig } from './google-config.type';

class EnvironmentVariablesValidator {
  @IsString()
  @IsOptional()
  GOOGLE_CLIENT_ID: string;

  @IsString()
  @IsOptional()
  GOOGLE_CLIENT_SECRET: string;
}

export default registerAs<GoogleConfig>('google', () => {
  dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
});
