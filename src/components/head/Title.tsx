export default function Title({children}: {children: string}): undefined{
	document.title = children;
}