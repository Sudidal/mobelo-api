import process from "node:process";

class RequiredEnvs implements NodeJS.ProcessEnv {
  [index: string]: string | undefined;
  PORT = process.env.PORT;
  HOST = process.env.HOST;
}

const requiredEnvs = new RequiredEnvs();

Object.entries(requiredEnvs).forEach(([key, value]) => {
  if (!value) throw(`Environment variable "${key}" is implemented, but not defined`);
});