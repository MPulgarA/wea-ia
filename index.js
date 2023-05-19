
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
    organization: "org-d6Cz2ergvmPzRrWLXsI0QFyu"
});
const openai = new OpenAIApi(configuration);

const basePrompt = "Usa este changelog y escribe un mensaje en español y atractivo para los usuarios donde expliques con palabras simples y resumidas los cambios realizados en una versión de desarrollo de la app BettlerflAI omitiendo las palabras técnicas, sin sobreexplicar, manteniendo un lenguaje semiformal. Utiliza pocas palabras y usa pocos emojis";
const changelogText = `Changelog - Technical Feature: Database Optimization
Version 3.0.0 (Release Date: May 19, 2023)
Overview
This technical changelog provides an in-depth overview of the implementation of the Database Optimization feature in version 3.0.0 of our application. This feature focuses on improving the performance and efficiency of our database operations.
Features
Query Optimization
Conducted an extensive analysis of database queries to identify and optimize inefficient or resource-intensive queries.
Implemented query optimizations techniques such as indexing, query rewriting, and query plan analysis to reduce execution time and improve overall query performance.
Data Partitioning
Introduced a data partitioning strategy to distribute data across multiple storage units based on defined criteria (e.g., date, location, customer).
Data partitioning improves query performance by reducing the amount of data accessed during query execution, resulting in faster response times.
Connection Pooling
Implemented a connection pooling mechanism to efficiently manage database connections.
Connection pooling allows for the reuse of existing database connections, minimizing connection overhead and improving the overall scalability and responsiveness of the application.
Improvements
Index Optimization
Conducted a comprehensive review of existing database indexes and made necessary adjustments to optimize their structure and usage.
Removed redundant or unused indexes to reduce storage space requirements and improve query performance.
Caching Mechanism
Introduced a caching mechanism to store frequently accessed or computationally expensive data in memory.
Caching minimizes the need to fetch data from the database, resulting in reduced latency and improved response times for repetitive queries.
Resource Utilization Monitoring
Implemented a system to monitor and analyze database resource utilization, including CPU, memory, and disk I/O.
The monitoring system provides insights into resource-intensive queries or operations, allowing for proactive optimization and allocation of resources.
Bug Fixes
Resolved an issue where database connections were not released properly, leading to connection leaks and performance degradation.
Fixed a rare scenario where deadlock situations occurred during concurrent database operations, causing application unresponsiveness.
For detailed technical documentation or further inquiries regarding this feature, please contact our technical support team at techsupport@example.com.
We appreciate your support and commitment to improving the performance and efficiency of our application. The Database Optimization feature aims to enhance the overall user experience by delivering faster and more responsive database operations.`;

const prompt = `${basePrompt} ${changelogText}}`;

const chapGPT = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 3000
    });
    console.log(response["data"]["choices"][0]["message"]["content"]);
};

chapGPT(prompt);


// const configuration = new Configuration({
//     apiKey: "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",
//     organization: "org-d6Cz2ergvmPzRrWLXsI0QFyu"
// });
// const openai = new OpenAIApi(configuration);
// const basePrompt = "Usa este changelog y escribe un mensaje en español y atractivo para los usuarios donde expliques con palabras simples y resumidas los cambios realizados en una versión de desarrollo de la app BettlerflAI omitiendo las palabras técnicas, sin sobreexplicar, manteniendo un lenguaje semiformal. Utiliza pocas palabras y usa pocos emojis";
// const changelogText = `Changelog - Technical Feature: Database Optimization
// Version 3.0.0 (Release Date: May 19, 2023)
// Overview
// This technical changelog provides an in-depth overview of the implementation of the Database Optimization feature in version 3.0.0 of our application. This feature focuses on improving the performance and efficiency of our database operations.
// Features
// Query Optimization
// Conducted an extensive analysis of database queries to identify and optimize inefficient or resource-intensive queries.
// Implemented query optimizations techniques such as indexing, query rewriting, and query plan analysis to reduce execution time and improve overall query performance.
// Data Partitioning
// Introduced a data partitioning strategy to distribute data across multiple storage units based on defined criteria (e.g., date, location, customer).
// Data partitioning improves query performance by reducing the amount of data accessed during query execution, resulting in faster response times.
// Connection Pooling
// Implemented a connection pooling mechanism to efficiently manage database connections.
// Connection pooling allows for the reuse of existing database connections, minimizing connection overhead and improving the overall scalability and responsiveness of the application.
// Improvements
// Index Optimization
// Conducted a comprehensive review of existing database indexes and made necessary adjustments to optimize their structure and usage.
// Removed redundant or unused indexes to reduce storage space requirements and improve query performance.
// Caching Mechanism
// Introduced a caching mechanism to store frequently accessed or computationally expensive data in memory.
// Caching minimizes the need to fetch data from the database, resulting in reduced latency and improved response times for repetitive queries.
// Resource Utilization Monitoring
// Implemented a system to monitor and analyze database resource utilization, including CPU, memory, and disk I/O.
// The monitoring system provides insights into resource-intensive queries or operations, allowing for proactive optimization and allocation of resources.
// Bug Fixes
// Resolved an issue where database connections were not released properly, leading to connection leaks and performance degradation.
// Fixed a rare scenario where deadlock situations occurred during concurrent database operations, causing application unresponsiveness.
// For detailed technical documentation or further inquiries regarding this feature, please contact our technical support team at techsupport@example.com.
// We appreciate your support and commitment to improving the performance and efficiency of our application. The Database Optimization feature aims to enhance the overall user experience by delivering faster and more responsive database operations.`;