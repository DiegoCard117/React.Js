import React from 'react'

export class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

  componentDidMount(){
    setInterval(
      () => {this.atualizar()}, 2000
    )
  }
  
  atualizar() {
    this.setState(
      {
        dados: { ano: this.state.dados.ano + 1 }
      }
    )
  }

  componentWillUnmount(){}

  render(){
    return(
      <footer>
        <p>Criado por Diego para Recode {this.state.dados.ano}</p>
      </footer>
    )
  }
}

export function Header() {
    return(
      <header>
        <h1>Titulo</h1>
      </header>
    )
  }

export function Section() {
    return(
      <section>
        <p>iplum</p>
      </section>
    )
  }


  //export default Footer