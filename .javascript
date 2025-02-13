const logsDiv = document.getElementById('logs');
  const allLogs = await db.query(() => true);
  allLogs.forEach(log => {
      logsDiv.innerHTML += `<p>${log.timestamp}: ${log.action} بواسطة ${log.user}</p>`;
  });
