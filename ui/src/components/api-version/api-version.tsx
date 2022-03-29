import { Component, h, State } from "@stencil/core";

@Component({
  tag: "api-version",
  styleUrl: "api-version.css",
})
export class ApiVersion {
  @State() version?: string;
  @State() error?: string;

  async connectedCallback() {
    try {
      const response = await window.fetch("http://localhost:8787/api/version");
      response.ok ? (this.version = (await response.json()).version) : (this.error = `${response.status} ${response.statusText}`);
    } catch (error) {
      this.error = error.message;
    }
  }
  render() {
    return <div>{this.version ? `api version: ${this.version}` : this.error}</div>;
  }
}
