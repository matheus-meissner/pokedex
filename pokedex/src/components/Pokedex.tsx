import React, { useState } from 'react';
import { PokedexWrapper, PokedexImage, ControlButtonRight, ScreenOverlay, PokedexParentContainer, ControlButtonLeft, SubmitButton, NamePokemon, PokemonImg, Desc, Tipo, ID } from './Styledpokedex';

// Interface para os dados do Pokémon
interface Pokemon {
    name: string;
    id: number;
    types: string[];
    abilities: string[];
    sprite: string;
}

const Pokedex: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [search, setSearch] = useState<string>('');
    const [error, setError] = useState<string>('');

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://web-production-842d.up.railway.app/pokemon/${search}`);
            const data = await response.json();

            if (data.error) {
                setError(data.error);
                setPokemon(null);
            } else {
                setPokemon(data);
                setError('');
            }
        } catch (err) {
            setError("Erro ao buscar Pokémon");
        }
    };

    return (
        <PokedexParentContainer>
            <PokedexWrapper>
                {/* Imagem da Pokédex */}
                <PokedexImage src="/assets/images/pokedex.png" alt="Pokedex" />
                
                {/* Botões de controle */}
                <ControlButtonRight onClick={() => alert('Botão direito clicado')} />
                <ControlButtonLeft onClick={() => alert('Botão esquerdo clicado')} />
                
                {/* Campo de input e botão de busca */}
                <NamePokemon
                    type="text"
                    placeholder=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SubmitButton onClick={fetchPokemon}></SubmitButton>

                {/* Tela da Pokédex (área onde exibimos as informações do Pokémon) */}
                <ScreenOverlay>
                    {error && <p>{error}</p>}
                    {pokemon && (
                        <div className="pokemon-card">
                            <PokemonImg src={pokemon.sprite} alt={pokemon.name} />
                            <Desc>{pokemon.abilities.join(', ')}</Desc>
                            <Tipo>{pokemon.types.join(', ')}</Tipo>
                            <ID>#{pokemon.id}</ID>
                        </div>
                    )}
                </ScreenOverlay>
            </PokedexWrapper>
        </PokedexParentContainer>
    );
};

export default Pokedex;
