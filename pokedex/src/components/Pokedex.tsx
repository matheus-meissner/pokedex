import React, { useState, useEffect } from 'react';
import { PokedexWrapper, PokedexImage, ControlButtonRight, ScreenOverlay, PokedexParentContainer, ControlButtonLeft, ControlButtonUp, ControlButtonDown, SubmitButton, ModalButton, NamePokemon, PokemonImg, Desc, Tipo, ID } from './Styledpokedex';
import InstructionsModal from './InstructionsModal'; // Certifique-se de ajustar o caminho para onde você criou o modal

// Interface para os dados do Pokémon
interface Pokemon {
    name: string;
    id: number;
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
    sprite: {
        front_default: string;
        front_shiny: string;
        back_default: string;
        back_shiny: string;
    };
    height: number;
    weight: number;
    stats: { base_stat: number; stat: { name: string } }[];
}

const Pokedex: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [search, setSearch] = useState<string>(''); 
    const [currentId, setCurrentId] = useState<number>(1); 
    const [error, setError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Estado para controlar o modal

    // Restringindo currentImage para os valores permitidos
    const [currentImage, setCurrentImage] = useState<'front_default' | 'front_shiny' | 'back_shiny' | 'back_default'>('front_default');

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
                    sprite: {
                        front_default: data.sprites.front_default,
                        front_shiny: data.sprites.front_shiny,
                        back_default: data.sprites.back_default,
                        back_shiny: data.sprites.back_shiny,
                    },
                    height: data.height,
                    weight: data.weight,
                    stats: data.stats,
                });
                setCurrentId(data.id);
                setSearch(data.name);
                setError('');
                setCurrentImage('front_default'); // Sempre começa em front_default
            }
        } catch (err) {
            setError("Erro ao buscar Pokémon");
        }
    };

    useEffect(() => {
        fetchPokemon(currentId);
    }, [currentId]);

    // Funções para alternar a imagem com base no estado atual
    const handleToggleUp = () => {
        if (!pokemon) return;

        if (currentImage === 'front_default') {
            setCurrentImage('front_shiny');
        } else if (currentImage === 'front_shiny') {
            setCurrentImage('back_shiny');
        } else if (currentImage === 'back_shiny') {
            setCurrentImage('back_default');
        } else if (currentImage === 'back_default') {
            setCurrentImage('front_default');
        }
    };

    const handleToggleDown = () => {
        if (!pokemon) return;

        if (currentImage === 'back_shiny') {
            setCurrentImage('front_shiny');
        } else if (currentImage === 'front_shiny') {
            setCurrentImage('front_default');
        } else if (currentImage === 'front_default') {
            setCurrentImage('back_default');
        } else if (currentImage === 'back_default') {
            setCurrentImage('back_shiny');
        }
    };

    const handleNextPokemon = () => {
        setCurrentId((prevId) => prevId + 1);
    };

    const handlePreviousPokemon = () => {
        if (currentId > 1) {
            setCurrentId((prevId) => prevId - 1);
        }
    };

    return (
        <PokedexParentContainer>
            <PokedexWrapper>
                <PokedexImage src="/assets/images/pokedex.png" alt="Pokedex" />
                
                {/* Botões de controle */}
                <ModalButton onClick={() => setIsModalOpen(true)}></ModalButton> {/* Abre o modal */}
                <ControlButtonRight onClick={handleNextPokemon}></ControlButtonRight>
                <ControlButtonLeft onClick={handlePreviousPokemon}></ControlButtonLeft>
                <ControlButtonUp onClick={handleToggleUp}></ControlButtonUp> {/* Alterna para a próxima imagem */}
                <ControlButtonDown onClick={handleToggleDown}></ControlButtonDown> {/* Alterna para a imagem anterior */}
                
                {/* Campo de input e botão de busca */}
                <NamePokemon
                    type="text"
                    placeholder=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SubmitButton onClick={() => fetchPokemon(search)}></SubmitButton>

                {/* Tela da Pokédex */}
                <ScreenOverlay>
                    {error && <p>{error}</p>}
                    {pokemon && (
                        <div className="pokemon-card">
                            <PokemonImg
                              src={pokemon.sprite[currentImage]} // Exibe a imagem com base no estado atual
                              alt={pokemon.name}
                            />
                            <Desc>
                              <div>
                                <strong>Height</strong>
                                <span>{(pokemon.height / 10).toFixed(2)} m</span>
                              </div>
                              <div>
                                <strong>Weight</strong>
                                <span>
                                  {(pokemon.weight / 10) % 1 === 0 
                                    ? (pokemon.weight / 10).toFixed(0)
                                    : (pokemon.weight / 10).toFixed(1)} kg
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

            {/* Modal de Instruções */}
            <InstructionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </PokedexParentContainer>
    );
};

export default Pokedex;
