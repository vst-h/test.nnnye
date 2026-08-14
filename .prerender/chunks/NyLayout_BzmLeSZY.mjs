import { E as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead, v as createRenderInstruction } from "./server_CqtNRbKM.mjs";
import { t as createComponent } from "./compiler_ZCBmPdZU.mjs";
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/NyLayout.astro
createAstro("https://astro.build");
var $$NyLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$NyLayout;
	const { title = "南也" } = Astro.props;
	return renderTemplate`${renderScript($$result, "D:/Vista/NanYe/SrfService/SrfWeb/src/layouts/NyLayout.astro?astro&type=script&index=0&lang.ts")}<html lang="cn"${addAttribute(Astro.url.pathname, "id")}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><link rel="icon" href="/favicon.ico"><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><script>
      if ("noModule" in HTMLScriptElement.prototype === false) {
        location.replace("/browser-unsupported.html?from=" + encodeURIComponent(location.href))
      }
    <\/script>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/layouts/NyLayout.astro", void 0);
//#endregion
export { renderScript as n, $$NyLayout as t };
