import React, { useEffect, useState } from "react"
import "./ArquivoIndexadoList.scss"
import api from "utils/api"
import ArquivoIndexadoItem from "components/ArquivoIndexadoItem"

interface Props {}
const ArquivoIndexadoList: React.FC<Props> = () => {
  const [arquivos, setArquivos] = useState([])
  const [carregou, setCarregou] = useState(false)

  async function list() {
    try {
      const response = await api.get("/arquivo_indexado/")
      setArquivos(response.data.results)
    } catch (error) {
      console.error(error)
    } finally{
      setCarregou(true)
    }
  }
  useEffect(() => {
    // Usar boolean pra verificar se já rodou uma vez
    if (!carregou) {
      list()
      setCarregou(true)
    }
  })
  return (
    <ul className="default-list">
          <li>
        <div className="row">
          <div className="col">id</div>
          <div className="col">cpf</div>
          <div className="col">nome</div>
          <div className="col">numero_atendimento</div>
          <div className="col">setor</div>
          <div className="col">url</div>
        </div>
      </li>
      {arquivos.map((arquivo: Models.ArquivoIndexado) => (
        <ArquivoIndexadoItem {...arquivo} key={arquivo.id} />
      ))}
    </ul>
  )
}
export default ArquivoIndexadoList
