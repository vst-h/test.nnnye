import { n as __exportAll } from "./rolldown-runtime_EAsCxrDo.mjs";
//#region src/pages/browser-unsupported.html
var browser_unsupported_exports = /* @__PURE__ */ __exportAll({ default: () => render });
function render({ slots: ___SLOTS___ }) {
	return `<!doctype html>
<html lang="cn">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <link rel="icon" href="/favicon.ico" />
  <title>南也 - 浏览器版本过低</title>
</head>

<body style="background-color: #ffe; color: #272; text-align: center;">
  <div style="margin-top: 30vh; font-size: 2.5em;">
    浏览器版本过低 <br />
    请升级或更换浏览器打开 <br />
  </div>
  <p style="font-size: 1.5rem;">
    <code id="url"></code>
  </p>
  <script>
    var params = new URLSearchParams(location.search)
    document.getElementById("url").textContent = params.get("from") || "-"
  <\/script>
</body>

</html>`;
}
render["astro:html"] = true;
//#endregion
//#region \0virtual:astro:page:src/pages/browser-unsupported@_@html
var page = () => browser_unsupported_exports;
//#endregion
export { page };
