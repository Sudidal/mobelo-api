import process from "node:process";
import { config } from "dotenv";

config();

class RequiredEnvs implements NodeJS.ProcessEnv {
  [index: string]: string | undefined;
  PORT: string = process.env.PORT;
  HOST: string = process.env.HOST;
}

const requiredEnvs = new RequiredEnvs();

Object.entries(requiredEnvs).forEach(([key, value]) => {
  if (!value) throw(`Environment variable "${key}" is implemented, but not defined`);
});