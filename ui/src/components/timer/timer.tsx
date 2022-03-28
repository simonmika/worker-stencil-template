import { Component, h, State } from "@stencil/core"
import { TimerDisplay } from "../timer-display/timer-display"

@Component({
    tag: "stop-watch"
})
export class StopWatch{
    timer: number = 0

    started: Date = new Date()
    @State() current: Date = new Date()

    private start = () => {
        if (this.timer) return
        this.started = new Date()
        this.current = new Date()
        this.timer = window.setInterval(() => {
            this.current = new Date()
        }, 499)
    }

    private stop = () => {
        window.clearInterval(this.timer)
        this.current = new Date
        this.timer = 0
    }

    render() {
        return(
            <div>
                <timer-display time={(this.current.getTime() - this.started.getTime()) / 1000}></timer-display>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        )
    }
}