declare namespace Models {
  interface ArquivoIndexado {
    id: string
    nome: string
    nome_arquivo: string
    cpf: string
    data_nascimento: string
    numero_prontuario?: string
    data_entrada?: string
    data_arquivo?: string
    numero_atendimento?: string
    genero: ArquivoIndexado.Genero
    convenio?: Convenio
    setor?: Setor
    estabelecimento: Estabelecimento
    uti?: string
    url?: string
    tipo_documento: ArquivoIndexado.TipoDocumento
  }
  namespace ArquivoIndexado {
    type Genero = "Masculino" | "Feminino" | "M" | "F" | "n"
    type TipoDocumento = "p" | "d"
  }
}
