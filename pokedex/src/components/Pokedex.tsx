import React, { useState, useEffect } from 'react';
import { PokedexWrapper, PokedexImage, ControlButtonRight, ScreenOverlay, PokedexParentContainer, ControlButtonLeft, SubmitButton, NamePokemon, PokemonImg, Desc, Tipo, ID } from './Styledpokedex';

// Interface para os dados do Pokémon
interface Pokemon {
    name: string;
    id: number;
    types: { type: { name: string } }[]; // Atualizando para refletir a estrutura correta da API
    abilities: { ability: { name: string } }[];
    sprite: string;
    height: number; // Altura do Pokémon
    weight: number; // Peso do Pokémon
    stats: { base_stat: number; stat: { name: string } }[]; // Estatísticas do Pokémon
}

const Pokedex: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [search, setSearch] = useState<string>(''); // Para pesquisa por nome
    const [currentId, setCurrentId] = useState<number>(1); // Estado para o ID atual
    const [error, setError] = useState<string>('');

    // Função para buscar Pokémon por ID ou nome
    const fetchPokemon = async (idOrName: string | number) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
            const data = await response.json();

            if (data.error) {
                setError(data.error);
                setPokemon(null);
            } else {
                setPokemon({
                    name: data.name,
                    id: data.id,
                    types: data.types,
                    abilities: data.abilities,
                    sprite: data.sprites.front_default,
                    height: data.height, // Adicionando altura
                    weight: data.weight, // Adicionando peso
                    stats: data.stats,   // Adicionando estatísticas
                });
                setCurrentId(data.id); // Atualiza o ID atual com o ID do Pokémon encontrado
                setSearch(data.name); // Atualiza o campo de input com o nome do Pokémon
                setError('');
            }
        } catch (err) {
            setError("Erro ao buscar Pokémon");
        }
    };

    // Efeito para buscar Pokémon quando o ID atual é alterado
    useEffect(() => {
        fetchPokemon(currentId);
    }, [currentId]);

    // Funções para mudar o ID do Pokémon ao clicar nos botões
    const handleNextPokemon = () => {
        setCurrentId((prevId) => prevId + 1); // Incrementa o ID
    };

    const handlePreviousPokemon = () => {
        if (currentId > 1) {
            setCurrentId((prevId) => prevId - 1); // Decrementa o ID
        }
    };

    return (
        <PokedexParentContainer>
            <PokedexWrapper>
                {/* Imagem da Pokédex */}
                <PokedexImage src="/assets/images/pokedex.png" alt="Pokedex" />
                
                {/* Botões de controle */}
                <ControlButtonRight onClick={handleNextPokemon}></ControlButtonRight>
                <ControlButtonLeft onClick={handlePreviousPokemon}></ControlButtonLeft>
                
                {/* Campo de input e botão de busca */}
                <NamePokemon
                    type="text"
                    placeholder=""
                    value={search} // O valor é atualizado automaticamente
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SubmitButton onClick={() => fetchPokemon(search)}></SubmitButton>

                {/* Tela da Pokédex (área onde exibimos as informações do Pokémon) */}
                <ScreenOverlay>
                    {error && <p>{error}</p>}
                    {pokemon && (
                        <div className="pokemon-card">
                            <PokemonImg src={pokemon.sprite} alt={pokemon.name} />
                            <Desc>
                              <div>
                                <strong>Height</strong>
                                <span>{(pokemon.height / 10).toFixed(2)} m</span> {/* Converte decímetros para metros com uma casa decimal */}
                              </div>
                              <div>
                                <strong>Weight</strong>
                                <span>
                                  {(pokemon.weight / 10) % 1 === 0 
                                    ? (pokemon.weight / 10).toFixed(0) // Se for inteiro, nenhuma casa decimal
                                    : (pokemon.weight / 10).toFixed(1)} kg {/* Se for float, exibe uma casa decimal */}
                                </span>
                              </div>
                              <div>
                                <strong>HP</strong>
                                <span>{pokemon.stats.find(stat => stat.stat.name === 'hp')?.base_stat}</span>
                              </div>
                            </Desc>
                            <Tipo typeCount={pokemon.types.length}>
                              {pokemon.types.slice(0, 2).map((type) => type.type.name).join(', ')}
                            </Tipo>
                            <ID id={pokemon.id}>#{pokemon.id}</ID>
                        </div>
                    )}
                </ScreenOverlay>
            </PokedexWrapper>
        </PokedexParentContainer>
    );
};

export default Pokedex;
