interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  },
}

export function RepositoryItem({ repository }:RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      {/* Pesquisa se repositorio está vazio, se tiver nem pesquisa nome */}
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  )
}