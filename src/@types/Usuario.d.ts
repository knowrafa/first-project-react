declare namespace Models {
  interface Usuario {
    id: string
    username: string
    nickname?: string
    estabelecimento?: Estabelecimento
    convenios?: Convenio
    email?: string
    criado_em?: string
    atualizado_em?: string
  }
  namespace Usuario {
    type Simples = Pick<Usuario, "id" | "username">
  }
}
