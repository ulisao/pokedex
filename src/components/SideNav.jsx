import { first151Pokemon, getFullPokedexNumber } from "../utils/index.js"
export default function SideNav() {
  

  return (
    <nav>
      <div className={'header'}>
        <h1 className="text-gradient">Pokedex</h1>
      </div>
      <input />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
          <button className={'nav-card'}>
            <p>{getFullPokedexNumber(pokemonIndex)}</p>
            <p>{pokemon}</p>
          </button>
        )
      })}
    </nav>
  )
}