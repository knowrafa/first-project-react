import React, { useEffect, useState } from "react"
import "./UsuarioItem.scss"
import api from "utils/api"

type Props = Models.Usuario

const UsuarioItem: React.FC<Props> = ({
  id,
  username,
  criado_em,
  atualizado_em,
}) => {
  const [usuario, setUsuario] = useState([])
  const [carregou, setCarregou] = useState(false)

  async function list() {
    try {
      const response = await api.get("/user/")
      setUsuario(response.data.results)
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
    <li className="default-list-item">
      <div className="row">
        <div className="col">{id}</div>
        <div className="col">{username}</div>
        <div className="col">{criado_em}</div>
        <div className="col">{atualizado_em}</div>
      </div>
    </li>
  )
}

export default React.memo(UsuarioItem)
