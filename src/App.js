import React from 'react';
import Menu from './components/Menu'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import BannerMain from './components/BannerMain'
import dadosIniciais from './data/dados_iniciais.json'



function App() {
  return ( 
    // JSX -> Java Script XML
    <div style = {{ background: "#141414" }}>
      <Menu />

      <BannerMain 
      videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
      url = {dadosIniciais.categorias[0].videos[0].url}
      videoDescription = {"Alguma coisa aqui"} > 
      </BannerMain>

      <Carousel
      ignoreFirstVideo
      category = {dadosIniciais.categorias[0]}>
      </Carousel>

      <Carousel
      category = {dadosIniciais.categorias[1]}>
      </Carousel>

      <Carousel
      category = {dadosIniciais.categorias[2]}>
      </Carousel>

      <Footer/>
    </div >
  );
}

export default App;