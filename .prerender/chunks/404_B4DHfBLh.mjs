import { n as __exportAll } from "./rolldown-runtime_EAsCxrDo.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CqtNRbKM.mjs";
import { t as createComponent } from "./compiler_ZCBmPdZU.mjs";
import { t as $$NyLayout } from "./NyLayout_BzmLeSZY.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "NyLayout", $$NyLayout, { "title": "南也输入法" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div style="text-align: center; font-size: 6em;"> 404 </div><div style="text-align: center; font-size: 4em;">页面不存在</div>` })}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/404.astro", void 0);
var $$file = "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
