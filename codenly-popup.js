/* SmartOPD promotional card for codenly.in.
 * Add <script defer src="https://smartopd.codenly.in/codenly-popup.js"></script>
 * just before </body> on the existing Codenly site.
 * A standalone, dependency-free floating widget. It does not modify site content.
 */
(() => {
  'use strict';
  if (document.getElementById('smartopd-promo')) return;
  const DESTINATION = 'https://smartopd.codenly.in/';
  const KEY = 'codenly-smartopd-promo-closed';
  try { if (sessionStorage.getItem(KEY) === 'yes') return; } catch (e) { /* storage unavailable */ }
  const css = `
    #smartopd-promo{position:fixed;z-index:9998;bottom:22px;left:22px;width:min(312px,calc(100vw - 44px));padding:20px 19px 17px;background:#fff;border:1px solid #dce9e4;border-radius:17px;box-shadow:0 16px 45px rgba(9,36,61,.19);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;color:#0d2242;line-height:1.5;animation:smartopd-rise .35s ease-out}
    #smartopd-promo,#smartopd-promo *{box-sizing:border-box}
    #smartopd-promo .sop-close{position:absolute;top:9px;right:9px;width:31px;height:31px;display:grid;place-items:center;border:0;background:transparent;border-radius:8px;color:#678098;cursor:pointer;font-size:23px;line-height:1}
    #smartopd-promo .sop-close:hover{background:#e9f7f1;color:#0d2242}
    #smartopd-promo .sop-label{font-size:10px;font-weight:850;letter-spacing:.09em;color:#008c70;text-transform:uppercase;display:flex;align-items:center;gap:7px;padding-right:26px}
    #smartopd-promo .sop-pulse{width:7px;height:7px;background:#00a77e;border-radius:50%;box-shadow:0 0 0 4px #dff8eb}
    #smartopd-promo h3{font:800 23px/1.13 Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;letter-spacing:-.04em;margin:13px 0 8px;color:#0d2242}
    #smartopd-promo h3 em{font-style:normal;color:#008c70}
    #smartopd-promo p{font-size:12px;color:#6f8095;margin:0 0 15px;line-height:1.65}
    #smartopd-promo .sop-link{background:#008c70;color:#fff;font-weight:800;border-radius:9px;padding:11px 13px;font-size:12px;display:inline-flex;gap:9px;align-items:center;justify-content:center;text-decoration:none;width:100%;transition:background .2s}
    #smartopd-promo .sop-link:hover{background:#00755f}
    #smartopd-promo .sop-foot{font-size:10px;color:#78909a;text-align:center;margin-top:10px}
    #smartopd-promo :focus-visible{outline:3px solid #13ae94;outline-offset:2px}
    @keyframes smartopd-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    @media(max-width:640px){#smartopd-promo{bottom:auto;top:145px;left:10px;right:10px;width:auto;display:flex;align-items:center;gap:10px;padding:13px 45px 13px 14px;border-radius:12px;box-shadow:0 7px 28px rgba(9,36,61,.17)}#smartopd-promo .sop-label,#smartopd-promo p,#smartopd-promo .sop-foot{display:none}#smartopd-promo h3{font-size:15px;line-height:1.3;margin:0;flex:1}#smartopd-promo .sop-link{width:auto;white-space:nowrap;padding:8px 10px;font-size:10px}#smartopd-promo .sop-close{top:10px;right:7px}}
    @media(max-width:380px){#smartopd-promo h3{font-size:13px}#smartopd-promo .sop-link{font-size:9px}}
    @media(prefers-reduced-motion:reduce){#smartopd-promo{animation:none}}
  `;
  const style = document.createElement('style');
  style.id = 'smartopd-promo-style';
  style.textContent = css;
  const card = document.createElement('aside');
  card.id = 'smartopd-promo';
  card.setAttribute('aria-label', 'SmartOPD coming soon announcement');
  card.innerHTML = `
    <button class="sop-close" type="button" aria-label="Dismiss SmartOPD announcement">×</button>
    <div class="sop-label"><span class="sop-pulse"></span>New from Codenly · Coming soon</div>
    <h3>Meet <em>SmartOPD.</em></h3>
    <p>Smarter appointments. Clearer arrival times. Less unnecessary hospital waiting.</p>
    <a class="sop-link" href="${DESTINATION}">Explore SmartOPD <span aria-hidden="true">↗</span></a>
    <div class="sop-foot">Working prototype · Hospital pilots welcome</div>
  `;
  card.querySelector('.sop-close').addEventListener('click', () => {
    card.remove(); style.remove();
    try { sessionStorage.setItem(KEY, 'yes'); } catch (e) {}
  });
  function mount() { document.head.appendChild(style); document.body.appendChild(card); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
})();
