import Image from "next/image"

export default function Forms({ forms }: any) {
	return (
		<div className='w-full flex flex-row gap-x-2 mt-4 px-4 pb-4 overflow-auto lg:hidden xl:flex'>
			{forms.map((form: any, index: number) => (
				<div key={index} className='w-full flex flex-col items-center gap-y-4'>
					<div className='w-16 bg-white/30 rounded-md'>
						<Image
							src={form.sprites.front_default}
							alt={form.form_name}
							width={1000}
							height={1000}
							priority={true}
							className='m-auto'
						/>
					</div>
				</div>
			))}
		</div>
	)
}
