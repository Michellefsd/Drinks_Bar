import './App.css'
import img from '../public/img/cottonbro.jpg'

function App() {


  return (
    <>
      <nav className='nav'>
        <a href="">Sobre Nós</a>
        <a href="">Servicos</a>
        <a href=""></a>
        <a href="">Contato</a>
      </nav>
      <figure className='hero'>
        <div className='back-img-hero'></div>
        <img className='img-hero' src={img} alt="Gente brindando" width="" height="" title='O brindis que toda festa devería ter'/>
        <figcaption className='figcaption'>Cottonbro</figcaption>
      </figure>
      <h1>Tenha a sua experiencia perfeita com nós.</h1>
      <p>Nao acredita que nessas festas vamos deixar voce mais feliz que nunca? Com o nosso prestigioso servico de mais de 12 anos na ilha</p>
    </>
  )
}

export default App
