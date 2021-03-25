declare namespace Models {
  interface Estabelecimento {
    id: string;
    nome: string;
    caminho_pasta?: string;
    criado_em?: string;
    atualizado_em?: string;
  }
  namespace Estabelecimento {
    type Simples = Pick<
      Estabelecimento,
      "nome" | "criado_em" | "atualizado_em"
    >;
  }
}
