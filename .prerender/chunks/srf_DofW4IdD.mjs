import { n as __exportAll } from "./rolldown-runtime_EAsCxrDo.mjs";
import { t as isRemoteAllowed, u as isRemotePath } from "./remote_DwRyLuz7.mjs";
import { C as InvalidImageService, V as RemoteImageNotAllowed, c as ExpectedImage, f as FontFamilyNotFound, l as ExpectedImageOptions, t as AstroError, u as ExpectedNotESMImage, v as ImageMissingAlt } from "./errors_CS1svW_A.mjs";
import { C as unescapeHTML, E as createAstro, _ as addAttribute, a as Fragment, c as renderSlot, d as renderTemplate, h as maybeRenderHead, i as renderComponent, t as spreadAttributes } from "./server_CqtNRbKM.mjs";
import { t as createComponent } from "./compiler_ZCBmPdZU.mjs";
import { n as renderScript, t as $$NyLayout } from "./NyLayout_BzmLeSZY.mjs";
import { c as isRemoteImage, i as inferRemoteSize$1, l as resolveSrc, n as isLocalService, o as resolveDefaultOutputFormat, s as isESMImportedImage, u as DEFAULT_HASH_PROPS } from "./service_D_DXYwPn.mjs";
//#region src/components/AsideOp.astro
var $$AsideOp = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/Vista/NanYe/SrfService/SrfWeb/src/components/AsideOp.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "ny-aside-op", "ny-aside-op", {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ny-slide-bar", "ny-slide-bar", {}, { "default": ($$result) => renderTemplate` ︿ ` })}${renderComponent($$result, "ny-aside-main", "ny-aside-main", {}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}` })}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/components/AsideOp.astro", void 0);
//#endregion
//#region src/layouts/AsideLayout.astro
var $$AsideLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderScript($$result, "D:/Vista/NanYe/SrfService/SrfWeb/src/layouts/AsideLayout.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "ny-aside-layout", "ny-aside-layout", {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AsideOp", $$AsideOp, {}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["aside"])}` })}${renderComponent($$result, "ny-main", "ny-main", {}, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["main"])}${maybeRenderHead($$result)}<div class="new-col"></div><div class="new-col"></div><div class="new-col"></div>` })}` })}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/layouts/AsideLayout.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/layout.js
var DEFAULT_RESOLUTIONS = [
	640,
	750,
	828,
	960,
	1080,
	1280,
	1668,
	1920,
	2048,
	2560,
	3200,
	3840,
	4480,
	5120,
	6016
];
var LIMITED_RESOLUTIONS = [
	640,
	750,
	828,
	1080,
	1280,
	1668,
	2048,
	2560
];
var getWidths = ({ width, layout, breakpoints = DEFAULT_RESOLUTIONS, originalWidth }) => {
	const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
	if (layout === "full-width") return breakpoints.filter(smallerThanOriginal);
	if (!width) return [];
	const doubleWidth = width * 2;
	const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
	if (layout === "fixed") return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...breakpoints
	].filter((w) => w <= maxSize).sort((a, b) => a - b);
	return [];
};
var getSizesAttribute = ({ width, layout }) => {
	if (!width || !layout) return;
	switch (layout) {
		case "constrained": return `(min-width: ${width}px) ${width}px, 100vw`;
		case "fixed": return `${width}px`;
		case "full-width": return `100vw`;
		default: return;
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/types.js
function isImageMetadata(src) {
	return src.fsPath && !("fsPath" in src);
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/utils/url.js
var PLACEHOLDER_BASE = "astro://placeholder";
function createPlaceholderURL(pathOrUrl) {
	return new URL(pathOrUrl, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(url) {
	return url.href.replace(PLACEHOLDER_BASE, "");
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/internal.js
var cssFitValues = [
	"fill",
	"contain",
	"cover",
	"scale-down"
];
async function getConfiguredImageService() {
	if (!globalThis?.astroAsset?.imageService) {
		const { default: service } = await import("./sharp_C4kLR8uu.mjs").catch((e) => {
			const error = new AstroError(InvalidImageService);
			error.cause = e;
			throw error;
		});
		if (!globalThis.astroAsset) globalThis.astroAsset = {};
		globalThis.astroAsset.imageService = service;
		return service;
	}
	return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
	if (!options || typeof options !== "object") throw new AstroError({
		...ExpectedImageOptions,
		message: ExpectedImageOptions.message(JSON.stringify(options))
	});
	if (typeof options.src === "undefined") throw new AstroError({
		...ExpectedImage,
		message: ExpectedImage.message(options.src, "undefined", JSON.stringify(options))
	});
	if (isImageMetadata(options)) throw new AstroError(ExpectedNotESMImage);
	const service = await getConfiguredImageService();
	const resolvedOptions = {
		...options,
		src: await resolveSrc(options.src)
	};
	let originalWidth;
	let originalHeight;
	if (resolvedOptions.inferSize) {
		delete resolvedOptions.inferSize;
		if (isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
			if (!isRemoteAllowed(resolvedOptions.src, imageConfig)) throw new AstroError({
				...RemoteImageNotAllowed,
				message: RemoteImageNotAllowed.message(resolvedOptions.src)
			});
			const getRemoteSize = (url) => service.getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
			const result = await getRemoteSize(resolvedOptions.src);
			resolvedOptions.width ??= result.width;
			resolvedOptions.height ??= result.height;
			if (result.format) resolvedOptions.format ??= resolveDefaultOutputFormat(result.format);
			originalWidth = result.width;
			originalHeight = result.height;
		}
	}
	const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
	const clonedSrc = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.clone ?? resolvedOptions.src : resolvedOptions.src;
	if (isESMImportedImage(clonedSrc)) {
		originalWidth = clonedSrc.width;
		originalHeight = clonedSrc.height;
	}
	if (originalWidth && originalHeight) {
		const aspectRatio = originalWidth / originalHeight;
		if (resolvedOptions.height && !resolvedOptions.width) resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
		else if (resolvedOptions.width && !resolvedOptions.height) resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
		else if (!resolvedOptions.width && !resolvedOptions.height) {
			resolvedOptions.width = originalWidth;
			resolvedOptions.height = originalHeight;
		}
	}
	resolvedOptions.src = clonedSrc;
	const layout = options.layout ?? imageConfig.layout ?? "none";
	if (resolvedOptions.priority) {
		resolvedOptions.loading ??= "eager";
		resolvedOptions.decoding ??= "sync";
		resolvedOptions.fetchpriority ??= "high";
		delete resolvedOptions.priority;
	} else {
		resolvedOptions.loading ??= "lazy";
		resolvedOptions.decoding ??= "async";
		resolvedOptions.fetchpriority ??= void 0;
	}
	if (layout !== "none") {
		resolvedOptions.widths ||= getWidths({
			width: resolvedOptions.width,
			layout,
			originalWidth,
			breakpoints: imageConfig.breakpoints?.length ? imageConfig.breakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
		});
		resolvedOptions.sizes ||= getSizesAttribute({
			width: resolvedOptions.width,
			layout
		});
		delete resolvedOptions.densities;
		resolvedOptions["data-astro-image"] = layout;
		if (resolvedOptions.fit && cssFitValues.includes(resolvedOptions.fit)) resolvedOptions["data-astro-image-fit"] = resolvedOptions.fit;
		resolvedOptions["data-astro-image-pos"] = (resolvedOptions.position || "center").replace(/\s+/g, "-");
	}
	const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
	validatedOptions.format ??= await peekRemoteFormatForStaticEmit(validatedOptions, imageConfig, service);
	const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
	const lazyImageURLFactory = (getValue) => {
		let cached = null;
		return () => cached ??= getValue();
	};
	const initialImageURL = await service.getURL(validatedOptions, imageConfig);
	let lazyImageURL = lazyImageURLFactory(() => initialImageURL);
	const matchesValidatedTransform = (transform) => transform.width === validatedOptions.width && transform.height === validatedOptions.height && transform.format === validatedOptions.format;
	let srcSets = await Promise.all(srcSetTransforms.map(async (srcSet) => {
		return {
			transform: srcSet.transform,
			url: matchesValidatedTransform(srcSet.transform) ? initialImageURL : await service.getURL(srcSet.transform, imageConfig),
			descriptor: srcSet.descriptor,
			attributes: srcSet.attributes
		};
	}));
	if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && initialImageURL === validatedOptions.src)) {
		const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
		lazyImageURL = lazyImageURLFactory(() => globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalFilePath));
		srcSets = srcSetTransforms.map((srcSet) => {
			return {
				transform: srcSet.transform,
				url: matchesValidatedTransform(srcSet.transform) ? lazyImageURL() : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
				descriptor: srcSet.descriptor,
				attributes: srcSet.attributes
			};
		});
	} else if (imageConfig.assetQueryParams) {
		const imageURLObj = createPlaceholderURL(initialImageURL);
		imageConfig.assetQueryParams.forEach((value, key) => {
			imageURLObj.searchParams.set(key, value);
		});
		lazyImageURL = lazyImageURLFactory(() => stringifyPlaceholderURL(imageURLObj));
		srcSets = srcSets.map((srcSet) => {
			const urlObj = createPlaceholderURL(srcSet.url);
			imageConfig.assetQueryParams.forEach((value, key) => {
				urlObj.searchParams.set(key, value);
			});
			return {
				...srcSet,
				url: stringifyPlaceholderURL(urlObj)
			};
		});
	}
	return {
		rawOptions: resolvedOptions,
		options: validatedOptions,
		get src() {
			return lazyImageURL();
		},
		srcSet: {
			values: srcSets,
			attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
		},
		attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
	};
}
async function peekRemoteFormatForStaticEmit(options, imageConfig, service) {
	if (!isRemoteImage(options.src) || !isRemoteAllowed(options.src, imageConfig) || !globalThis.astroAsset?.addStaticImage || !isLocalService(service) || !service.getRemoteSize) return;
	try {
		return resolveDefaultOutputFormat((await service.getRemoteSize(options.src, imageConfig)).format);
	} catch {
		return;
	}
}
Function.prototype.toString.call(Object);
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Image.astro
createAstro("https://astro.build");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/.pnpm/mrmime@2.0.1/node_modules/mrmime/index.mjs
var mimes = {
	"3g2": "video/3gpp2",
	"3gp": "video/3gpp",
	"3gpp": "video/3gpp",
	"3mf": "model/3mf",
	"aac": "audio/aac",
	"ac": "application/pkix-attr-cert",
	"adp": "audio/adpcm",
	"adts": "audio/aac",
	"ai": "application/postscript",
	"aml": "application/automationml-aml+xml",
	"amlx": "application/automationml-amlx+zip",
	"amr": "audio/amr",
	"apng": "image/apng",
	"appcache": "text/cache-manifest",
	"appinstaller": "application/appinstaller",
	"appx": "application/appx",
	"appxbundle": "application/appxbundle",
	"asc": "application/pgp-keys",
	"atom": "application/atom+xml",
	"atomcat": "application/atomcat+xml",
	"atomdeleted": "application/atomdeleted+xml",
	"atomsvc": "application/atomsvc+xml",
	"au": "audio/basic",
	"avci": "image/avci",
	"avcs": "image/avcs",
	"avif": "image/avif",
	"aw": "application/applixware",
	"bdoc": "application/bdoc",
	"bin": "application/octet-stream",
	"bmp": "image/bmp",
	"bpk": "application/octet-stream",
	"btf": "image/prs.btif",
	"btif": "image/prs.btif",
	"buffer": "application/octet-stream",
	"ccxml": "application/ccxml+xml",
	"cdfx": "application/cdfx+xml",
	"cdmia": "application/cdmi-capability",
	"cdmic": "application/cdmi-container",
	"cdmid": "application/cdmi-domain",
	"cdmio": "application/cdmi-object",
	"cdmiq": "application/cdmi-queue",
	"cer": "application/pkix-cert",
	"cgm": "image/cgm",
	"cjs": "application/node",
	"class": "application/java-vm",
	"coffee": "text/coffeescript",
	"conf": "text/plain",
	"cpl": "application/cpl+xml",
	"cpt": "application/mac-compactpro",
	"crl": "application/pkix-crl",
	"css": "text/css",
	"csv": "text/csv",
	"cu": "application/cu-seeme",
	"cwl": "application/cwl",
	"cww": "application/prs.cww",
	"davmount": "application/davmount+xml",
	"dbk": "application/docbook+xml",
	"deb": "application/octet-stream",
	"def": "text/plain",
	"deploy": "application/octet-stream",
	"dib": "image/bmp",
	"disposition-notification": "message/disposition-notification",
	"dist": "application/octet-stream",
	"distz": "application/octet-stream",
	"dll": "application/octet-stream",
	"dmg": "application/octet-stream",
	"dms": "application/octet-stream",
	"doc": "application/msword",
	"dot": "application/msword",
	"dpx": "image/dpx",
	"drle": "image/dicom-rle",
	"dsc": "text/prs.lines.tag",
	"dssc": "application/dssc+der",
	"dtd": "application/xml-dtd",
	"dump": "application/octet-stream",
	"dwd": "application/atsc-dwd+xml",
	"ear": "application/java-archive",
	"ecma": "application/ecmascript",
	"elc": "application/octet-stream",
	"emf": "image/emf",
	"eml": "message/rfc822",
	"emma": "application/emma+xml",
	"emotionml": "application/emotionml+xml",
	"eps": "application/postscript",
	"epub": "application/epub+zip",
	"exe": "application/octet-stream",
	"exi": "application/exi",
	"exp": "application/express",
	"exr": "image/aces",
	"ez": "application/andrew-inset",
	"fdf": "application/fdf",
	"fdt": "application/fdt+xml",
	"fits": "image/fits",
	"g3": "image/g3fax",
	"gbr": "application/rpki-ghostbusters",
	"geojson": "application/geo+json",
	"gif": "image/gif",
	"glb": "model/gltf-binary",
	"gltf": "model/gltf+json",
	"gml": "application/gml+xml",
	"gpx": "application/gpx+xml",
	"gram": "application/srgs",
	"grxml": "application/srgs+xml",
	"gxf": "application/gxf",
	"gz": "application/gzip",
	"h261": "video/h261",
	"h263": "video/h263",
	"h264": "video/h264",
	"heic": "image/heic",
	"heics": "image/heic-sequence",
	"heif": "image/heif",
	"heifs": "image/heif-sequence",
	"hej2": "image/hej2k",
	"held": "application/atsc-held+xml",
	"hjson": "application/hjson",
	"hlp": "application/winhlp",
	"hqx": "application/mac-binhex40",
	"hsj2": "image/hsj2",
	"htm": "text/html",
	"html": "text/html",
	"ics": "text/calendar",
	"ief": "image/ief",
	"ifb": "text/calendar",
	"iges": "model/iges",
	"igs": "model/iges",
	"img": "application/octet-stream",
	"in": "text/plain",
	"ini": "text/plain",
	"ink": "application/inkml+xml",
	"inkml": "application/inkml+xml",
	"ipfix": "application/ipfix",
	"iso": "application/octet-stream",
	"its": "application/its+xml",
	"jade": "text/jade",
	"jar": "application/java-archive",
	"jhc": "image/jphc",
	"jls": "image/jls",
	"jp2": "image/jp2",
	"jpe": "image/jpeg",
	"jpeg": "image/jpeg",
	"jpf": "image/jpx",
	"jpg": "image/jpeg",
	"jpg2": "image/jp2",
	"jpgm": "image/jpm",
	"jpgv": "video/jpeg",
	"jph": "image/jph",
	"jpm": "image/jpm",
	"jpx": "image/jpx",
	"js": "text/javascript",
	"json": "application/json",
	"json5": "application/json5",
	"jsonld": "application/ld+json",
	"jsonml": "application/jsonml+json",
	"jsx": "text/jsx",
	"jt": "model/jt",
	"jxl": "image/jxl",
	"jxr": "image/jxr",
	"jxra": "image/jxra",
	"jxrs": "image/jxrs",
	"jxs": "image/jxs",
	"jxsc": "image/jxsc",
	"jxsi": "image/jxsi",
	"jxss": "image/jxss",
	"kar": "audio/midi",
	"ktx": "image/ktx",
	"ktx2": "image/ktx2",
	"less": "text/less",
	"lgr": "application/lgr+xml",
	"list": "text/plain",
	"litcoffee": "text/coffeescript",
	"log": "text/plain",
	"lostxml": "application/lost+xml",
	"lrf": "application/octet-stream",
	"m1v": "video/mpeg",
	"m21": "application/mp21",
	"m2a": "audio/mpeg",
	"m2t": "video/mp2t",
	"m2ts": "video/mp2t",
	"m2v": "video/mpeg",
	"m3a": "audio/mpeg",
	"m4a": "audio/mp4",
	"m4p": "application/mp4",
	"m4s": "video/iso.segment",
	"ma": "application/mathematica",
	"mads": "application/mads+xml",
	"maei": "application/mmt-aei+xml",
	"man": "text/troff",
	"manifest": "text/cache-manifest",
	"map": "application/json",
	"mar": "application/octet-stream",
	"markdown": "text/markdown",
	"mathml": "application/mathml+xml",
	"mb": "application/mathematica",
	"mbox": "application/mbox",
	"md": "text/markdown",
	"mdx": "text/mdx",
	"me": "text/troff",
	"mesh": "model/mesh",
	"meta4": "application/metalink4+xml",
	"metalink": "application/metalink+xml",
	"mets": "application/mets+xml",
	"mft": "application/rpki-manifest",
	"mid": "audio/midi",
	"midi": "audio/midi",
	"mime": "message/rfc822",
	"mj2": "video/mj2",
	"mjp2": "video/mj2",
	"mjs": "text/javascript",
	"mml": "text/mathml",
	"mods": "application/mods+xml",
	"mov": "video/quicktime",
	"mp2": "audio/mpeg",
	"mp21": "application/mp21",
	"mp2a": "audio/mpeg",
	"mp3": "audio/mpeg",
	"mp4": "video/mp4",
	"mp4a": "audio/mp4",
	"mp4s": "application/mp4",
	"mp4v": "video/mp4",
	"mpd": "application/dash+xml",
	"mpe": "video/mpeg",
	"mpeg": "video/mpeg",
	"mpf": "application/media-policy-dataset+xml",
	"mpg": "video/mpeg",
	"mpg4": "video/mp4",
	"mpga": "audio/mpeg",
	"mpp": "application/dash-patch+xml",
	"mrc": "application/marc",
	"mrcx": "application/marcxml+xml",
	"ms": "text/troff",
	"mscml": "application/mediaservercontrol+xml",
	"msh": "model/mesh",
	"msi": "application/octet-stream",
	"msix": "application/msix",
	"msixbundle": "application/msixbundle",
	"msm": "application/octet-stream",
	"msp": "application/octet-stream",
	"mtl": "model/mtl",
	"mts": "video/mp2t",
	"musd": "application/mmt-usd+xml",
	"mxf": "application/mxf",
	"mxmf": "audio/mobile-xmf",
	"mxml": "application/xv+xml",
	"n3": "text/n3",
	"nb": "application/mathematica",
	"nq": "application/n-quads",
	"nt": "application/n-triples",
	"obj": "model/obj",
	"oda": "application/oda",
	"oga": "audio/ogg",
	"ogg": "audio/ogg",
	"ogv": "video/ogg",
	"ogx": "application/ogg",
	"omdoc": "application/omdoc+xml",
	"onepkg": "application/onenote",
	"onetmp": "application/onenote",
	"onetoc": "application/onenote",
	"onetoc2": "application/onenote",
	"opf": "application/oebps-package+xml",
	"opus": "audio/ogg",
	"otf": "font/otf",
	"owl": "application/rdf+xml",
	"oxps": "application/oxps",
	"p10": "application/pkcs10",
	"p7c": "application/pkcs7-mime",
	"p7m": "application/pkcs7-mime",
	"p7s": "application/pkcs7-signature",
	"p8": "application/pkcs8",
	"pdf": "application/pdf",
	"pfr": "application/font-tdpfr",
	"pgp": "application/pgp-encrypted",
	"pkg": "application/octet-stream",
	"pki": "application/pkixcmp",
	"pkipath": "application/pkix-pkipath",
	"pls": "application/pls+xml",
	"png": "image/png",
	"prc": "model/prc",
	"prf": "application/pics-rules",
	"provx": "application/provenance+xml",
	"ps": "application/postscript",
	"pskcxml": "application/pskc+xml",
	"pti": "image/prs.pti",
	"qt": "video/quicktime",
	"raml": "application/raml+yaml",
	"rapd": "application/route-apd+xml",
	"rdf": "application/rdf+xml",
	"relo": "application/p2p-overlay+xml",
	"rif": "application/reginfo+xml",
	"rl": "application/resource-lists+xml",
	"rld": "application/resource-lists-diff+xml",
	"rmi": "audio/midi",
	"rnc": "application/relax-ng-compact-syntax",
	"rng": "application/xml",
	"roa": "application/rpki-roa",
	"roff": "text/troff",
	"rq": "application/sparql-query",
	"rs": "application/rls-services+xml",
	"rsat": "application/atsc-rsat+xml",
	"rsd": "application/rsd+xml",
	"rsheet": "application/urc-ressheet+xml",
	"rss": "application/rss+xml",
	"rtf": "text/rtf",
	"rtx": "text/richtext",
	"rusd": "application/route-usd+xml",
	"s3m": "audio/s3m",
	"sbml": "application/sbml+xml",
	"scq": "application/scvp-cv-request",
	"scs": "application/scvp-cv-response",
	"sdp": "application/sdp",
	"senmlx": "application/senml+xml",
	"sensmlx": "application/sensml+xml",
	"ser": "application/java-serialized-object",
	"setpay": "application/set-payment-initiation",
	"setreg": "application/set-registration-initiation",
	"sgi": "image/sgi",
	"sgm": "text/sgml",
	"sgml": "text/sgml",
	"shex": "text/shex",
	"shf": "application/shf+xml",
	"shtml": "text/html",
	"sieve": "application/sieve",
	"sig": "application/pgp-signature",
	"sil": "audio/silk",
	"silo": "model/mesh",
	"siv": "application/sieve",
	"slim": "text/slim",
	"slm": "text/slim",
	"sls": "application/route-s-tsid+xml",
	"smi": "application/smil+xml",
	"smil": "application/smil+xml",
	"snd": "audio/basic",
	"so": "application/octet-stream",
	"spdx": "text/spdx",
	"spp": "application/scvp-vp-response",
	"spq": "application/scvp-vp-request",
	"spx": "audio/ogg",
	"sql": "application/sql",
	"sru": "application/sru+xml",
	"srx": "application/sparql-results+xml",
	"ssdl": "application/ssdl+xml",
	"ssml": "application/ssml+xml",
	"stk": "application/hyperstudio",
	"stl": "model/stl",
	"stpx": "model/step+xml",
	"stpxz": "model/step-xml+zip",
	"stpz": "model/step+zip",
	"styl": "text/stylus",
	"stylus": "text/stylus",
	"svg": "image/svg+xml",
	"svgz": "image/svg+xml",
	"swidtag": "application/swid+xml",
	"t": "text/troff",
	"t38": "image/t38",
	"td": "application/urc-targetdesc+xml",
	"tei": "application/tei+xml",
	"teicorpus": "application/tei+xml",
	"text": "text/plain",
	"tfi": "application/thraud+xml",
	"tfx": "image/tiff-fx",
	"tif": "image/tiff",
	"tiff": "image/tiff",
	"toml": "application/toml",
	"tr": "text/troff",
	"trig": "application/trig",
	"ts": "video/mp2t",
	"tsd": "application/timestamped-data",
	"tsv": "text/tab-separated-values",
	"ttc": "font/collection",
	"ttf": "font/ttf",
	"ttl": "text/turtle",
	"ttml": "application/ttml+xml",
	"txt": "text/plain",
	"u3d": "model/u3d",
	"u8dsn": "message/global-delivery-status",
	"u8hdr": "message/global-headers",
	"u8mdn": "message/global-disposition-notification",
	"u8msg": "message/global",
	"ubj": "application/ubjson",
	"uri": "text/uri-list",
	"uris": "text/uri-list",
	"urls": "text/uri-list",
	"vcard": "text/vcard",
	"vrml": "model/vrml",
	"vtt": "text/vtt",
	"vxml": "application/voicexml+xml",
	"war": "application/java-archive",
	"wasm": "application/wasm",
	"wav": "audio/wav",
	"weba": "audio/webm",
	"webm": "video/webm",
	"webmanifest": "application/manifest+json",
	"webp": "image/webp",
	"wgsl": "text/wgsl",
	"wgt": "application/widget",
	"wif": "application/watcherinfo+xml",
	"wmf": "image/wmf",
	"woff": "font/woff",
	"woff2": "font/woff2",
	"wrl": "model/vrml",
	"wsdl": "application/wsdl+xml",
	"wspolicy": "application/wspolicy+xml",
	"x3d": "model/x3d+xml",
	"x3db": "model/x3d+fastinfoset",
	"x3dbz": "model/x3d+binary",
	"x3dv": "model/x3d-vrml",
	"x3dvz": "model/x3d+vrml",
	"x3dz": "model/x3d+xml",
	"xaml": "application/xaml+xml",
	"xav": "application/xcap-att+xml",
	"xca": "application/xcap-caps+xml",
	"xcs": "application/calendar+xml",
	"xdf": "application/xcap-diff+xml",
	"xdssc": "application/dssc+xml",
	"xel": "application/xcap-el+xml",
	"xenc": "application/xenc+xml",
	"xer": "application/patch-ops-error+xml",
	"xfdf": "application/xfdf",
	"xht": "application/xhtml+xml",
	"xhtml": "application/xhtml+xml",
	"xhvml": "application/xv+xml",
	"xlf": "application/xliff+xml",
	"xm": "audio/xm",
	"xml": "text/xml",
	"xns": "application/xcap-ns+xml",
	"xop": "application/xop+xml",
	"xpl": "application/xproc+xml",
	"xsd": "application/xml",
	"xsf": "application/prs.xsf+xml",
	"xsl": "application/xml",
	"xslt": "application/xml",
	"xspf": "application/xspf+xml",
	"xvm": "application/xv+xml",
	"xvml": "application/xv+xml",
	"yaml": "text/yaml",
	"yang": "application/yang",
	"yin": "application/yin+xml",
	"yml": "text/yaml",
	"zip": "application/zip"
};
function lookup(extn) {
	let tmp = ("" + extn).trim().toLowerCase();
	let idx = tmp.lastIndexOf(".");
	return mimes[!~idx ? tmp : tmp.substring(++idx)];
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Picture.astro
createAstro("https://astro.build");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
	else pictureAttributes.class = scopedStyleClass;
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		return renderTemplate`<source${addAttribute(props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute, "srcset")}${addAttribute(lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Font.astro
createAstro("https://astro.build");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.1.1_@emnapi+core@1._2f9434fbdbc21d04ce10f468f720d100/node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
//#region src/doc/img/srf_t.png
var srf_t_default = new Proxy({
	"src": "/_astro/srf_t.kBW14Y-j.png",
	"width": 877,
	"height": 369,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Vista/NanYe/SrfService/SrfWeb/src/doc/img/srf_t.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Vista/NanYe/SrfService/SrfWeb/src/doc/img/srf_t.png");
	return target[name];
} });
//#endregion
//#region src/doc/img/srf_jmsm.png
var srf_jmsm_default = new Proxy({
	"src": "/_astro/srf_jmsm.CnqHdfOj.png",
	"width": 889,
	"height": 637,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Vista/NanYe/SrfService/SrfWeb/src/doc/img/srf_jmsm.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Vista/NanYe/SrfService/SrfWeb/src/doc/img/srf_jmsm.png");
	return target[name];
} });
//#endregion
//#region src/doc/01快速开始.md
var images = async function(html) {
	const imageSources = {};
	{
		const regex = /* @__PURE__ */ new RegExp("__ASTRO_IMAGE_=\"([^\"]*\\./img/srf_t\\.png[^\"]*)\"", "g");
		let match;
		while ((match = regex.exec(html)) !== null) {
			const imageProps = JSON.parse(match[1].replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
			const { src, ...props } = imageProps;
			imageSources[src + "_" + imageProps.index] = await getImage({
				src: srf_t_default,
				...props
			});
		}
	}
	{
		const regex = /* @__PURE__ */ new RegExp("__ASTRO_IMAGE_=\"([^\"]*\\./img/srf_jmsm\\.png[^\"]*)\"", "g");
		let match;
		while ((match = regex.exec(html)) !== null) {
			const imageProps = JSON.parse(match[1].replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
			const { src, ...props } = imageProps;
			imageSources[src + "_" + imageProps.index] = await getImage({
				src: srf_jmsm_default,
				...props
			});
		}
	}
	return imageSources;
};
async function updateImageReferences(html) {
	const imageSources = await images(html);
	return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
		const srcKey = decodedImagePath.src + "_" + decodedImagePath.index;
		if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
		const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		return spreadAttributes({
			src: imageSources[srcKey].src,
			...attributesWithoutIndex
		});
	});
}
var html = async () => await updateImageReferences("<h1 id=\"南也输入法快速开始\">南也输入法‐快速开始</h1>\n<p>音形输入法、40个编码按键\r\n<img __ASTRO_IMAGE_=\"{&quot;alt&quot;:&quot;srf_ui&quot;,&quot;src&quot;:&quot;./img/srf_t.png&quot;,&quot;index&quot;:0}\"></p>\n<h2 id=\"安装使用\">安装使用</h2>\n<details> <summary>点击展开</summary>\n<ul>\n<li>访问 <a href=\"https://docs.qq.com/space/DQ3pvSVhzcVF5SnFw?mode=wiki_mode\">https://docs.qq.com/space/DQ3pvSVhzcVF5SnFw?mode=wiki_mode</a></li>\n<li>左侧栏，下载 <code>NanYe.Srf_2X.X.XXXX_x64-setup.exe-</code></li>\n<li>重命名，为 <code>.exe</code> 格式，运行。同意服务后，点击 <code>X</code> 关闭窗口</li>\n<li>Win + 空格，空格空格，切换到<code>南也输入法</code></li>\n</ul>\n</details>\n<h2 id=\"快速认识\">快速认识</h2>\n<ul>\n<li>拼音打<code>情绪</code>是 <code>qingxu</code></li>\n<li>本输入法是：<code>qx忄月纟日</code>\n<ul>\n<li><code>qx</code> 是声母，叫<code>音码</code></li>\n<li><code>忄月纟日</code>是<code>情绪</code>两个字的拆解，取每个字的前后字形（部首、笔画），叫<code>形码</code></li>\n<li><code>忄月纟日</code>这4个<code>形码</code>对应键盘上的按键编码</li>\n<li><code>忄月纟日</code>这4个<code>形码</code>不是要完全输入的，一般两三个<code>形码</code>后就上屏了</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>不要急试着打字，继续看<br>\n<strong>不用记住</strong>全部形码（字根），有提示</p>\n</blockquote>\n<h2 id=\"按键与模式\">按键与模式</h2>\n<h3 id=\"音码20个声母\">音码20个声母</h3>\n<ul>\n<li>26个字母中，<code>aevuio</code> 6个不作为声母<code>音码</code>，只有20个声母作为<code>音码</code></li>\n<li>声母按键对应 <code>zh: z</code>、<code>ch: c</code>、<code>sh: s</code></li>\n<li><code>a、e、o</code> 另作对应按键：<code>r</code>。举例（音形编码）：\n<ul>\n<li><code>阿: r 阝可</code>、<code>傲: r 亻攵</code>、<code>按: r 扌女</code></li>\n<li><code>额: r 宀贝</code>、<code>儿: r 儿</code>、<code>恩: r 口心</code></li>\n<li><code>哦: r 口戈</code></li>\n</ul>\n</li>\n</ul>\n<h3 id=\"形码按键40个\">形码按键40个</h3>\n<ul>\n<li>本输入法把字进行字形拆分为<code>形码</code>，有部首、形状、笔画</li>\n<li>一共125个分布安排在40个按键上，一个按键最多不会超过4个<code>形码</code></li>\n<li>40个按键有 <code>A-Z</code> 的26个字母、<code>0~9</code> 的10个和<code>，。？；</code>的4个符号键</li>\n<li><code>AEVUIO</code>6个键是作为<code>形码按键</code>的。也就是除去20个<code>音码按键</code>，有20个<strong>专属</strong>的<code>形码按键</code></li>\n</ul>\n<h3 id=\"形码模式\">形码模式</h3>\n<ul>\n<li><code>模: m 木大</code>这个字打法：\n<ul>\n<li>声母<code>m</code></li>\n<li>形码<code>木</code>对应按键<code>7</code>，直接进入<code>形码模式</code>，此时20个<code>音码按键</code>就是<code>形码按键</code>了</li>\n<li>形码<code>大</code>对应按键<code>M</code>，<code>M</code>键此时不表示<code>声母</code></li>\n</ul>\n</li>\n<li><code>式: s 工弋</code>这个字打法：\n<ul>\n<li>声母<code>s</code></li>\n<li>形码<code>工</code>对应按键<code>Q</code>，此时直接按<code>Q</code>是表示<code>音码按键</code>\n<ul>\n<li>要先按<code>'</code>键或<code>Shift</code>键，进入<code>形码模式</code></li>\n<li>再按下<code>Q</code>键</li>\n</ul>\n</li>\n<li>形码<code>弋</code>对应按键<code>S</code></li>\n</ul>\n</li>\n<li><code>魔法: mf 广厶氵厶</code>这个词的打法：\n<ul>\n<li>音码序列<code>mf</code>，形码序列<code>广厶氵厶</code></li>\n<li>先按下<code>M</code>、<code>F</code>按键</li>\n<li>再按下<code>氵</code>对应按键<code>，</code>，进入<code>形码模式</code></li>\n<li>再按下<code>广</code>对应按键<code>K</code>，形码序列是<strong>跳序的环</strong></li>\n</ul>\n</li>\n<li><code>羊毛: ym羊毛</code>这个词的打法：\n<ul>\n<li>需要手动进入形码模式，使用<code>'</code>键或<code>Shift</code>键</li>\n<li>按键序列<code>YM'YR</code></li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>不要着急试着打其他字，先看完基础</p>\n</blockquote>\n<h3 id=\"打词与打字是不同的\">打词与打字是不同的</h3>\n<ul>\n<li>打词，先输入 <code>N</code> 个声母\n<ul>\n<li>再输入这个词的任意一个形码，进入<code>形码模式</code><strong>筛选</strong></li>\n<li>词的形码序列是<strong>跳序筛选</strong>的，第一个形码是<strong>环的起点</strong></li>\n<li>当形码筛选出唯一候选就立即上屏</li>\n</ul>\n</li>\n<li>打字，先输入一个声母，再输入形码\n<ul>\n<li>字的形码序列<strong>有序输入</strong>的，不能跳过</li>\n<li>必要时需要使用<code>'</code>键或<code>Shift</code>键切换<code>形码模式</code>。</li>\n<li>字的形码最少1个，最多3个，大部分是2个。如：\n<ul>\n<li><code>口: K 口</code></li>\n<li><code>嘿: H 口 灬</code></li>\n<li><code>嗐: H 口 口 宀</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>编码说明：\n<ul>\n<li><code>字</code>由<code>1</code>个音码和<code>1~3</code>个形码组成，形码序列是<strong>有序不可跳过</strong></li>\n<li><code>N字词</code>由<code>N</code>个音码和<code>N~2N</code>个形码组成，每个字的<code>前形</code>、<code>后形</code>组成的，不包含字的<code>选码</code>；形码序列是<strong>跳序筛选</strong>的，第一个形码是<strong>环的起点</strong></li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>详细请看<a href=\"/srf/doc/bmgz\">编码规则</a></p>\n</blockquote>\n<h3 id=\"界面说明\">界面说明</h3>\n<p><img __ASTRO_IMAGE_=\"{&quot;alt&quot;:&quot;srf_jmsm&quot;,&quot;src&quot;:&quot;./img/srf_jmsm.png&quot;,&quot;index&quot;:0}\"></p>\n<h2 id=\"拆字与形码\">拆字与形码</h2>\n<h3 id=\"拆分形码\">拆分形码</h3>\n<ul>\n<li><strong>字</strong>拆分形码关键是<code>二分</code>，连续拆分到小部件。举例：\n<ul>\n<li><code>藻</code>二分<code>艹澡</code>，<code>澡</code>二分<code>氵喿</code>，<code>喿</code>二分<code>品木</code>，<code>品</code>二分<code>口吅</code></li>\n<li>最终<code>藻</code>形码拆分为<code>艹氵口口口木</code></li>\n</ul>\n</li>\n<li>一个字取前后两个形码，分别叫<code>前形</code>、<code>后形</code></li>\n<li>某些字需要第三个形码，叫<code>选形</code>。如<code>辩</code>和<code>辫</code>的选形分别是<code>讠</code>和<code>纟</code></li>\n</ul>\n<h3 id=\"结构拆分\">结构拆分</h3>\n<ul>\n<li>大部分字结构是清晰可辨的，字可以分为12种结构：\r\n<ny-code-line> ⿰ ⿲ ⿱ ⿳ ⿴ ⿵ ⿶ ⿷ ⿸ ⿹ ⿺ ⿻ </ny-code-line></li>\n<li><code>⿰ ⿲ ⿱ ⿳ ⿶</code>按照书写顺序拆分。如：<code>村 树 音 意 凶</code></li>\n<li><code>⿴ ⿵ ⿷ ⿸ ⿹</code>按照外里顺序拆分。如：<code>圆 阀 匿 磨 司</code>\n<!-- 码表待办：卣 ⺊ Zh 口；巨 匚 ZH -->\r\n\n</li>\n<li><code>⿺</code>按照外里顺序拆分，会有书写顺序不同。如：<code>这 建 廷 超 匙 魈 毡</code>；“<code>断</code>”字<code>前形</code>不是<code>米</code>，而是<code>𠃊</code></li>\n<li><code>⿻</code>表示嵌套字或独体字，会以笔画拆分，后文说明</li>\n</ul>\n<h3 id=\"笔画拆分\">笔画拆分</h3>\n<ul>\n<li>字形也有结构不清晰的，将会使用笔画来拆分</li>\n<li>结构不清晰拆分\n<ul>\n<li>todo</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"特殊拆分\">特殊拆分</h3>\n<ul>\n<li>会有一些字特殊拆分，这里简述说明：</li>\n<li>嵌套拆分：<code>坐: 人人土</code>、<code>巫: 工人人</code>、<code>幽: 幺幺山</code>、<code>噩: 王口口口口</code>、<code>爽: 大乂乂乂乂</code>、<code>奭: 大百百</code></li>\n<li>上下切分：<code>出: 山山</code>、<code>里: 田土</code>、<code>果: 田木</code>、<code>单: 丷田十</code>、<code>禺: 田SZSHD</code>、<code>农: 冖𧘇</code>、<code>隺: 冖隹</code></li>\n<li>左右切分: <code>我: PHSH戈</code>、<code>式: 工弋</code>、<code>戊: HP戈</code>、<code>成: HPZ戈</code>、<code>咸: HP一口戈</code>、<code>栽: 土木戈</code></li>\n</ul>\n<!-- - 连戈切分: `我 戊 成` -->\n<blockquote>\n<p>详情查阅<a href=\"/srf/doc/czgz拆字规则\">拆字规则</a>、<a href=\"/srf/doc/tcb特拆表\">特拆表</a></p>\n</blockquote>\n<!-- <details> <summary>点击展开</summary>\r\n  <table border=\"1\" >\r\n  <thead> <tr> <th>规则</th> <th>字</th> <th>拆分序列</th> </tr> </thead>\r\n  <tbody>\r\n    <tr> <td rowspan=\"5\">嵌套拆分</td> <td>坐</td> <td>人人土</td> </tr> \r\n    <tr> <td>幽</td> <td>幺幺山</td> </tr> \r\n    <tr> <td>噩</td> <td>王口口口口</td></tr>\r\n    <tr> <td>爽</td> <td>大乂乂乂乂</td></tr>\r\n    <tr> <td>奭</td> <td>大百百</td></tr>\r\n    <tr> <td rowspan=\"1\">上下切分</td> <td>里</td> <td>人人土</td> </tr> \r\n    <tr> <td rowspan=\"1\">左右切分</td> <td>裁</td> <td>人人土</td> </tr>\r\n    <tr> <td rowspan=\"1\">戊形拆分</td> <td>成</td> <td>人人土</td> </tr>\r\n  </tbody>\r\n  </table>\r\n</details> -->\n<!-- 形码合并 -->\n<h2 id=\"上限\">上限</h2>\n<h3 id=\"按键数\">按键数</h3>\n<ul>\n<li>40键（20+20）。作为程序员，盲打是无负担的</li>\n<li>30键（20+10）。计划中，上排数字键对部分用户有难度</li>\n<li>40键个人认为是最佳上限，离散大、空间大，20个形码切换模式。如果我不做别人也会做，为了上限</li>\n</ul>\n<h3 id=\"组合键\">组合键</h3>\n<ul>\n<li><code>空格</code>组合键上屏候选栏第1个</li>\n<li><code>Shift</code>组合键上屏候选栏第2个</li>\n<li><code>Ctrl</code>组合键进入形码模式并筛选</li>\n</ul>\n<h2 id=\"赞助支持\">赞助支持</h2>\n<ul>\n<li>项目是个人开发者维护。若其在工作或生活中为您提供了便利，需要您的赞助与支持</li>\n<li>目前属于空闲时间开发。您的赞助将会抽出更多精力和时间投入开发、加速进度</li>\n<li>还有更多细节需要完善，还有更多开发计划在进行中\n<ul>\n<li>Bug 修复，使用体验优化，码表、词库的更新</li>\n<li>iOS 端、安卓端支持（漫长计划，如果全职将会更快）</li>\n<li>更多输入方案还在筹备中：30键位、繁体、注音、符号等</li>\n</ul>\n</li>\n</ul>\n<!-- ![skm.png](https://docimg1.docs.qq.com/image/AgAABTXAdCIsGwvoF8hDrrLq_BLJvyCw.png?w=1028&h=543) -->\n");
var frontmatter = {};
var file = "D:/Vista/NanYe/SrfService/SrfWeb/src/doc/01快速开始.md";
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region src/pages/srf.astro
var srf_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Srf,
	file: () => $$file,
	url: () => $$url
});
var $$Srf = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "NyLayout", $$NyLayout, { "title": "南也输入法" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AsideLayout", $$AsideLayout, {}, {
		"aside": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "aside" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<ul class="l0"><li>南也输入法<ul><li>快速开始</li><li>下载安装</li><hr><li>编码规则</li><li>拆字规则</li><li>选码规则</li><li>参考册</li><hr><li>反馈支持</li><li>开发计划</li><hr><li>版本日志</li><li>开发日志</li><li>开发技术</li></ul></li><hr><li>赞助</li><li>关于</li><li>联系我们</li></ul>` })}`,
		"main": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "main" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "KSKS.Content", Content, {})}` })}`
	})}` })}`;
}, "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/srf.astro", void 0);
var $$file = "D:/Vista/NanYe/SrfService/SrfWeb/src/pages/srf.astro";
var $$url = "/srf";
//#endregion
//#region \0virtual:astro:page:src/pages/srf@_@astro
var page = () => srf_exports;
//#endregion
export { page };
