import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome back</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc tristique dui ligula, et elementum erat convallis sit amet.
            </p>

            <p>
                <a href="/posts" data__link>View recent posts</a>.
            </p>
        `;
    }
}