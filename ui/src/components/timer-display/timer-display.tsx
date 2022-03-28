import { Component, Prop, h } from "@stencil/core"

@Component({
    tag: "timer-display"
})
export class TimerDisplay {
    @Prop() time!: number

    render() {
        return (
            <div>{ Math.floor(this.time / 3600) }:{Math.floor((this.time % 3600) / 60)}:{Math.floor((this.time % 60))}</div>
        )
    }
}