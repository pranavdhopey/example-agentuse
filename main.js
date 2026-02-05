const express = require('express');
const app = express();

// Simulation: If a certain environment variable is missing, the build "fails"
if (process.argv.includes('--build')) {
    console.log("Checking build requirements...");
    
    if (!process.env.DATABASE_URL) {
        console.error("FATAL ERROR: DATABASE_URL is not defined.");
        console.error("The build process requires a valid connection string to pre-compile schemas.");
        process.exit(1); // This triggers the 'failure()' in GitHub Actions
    }

    console.log("Build successful!");
    process.exit(0);
}

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000);
