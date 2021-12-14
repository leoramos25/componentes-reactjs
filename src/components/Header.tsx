import "../styles/header.scss"

interface IHeaderprops {
  selectedGenreTitle: string
}

export function Header({ selectedGenreTitle }: IHeaderprops) {
  return (
    <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
  )
}