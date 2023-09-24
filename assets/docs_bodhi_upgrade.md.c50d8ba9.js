import{_ as e,o as a,c as o,V as t}from"./chunks/framework.b1ba171e.js";const b=JSON.parse('{"title":"Bodhi Upgrade instruction","description":"","frontmatter":{},"headers":[],"relativePath":"docs/bodhi_upgrade.md","filePath":"docs/bodhi_upgrade.md"}'),r={name:"docs/bodhi_upgrade.md"},d=t(`<h1 id="bodhi-upgrade-instruction" tabindex="-1">Bodhi Upgrade instruction <a class="header-anchor" href="#bodhi-upgrade-instruction" aria-label="Permalink to &quot;Bodhi Upgrade instruction&quot;">​</a></h1><p><strong>dc = docker compose</strong></p><h2 id="upgrade-bodhi" tabindex="-1">Upgrade bodhi <a class="header-anchor" href="#upgrade-bodhi" aria-label="Permalink to &quot;Upgrade bodhi&quot;">​</a></h2><p>execute this command under bodhi docker compose root diretory</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dc pull bodhi</span></span>
<span class="line"><span style="color:#A6ACCD;">dc down bodhi</span></span>
<span class="line"><span style="color:#A6ACCD;">dc up bodhi -d</span></span></code></pre></div><h2 id="upgrade-hysteria-core" tabindex="-1">Upgrade hysteria core <a class="header-anchor" href="#upgrade-hysteria-core" aria-label="Permalink to &quot;Upgrade hysteria core&quot;">​</a></h2><p>grab the latest hysteria core move it to data folder of bodhi</p><p>then <code>dc restart bodhi</code></p>`,8),s=[d];function i(n,c,p,h,l,u){return a(),o("div",null,s)}const g=e(r,[["render",i]]);export{b as __pageData,g as default};