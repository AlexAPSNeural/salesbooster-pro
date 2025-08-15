To create an Express.js server for SalesBooster Pro, we'll set up a basic server structure that can be expanded to support AI-driven insights for lead scoring and automated follow-ups. Below is a production-ready code structure including environment management, basic routing, and middleware setup which can be expanded with integrations like AI models or external APIs.

```bash
# Initialize a new Node.js project
npm init -y

# Install required dependencies
npm install express dotenv morgan cors
```

```javascript
// server.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());

// Environment Variables
const PORT = process.env.PORT || 5000;

// Placeholder for the AI insights function
const getAIInsights = (leadData) => {
  // Here you would normally integrate your AI model
  // Return mock insights for demonstration
  return {
    score: Math.floor(Math.random() * 100),
    followUpActions: [
      'Send email with personalized content',
      'Schedule a follow-up call',
      'Offer a special discount'
    ]
  };
};

// Routes
// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
});

// Lead Scoring Route
app.post("/api/leads/score", (req, res) => {
  try {
    const leadData = req.body;
    const insights = getAIInsights(leadData);
    res.status(200).json({
      success: true,
      data: insights
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error scoring lead",
      error: error.message
    });
  }
});

// Default Route
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```plaintext
# .env
PORT=5000
```

### Additional Considerations:

1. **AI Model Integration**: Replace the placeholder AI insights function with actual logic to call your AI service or model, possibly using a machine learning library or an external API.

2. **Security**: Consider implementing security features like rate limiting, input validation, API keys/authorization, etc.

3. **Logging and Monitoring**: Enhance logging with tools like Winston or integrate monitoring solutions like New Relic, Datadog, or Prometheus for production usage.

4. **Error Handling**: Add robust error handling middleware to capture and handle exceptions globally.

5. **Testing**: Implement tests using a framework like Jest or Mocha to ensure routes and AI model integrations work as expected.

6. **Scaling**: When ready for production, consider deploying your application using containers on platforms like AWS, Azure, or Google Cloud, potentially using services like Kubernetes.