const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Save this file as /api/index.js (Vercel serverless function)
// Deploy the project to Vercel; this endpoint will render a simple HTML page.

export default function handler(req, res) {
  const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>True love unite</title>
    <style>
        :root { --bg:#f7f8fc; --card:#fff; --accent:#ff6b6b; --muted:#6b7280; }
        html,body{height:100%;margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#111;background:var(--bg)}
        .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
        .card{background:var(--card);border-radius:12px;box-shadow:0 6px 30px rgba(10,10,20,.07);padding:36px;max-width:760px;width:100%;text-align:center}
        h1{margin:0 0 8px;font-size:clamp(1.4rem,4vw,2.4rem);color:var(--accent)}
        p{margin:0;color:var(--muted)}
    </style>
</head>
<body>
    <div class="wrap">
        <div class="card">
            <h1>True love unite</h1>
            <p>Your site is running on Vercel — this page is served from a serverless function.</p>
        </div>
    </div>
</body>
</html>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
}
