type Pokemon = {
	id: number
	name: string
	abilities: [{ ability: { name: string } }]
	types: [{ type: { name: string } }]
	order: number
	forms: any
	weight: number
	height: number
	moves: any
	held_items: any
	sprites: any
	stats: [{ base_stat: number; stat: { name: string } }]
}
