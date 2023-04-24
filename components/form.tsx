import { FC, FormEvent } from 'react'

export const Form: FC = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const fields = Object.fromEntries(
			new window.FormData(event.target as HTMLFormElement)
		)
		console.log('🚀 ~ fields:', fields)
	}
	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-3'>
				<input
					name='name'
					type='text'
					placeholder='Alex'
					className='border-cyan-500 border-2'
				/>
				<input
					name='lastName'
					type='text'
					placeholder='Last Name'
					className='border-cyan-500 border-2'
				/>
				<input
					name='age'
					type='text'
					placeholder='Age'
					className='border-cyan-500 border-2'
				/>
				<input
					name='country'
					type='text'
					placeholder='Country'
					className='border-cyan-500 border-2'
				/>

				<button type='submit'>Send</button>
			</form>
		</>
	)
}
