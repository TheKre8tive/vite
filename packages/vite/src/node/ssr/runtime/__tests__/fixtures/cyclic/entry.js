export async function setupCyclic() {
	const mod = await import("./entry-cyclic.js");
	await mod.default();
}

export async function importAction(id) {
	return await import(/* @vite-ignore */ id);
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=entry.js
