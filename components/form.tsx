import { FC, FormEvent, useRef } from 'react'

export const Form: FC = () => {
	const formRef = useRef<HTMLFormElement>(null)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const fields = Object.fromEntries(
			new window.FormData(event.target as HTMLFormElement)
		)
		// console.log('🚀 ~ fields:', fields)
		// console.log('🚀 ~ formRef:', formRef)
	}
	return (
		<>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='flex flex-col gap-3'
			>
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
