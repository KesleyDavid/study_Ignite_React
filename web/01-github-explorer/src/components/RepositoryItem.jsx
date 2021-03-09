export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      {/* Pesquisa se repositorio está vazio, se tiver nem pesquisa nome */}
      <p>{repository.description}</p>
      <a href={repository.link}>Acessar repositório</a>
    </li>
  )
}