import React, { useEffect, useState } from "react"
import "./UsuarioList.scss"
import api from "utils/api"
import UsuarioItem from "components/UsuarioItem"

interface Props {}

const UsuarioList: React.FC<Props> = ({}) => {
  const [usuarios, setUsuarios] = useState([])
  const [carregou, setCarregou] = useState(false)

  async function list() {
    try {
      const response = await api.get("/usuario/")
      setUsuarios(response.data.results)
      setCarregou(true)
    } catch (error) {
      console.error(error)
    } finally {
      setCarregou(true)
    }
  }
  useEffect(() => {
    // UseEffect é para rodar uma função baseado na construção do componente ou na troca de um valor
    // Usar boolean pra verificar se já rodou uma vez
    if (!carregou) {
      list()
      setCarregou(true)
    }
  })

  return (
    <ul className="default-list">
      <li className="default-list-item">
        <div className="row">
          <div className="col">ID</div>
          <div className="col">Username</div>
          <div className="col">Criado Em</div>
          <div className="col">Atualizado Em</div>
        </div>
      </li>
      {usuarios.map((usuario: Models.Usuario) => (
        <UsuarioItem {...usuario} key={usuario.id} />
      ))}
    </ul>
  )
}

export default UsuarioList
