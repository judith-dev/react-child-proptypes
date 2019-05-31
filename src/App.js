import React, { Component } from 'react';
import './App.css';

class Box extends Component{
  render(){
    return(
        <div style={{border:'1px solid #000', margin:5, padding:5}}>
          {this.props.children}
        </div>
    )
  }
}
class Article extends Component{

  render(){
    const {autor, children,date,title}= this.props
    return(
      <section>
        <h2>{title}</h2>
        <Box>{date}</Box>
        <p><em>Escrito Por {autor}</em></p>
        <article>
          {children}
        </article>
      </section>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h4>Children props</h4>
           <Article
          autor = 'Judith Sanchez'
           date={new Date().toLocaleDateString()}
           title='Articulo sobre la prop children'
           >
           <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children</p>
           <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
           </Article>
           <Article
           autor='Judith Sanchez'
           date={new Date().toLocaleDateString()}
           title='Articulo 2'
           >
           <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children</p>
           <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
           </Article>
           <Article
           autor='Judith Sanchez'
           date={new Date().toLocaleDateString()}
           title='Otro Articulo'
           >
           <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children</p>
           <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
           </Article>
      </div>
    );
  }
}

export default App;
