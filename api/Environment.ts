export interface Environment extends Record<string, undefined | string | DurableObjectNamespace> {
	adminSecret?: string
	COUNTER: DurableObjectNamespace
}
