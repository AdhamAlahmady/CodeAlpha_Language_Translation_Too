document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("textInput").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;

  if (!text.trim()) {
    alert("Please enter text!");
    return;
  }

  const response = await fetch("/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, from, to })
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.translated;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").innerText;
  if (!text.trim()) {
    alert("No text to copy!");
    return;
  }
  navigator.clipboard.writeText(text);
  alert("Copied!");
});
