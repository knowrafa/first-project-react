import ArquivoIndexadoList from "components/ArquivoIndexadoList"
import EstabelecimentoList from "components/EstabelecimentoList"
import Footer from "components/Footer"
import Header from "components/Header"
import UsuarioList from "components/UsuarioList"

function App() {
  return (
    <div>
      <Header />
      <ArquivoIndexadoList />
      <UsuarioList />
      <Footer />
    </div>
  )
}

export default App
