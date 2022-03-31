import * as http from "cloudly-http"
import { Context } from "../Context"
import { Environment } from "../Environment"
import { router } from "../router"

export class Counter {
	constructor(public state: DurableObjectState, public readonly env: Environment) {}
	async fetch(request: Request) {
		let count: number = (await this.state.storage.get("count")) || 0
		await this.state.storage.put("count", ++count)
		return new Response(`${count}`)
	}
}

async function fetch(request: http.Request, context: Context): Promise<http.Response.Like | any> {
	const object = context.environment.COUNTER.get(context.environment.COUNTER.idFromName(Counter.name))
	const result = await object.fetch(new Request(request.url.toString())).then(data => data.text())
	return result
}
router.add("GET", "/api/counter/", fetch)
