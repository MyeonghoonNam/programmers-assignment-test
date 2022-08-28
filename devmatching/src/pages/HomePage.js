import { Header, ContentTitle, ContentCards } from '../components/index.js';
import { store } from '../store/store.js';
import { getPersonalInfo } from '../api/fetchPersonalInfo.js';

const HomePage = () => {
	const COMPONENTS = {
		Header: Header(),
		ContentTitle: ContentTitle(),
		ContentCards: ContentCards(),
	};

	const fetchData = async () => {
		const data = await getPersonalInfo();

		const personalInfo = data.map((oldData, index) => {
			const newData = {
				idx: index,
				...oldData,
			};

			return newData;
		});

		store.setState({ personalInfo });
	};

	const render = ({ target, personalInfo }) => {
		const $container = target.cloneNode();

		const $header = COMPONENTS.Header();

		const $content = document.createElement('main');
		$content.setAttribute('id', 'page_content');

		const $contentTitle = COMPONENTS.ContentTitle('Great People');
		const $contentCards = COMPONENTS.ContentCards(personalInfo);

		$content.appendChild($contentTitle);
		$content.appendChild($contentCards);

		$container.appendChild($header);
		$container.appendChild($content);

		return $container;
	};

	return async (target) => {
		if (store.isEmpty()) {
			await fetchData();
		}

		const personalInfo = store.getState();
		const $homePage = render({ target, personalInfo });

		return $homePage;
	};
};

export default HomePage;
