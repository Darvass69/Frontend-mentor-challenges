export default function Favicon({href}: {href: string}): undefined{
	let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.head.appendChild(link);
	}
	link.href = href;
}