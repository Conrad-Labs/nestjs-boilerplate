import { registerAs } from '@nestjs/config';
import dotenv from 'dotenv';
import { IsOptional, IsString } from 'class-validator';
import validateConfig from '../../utils/validate-config';
import { FacebookConfig } from './facebook-config.type';

class EnvironmentVariablesValidator {
  @IsString()
  @IsOptional()
  FACEBOOK_APP_ID: string;

  @IsString()
  @IsOptional()
  FACEBOOK_APP_SECRET: string;
}

export default registerAs<FacebookConfig>('facebook', () => {
  dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    appId: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET,
  };
});
