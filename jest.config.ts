export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./src/setupTest.ts"]
}