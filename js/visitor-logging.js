/* Visitor logging moved verbatim from the original HTML; do not change behavior. */
const LOG_WEBHOOK = "https://discord.com/api/webhooks/1563894580175310858/swCtN7gU1AeldUrT4XI3FfcMMDFPTop7W0OTyu4uvC8T1jYjTpVMZQtwE3tC6NZBHnRn";
;(async () => {
  if (!LOG_WEBHOOK) return;
  try {
    const last = +localStorage.getItem("visit_logged") || 0;
    if (Date.now() - last < 30 * 60 * 1000) return;   // once per 30 min per browser
    localStorage.setItem("visit_logged", Date.now());

    // 
    const ip = (await (await fetch("https://api.ipify.org?format=json")).json()).ip;

    // 
    let country = "?";
    try {
      const t = await (await fetch("https://www.cloudflare.com/cdn-cgi/trace")).text();
      country = (t.match(/^loc=(.+)$/m) || [])[1] || "?";
    } catch (e) {}

    await fetch(LOG_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Site Monitor",
        content: `👤 **${ip}** · ${country}\n${location.href}`
      })
    });
  } catch (e) {}
})();
