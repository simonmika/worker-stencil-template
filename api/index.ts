import { Context } from "./Context"
import { Counter } from "./counter/counter"
import { Environment } from "./Environment"

import "./item"
import "./version"

export { Counter }

export default {
	async fetch(request: Request, environment: Environment) {
		return await Context.handle(request, environment)
	},
}
