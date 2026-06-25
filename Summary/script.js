// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Map button text to section IDs
  const buttonMap = {
    "OLTP vs OLAP": "oltp-olap",
    "Relational vs Non-Relational Databases(NoSQL)": "relational-nosql",
    "Azure SQL Database vs Managed Instance vs SQL VM": "azure-sql",
    "Blob Storage vs Files vs Table Storage": "blob-files-table",
    "Cosmos DB API's": "cosmos-db",
    "Data Warehouse vs Data Lake": "warehouse-lake",
    "Batch vs Streaming": "batch-streaming",
    "Azure Databricks": "databricks",
    "Power BI": "power-bi"
  };

  // Attach event listeners to all buttons
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = buttonMap[button.textContent.trim()];
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
