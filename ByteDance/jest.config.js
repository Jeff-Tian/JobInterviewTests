module.exports = {
    verbose: true,
    testMatch: ["/test/**/*.test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    'roots': [
        '<rootDir>'
    ],
    'transform': {
        '^.+\\.tsx?$': 'ts-jest'
    },
    "moduleDirectories": ["node_modules", "src"]
};