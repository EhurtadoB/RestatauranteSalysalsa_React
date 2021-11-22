import React, { Component } from "react";

class Datos2 extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  fonSubmit(e) {
    e.preventDefault();
    var title = this.title;
    alert(title);
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde consequuntur suscipit omnis adipisci consequatur voluptas, ut officia vero nemo iusto mollitia blanditiis possimus, reprehenderit esse sapiente eveniet cum debitis voluptates.</p>
          <form className="form">
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
            <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
          </form>
          <button type="button" onClick={this.onSubmit} className="btn">Save</button>
        </>
      );
    });
  }
}

export default Datos2;