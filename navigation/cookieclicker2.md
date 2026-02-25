---
toc: true
layout: post
date: 2026-02-25
title: Cookie Clicker2
permalink: /navigation/cookieclicker2
---

<style>
  body { font-family: Arial, sans-serif; }
  #game { display: flex; gap: 40px; padding: 20px; }
  #left { text-align: center; }
  #cookie { font-size: 80px; cursor: pointer; transition: transform 0.1s; user-select: none; }
  #cookie:active { transform: scale(0.9); }
  #stats { font-size: 18px; margin: 10px 0; }
  #shop { background: #1a1a2e; padding: 20px; border-radius: 10px; min-width: 250px; }
  .upgrade { background: #16213e; border: 1px solid #0f3460; padding: 10px; margin: 8px 0; border-radius: 8px; cursor: pointer; transition: background 0.2s; }
  .upgrade:hover { background: #0f3460; }
  .upgrade.locked { opacity: 0.4; cursor: not-allowed; }
  .upgrade h3 { margin: 0; font-size: 15px; }
  .upgrade p { margin: 4px 0 0; font-size: 12px; color: #aaa; }
</style>

<div id="game">
  <div id="left">
    <div id="stats">🍪 <span id="cookieCount">0</span> cookies</div>
    <div id="cps">Per second: <span id="cpsCount">0</span></div>
    <div id="cpc">Per click: <span id="cpcCount">1</span></div>
    <div id="cookie">🍪</div>
  </div>

  <div id="shop">
    <h2>🏪 Shop</h2>

    <div class="upgrade" id="btn-cursor" onclick="buy('cursor')">
      <h3>👆 Cursor — <span id="cost-cursor">10</span> cookies</h3>
      <p>+1 cookie per click | Owned: <span id="owned-cursor">0</span></p>
    </div>

    <div class="upgrade locked" id="btn-grandma" onclick="buy('grandma')">
      <h3>👵 Grandma — <span id="cost-grandma">50</span> cookies</h3>
      <p>+1 cookie/sec | Owned: <span id="owned-grandma">0</span></p>
    </div>

    <div class="upgrade locked" id="btn-farm" onclick="buy('farm')">
      <h3>🌾 Farm — <span id="cost-farm">200</span> cookies</h3>
      <p>+5 cookies/sec | Owned: <span id="owned-farm">0</span></p>
    </div>

    <div class="upgrade locked" id="btn-factory" onclick="buy('factory')">
      <h3>🏭 Factory — <span id="cost-factory">1000</span> cookies</h3>
      <p>+20 cookies/sec | Owned: <span id="owned-factory">0</span></p>
    </div>

    <div class="upgrade locked" id="btn-mine" onclick="buy('mine')">
      <h3>⛏️ Mine — <span id="cost-mine">5000</span> cookies</h3>
      <p>+100 cookies/sec | Owned: <span id="owned-mine">0</span></p>
    </div>
  </div>
</div>

<script>
  let cookies = 0;
  let cpc = 1;
  let cps = 0;

  const upgrades = {
    cursor:  { cost: 10,   baseCost: 10,   cpc: 1,  cps: 0,   owned: 0 },
    grandma: { cost: 50,   baseCost: 50,   cpc: 0,  cps: 1,   owned: 0 },
    farm:    { cost: 200,  baseCost: 200,  cpc: 0,  cps: 5,   owned: 0 },
    factory: { cost: 1000, baseCost: 1000, cpc: 0,  cps: 20,  owned: 0 },
    mine:    { cost: 5000, baseCost: 5000, cpc: 0,  cps: 100, owned: 0 },
  };

  document.getElementById("cookie").addEventListener("click", () => {
    cookies += cpc;
    update();
  });

  function buy(name) {
    const u = upgrades[name];
    if (cookies < u.cost) return;
    cookies -= u.cost;
    u.owned++;
    cpc += u.cpc;
    cps += u.cps;
    u.cost = Math.floor(u.baseCost * Math.pow(1.5, u.owned));
    document.getElementById(`cost-${name}`).textContent = u.cost;
    document.getElementById(`owned-${name}`).textContent = u.owned;
    update();
  }

  function update() {
    document.getElementById("cookieCount").textContent = Math.floor(cookies);
    document.getElementById("cpsCount").textContent = cps;
    document.getElementById("cpcCount").textContent = cpc;

    for (const name in upgrades) {
      const btn = document.getElementById(`btn-${name}`);
      if (cookies >= upgrades[name].cost) {
        btn.classList.remove("locked");
      }
    }
  }

  setInterval(() => {
    cookies += cps / 20;
    update();
  }, 50);
</script>