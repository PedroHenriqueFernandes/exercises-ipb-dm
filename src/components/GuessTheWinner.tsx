import { Text } from 'react-native'

interface GuessTheWinnerProps {
    teams: string[]
}

export function GuessTheWinner({teams}: GuessTheWinnerProps){
    const randomIndex = Math.floor(Math.random() * teams.length)
    const winner = teams[randomIndex]
    return(
        <Text>The winner is {winner}</Text>
    )
}