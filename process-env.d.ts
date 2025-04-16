declare global {
  namespace NodeJS {
    class ProcessEnv {
      readonly PORT: string;
      readonly HOST: string;
      readonly DATABASE_URL: string;
      readonly TEST_DATABASE_URL: string;
    }
  }
}

export {};
