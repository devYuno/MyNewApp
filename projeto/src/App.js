import './App.css';

const Botao = (props) => {
  return (
    <div className={`botao ${props.tipo} ${props.cor}`}>{props.digito}</div>
  )
}

function App() {

  return (
    <div className="App">

      <div className='calculadora'>
        <div className='visor'>
          <p className='textVisor'>0.75</p>
        </div>
        <div className='teclado'>

          <div className='linhaBotoes'>
            <button className='botao ac cinza'>AC</button>
            <button className='botao comum laranja'>/</button>
          </div>

          <div className='linhaBotoes'>
            <button className='botao comum cinza'>7</button>
            <button className='botao comum cinza'>8</button>
            <button className='botao comum cinza'>9</button>
            <button className='botao comum laranja'>*</button>
          </div>

          <div className='linhaBotoes'>
            <button className='botao comum cinza'>4</button>
            <button className='botao comum cinza'>5</button>
            <button className='botao comum cinza'>6</button>
            <button className='botao comum laranja'>-</button>
          </div>

          <div className='linhaBotoes'>
            <button className='botao comum cinza'>1</button>
            <button className='botao comum cinza'>2</button>
            <button className='botao comum cinza'>3</button>
            <button className='botao comum laranja'>+</button>
          </div>

          <div className='linhaBotoes'>
            <Botao tipo='zero' cor='cinza' digito='0'/>
            <Botao tipo='comum' cor='cinza' digito='.'/>
            <Botao tipo='comum' cor='laranja' digito='='/>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
