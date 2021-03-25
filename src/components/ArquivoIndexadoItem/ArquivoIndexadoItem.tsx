import React from "react"
import "./ArquivoIndexadoItem.scss"

type Props = Models.ArquivoIndexado

const ArquivoIndexadoItem: React.FC<Props> = ({
  id,
  cpf,
  nome,
  numero_atendimento,
  setor,
  url,
}) => {
  return (
    <li className="default-list-item">
      <div className="row">
        <div className="col">{id}</div>
        <div className="col">{cpf}</div>
        <div className="col">{nome}</div>
        <div className="col">{numero_atendimento}</div>
        <div className="col">{setor.nome}</div>
        <div className="col">{url}</div>
      </div>
    </li>
  )
}

export default React.memo(ArquivoIndexadoItem)
