type Pokemon = {
  id: number
  name: string
  abilities: [{ ability: { name: string } }]
  types: [{ type: { name: string } }]
  order: number
  weight: number
  height: number
  sprites: any
  stats: [{ base_stat: number; stat: { name: string } }]
}
