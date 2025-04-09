declare global {
  namespace NodeJS {
    class ProcessEnv {
      readonly PORT: string;
    }
  }
}

export {};
