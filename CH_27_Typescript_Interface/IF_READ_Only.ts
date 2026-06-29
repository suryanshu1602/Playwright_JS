interface Config {
    readonly apiKey: string;
    readonly endpoint: string;
    timeout: number;
}

const config: Config = {
    apiKey: "sk-abc123",
    endpoint: "https://api.example.com",
    timeout: 5000
};

console.log("Config:", config);
console.log("API Key:", config.apiKey);

config.timeout = 10000;
console.log("After timeout change:", config);

// config.apiKey = "new-key";  // Error: readonly
