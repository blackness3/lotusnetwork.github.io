import{_ as s,o as a,c as e,V as o}from"./chunks/framework.b1ba171e.js";const b=JSON.parse('{"title":"使用docker进行部署","description":"","frontmatter":{},"headers":[],"relativePath":"zhs/docs/bodhi_setup.md","filePath":"zhs/docs/bodhi_setup.md"}'),t={name:"zhs/docs/bodhi_setup.md"},n=o(`<h1 id="使用docker进行部署" tabindex="-1">使用docker进行部署 <a class="header-anchor" href="#使用docker进行部署" aria-label="Permalink to &quot;使用docker进行部署&quot;">​</a></h1><p>你的环境需要安装 <code>git, nano, docker(with compose plugin)</code></p><p><strong>dc 等同于 docker compose</strong></p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/lotusnetwork/bodhi-docker.git</span></span></code></pre></div><p><strong>如果想在arm的服务器上使用bodhi,请将docker-compose.yml中的</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">image: ghcr.io/lotusnetwork/bodhi-docker</span></span></code></pre></div><p><strong>修改成</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">build: https://github.com/lotusnetwork/bodhi-docker.git</span></span></code></pre></div><h2 id="准备您的tls证书" tabindex="-1">准备您的tls证书 <a class="header-anchor" href="#准备您的tls证书" aria-label="Permalink to &quot;准备您的tls证书&quot;">​</a></h2><p>拷贝您的证书与私钥至bodhi-docker/data</p><p>现在您的目录格式应该如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|- docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">|- data/</span></span>
<span class="line"><span style="color:#A6ACCD;"> |- hysteria</span></span>
<span class="line"><span style="color:#A6ACCD;"> |- config.ini</span></span>
<span class="line"><span style="color:#A6ACCD;"> |- cert.crt</span></span>
<span class="line"><span style="color:#A6ACCD;"> |- key.key</span></span>
<span class="line"><span style="color:#A6ACCD;"> |- bin/</span></span>
<span class="line"><span style="color:#A6ACCD;">  |- yq</span></span></code></pre></div><p><strong>data文件夹将会被映射到容器内的/gateway</strong></p><h2 id="修改配置档" tabindex="-1">修改配置档 <a class="header-anchor" href="#修改配置档" aria-label="Permalink to &quot;修改配置档&quot;">​</a></h2><p><code>upstream_api=https://example.com &lt;- board address</code> <strong>修改它</strong></p><p><code>api_port=7653 &lt;- Hysteria api port</code></p><p><code>nodeid=1 &lt;- remote nodeID</code> <strong>修改它</strong></p><p><code>core_path=/gateway/hysteria 到hysteria核心的路径(容器内)</code></p><p><code>tls_cert=/gateway/cert.crt &lt;-path to tls cert</code> <strong>修改它</strong></p><p><code>tls_key=/gateway/key.key &lt;- path to tls key</code> <strong>修改它</strong></p><p><code>psk=leuleuleuleu &lt;- password for nodeAPI</code> <strong>修改它</strong></p><p><code>obfs=true/false &lt;- 启用/禁用 obfs 于 hysteria 中</code> <strong>如果您不使用lotusboard请将其设定为true</strong></p><p><code>acl=</code> <strong>填入你的acl配置档完整路径</strong></p><h2 id="启动-bodhi" tabindex="-1">启动 bodhi <a class="header-anchor" href="#启动-bodhi" aria-label="Permalink to &quot;启动 bodhi&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dc up -d</span></span></code></pre></div>`,26),l=[n];function p(c,r,d,i,h,g){return a(),e("div",null,l)}const y=s(t,[["render",p]]);export{b as __pageData,y as default};