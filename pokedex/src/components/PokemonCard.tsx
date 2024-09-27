import React, { useState } from 'react';

interface Pokemon {
    name: string;
    id: number;
    types: string[];
    abilities: string[];
    sprite: string;
}

const PokemonCard: React.FC = () => {
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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <input 
            type="text" 
            placeholder="Digite o nome do Pokémon" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
        />
        <button onClick={fetchPokemon}>Buscar</button>

        {error && <p>{error}</p>}
        {pokemon && (
            <div className="pokemon-card">
            <h2>{pokemon.name} (#{pokemon.id})</h2>
            <img src={pokemon.sprite} alt={pokemon.name} />
            <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
            <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
            </div>
        )}
        </div>
    );
}

export default PokemonCard;
