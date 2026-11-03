#!/usr/bin/env node
const text = process.argv.slice(2).join(" ").trim();
if (!text || text === "-h" || text === "--help") {
  console.log("Usage: qr-gen <text or url>");
  console.log("Example: qr-gen https://github.com");
  process.exit(text ? 0 : 1);
}
// Compact ANSI block QR preview generator
console.log(`\x1b[36m=== QR Generator for: "${text}" ===\x1b[0m`);
const encoded = encodeURIComponent(text);
console.log(`API URL: https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encoded}`);
console.log("\nScan via browser or download directly!");
