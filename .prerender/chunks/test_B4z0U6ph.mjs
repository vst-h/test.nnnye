import { n as __exportAll } from "./rolldown-runtime_EAsCxrDo.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CqtNRbKM.mjs";
import { t as createComponent } from "./compiler_ZCBmPdZU.mjs";
//#region src/components/Test1.astro
var $$Test1 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<button onclick="do1">click</button>`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/components/Test1.astro", void 0);
//#endregion
//#region src/pages/test.astro
var test_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Test,
	file: () => $$file,
	url: () => $$url
});
var $$Test = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Test1", $$Test1, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "D:/Vista/NanYe/SrfService/SrfWeb/src/components/Test1.astro",
		"client:component-export": "default"
	})}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/test.astro", void 0);
var $$file = "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/test.astro";
var $$url = "/test";
//#endregion
//#region \0virtual:astro:page:src/pages/test@_@astro
var page = () => test_exports;
//#endregion
export { page };
