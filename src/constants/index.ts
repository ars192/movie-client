import {IAboutItem} from '../types'

export const BASE_URL = 'http://51.250.21.146:10000/'

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/original/'

export const LOCAL_STORAGE_KEYS = {
	colorScheme: 'color-scheme',
	userId: 'user-id',
}

export const ABOUT_ITEMS: IAboutItem[] = [
	{
		title: 'test',
		points: ['1', '2'],
	},
	{
		title: 'test',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi aut consequuntur' +
			' culpa cum dolore expedita, fugit ipsa laborum laudantium\n nostrum, officia quam reiciendis tempore' +
			' velit vero. Alias esse, est id, molestias mollitia, praesentium quaerat qui quos repudiandae tempore velit voluptate. Ad consectetur doloremque esse et fugiat, fugit in inventore, ipsum molestiae perspiciatis quisquam, totam vel voluptatum. Cupiditate eligendi \nest eum laboriosam provident quia, quibusdam! A aperiam consequuntur dignissimos distinctio dolore dolores eligendi eos explicabo fugiat hic illo ipsum iste labore maxime modi, molestiae natus neque nulla officia, provident quasi ratione repudiandae rerum saepe soluta unde voluptatem. Deserunt, perspiciatis?',
	},
	{
		title: 'test',
		points: ['fdasfdsfdsaf', '2'],
		description: 'description',
	},
	{
		title: 'test',
		points: ['1', '2'],
	}, {
		title: 'test',
		points: ['1', '2'],
		big: true,
	},
]
