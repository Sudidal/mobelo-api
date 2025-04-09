declare global {
  namespace NodeJS {
    class ProcessEnv {
      readonly PORT: string;
      readonly HOST: string;
    }
  }
}

export {};
