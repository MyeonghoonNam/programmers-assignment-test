import { Header, ContentTitle, ContentCards } from '../components/index.js';
import { store } from '../store/store.js';
import { getPersonInfo } from '../api/fetchPersonInfo.js';

const HomePage = () => {
	const COMPONENTS = {
		Header: Header(),
		ContentTitle: ContentTitle(),
		// ContentCards: ContentCards(),
	};

	// const fetchData = async () => {
	// 	const personInfo = await getPersonInfo();
	// 	console.log(personInfo);
	// };

	const render = (target) => {
		const $container = target.cloneNode();

		const $header = COMPONENTS.Header();

		const $content = document.createElement('main');
		$content.setAttribute('id', 'page_content');

		const $contentTitle = COMPONENTS.ContentTitle('Great People');
		// const $contentCards = COMPONENTS.ContentCards();

		$content.appendChild($contentTitle);
		// $content.appendChild($contentCards);

		$container.appendChild($header);
		$container.appendChild($content);
		// $container.innerHTML = `
		//   <header>
		//     <div class="header header_left">
		//       <span class="menu_name" id="menu_home">HOME</span>
		//     </div>
		//     <div class="header header_right">
		//       <div class="menu_name" id="menu_signup">SIGNUP</div>
		//     </div>
		//   </header>
		//   <main id="page_content">
		//     <div class="content_title">
		//       <h1> CardView </h1>
		//     </div>
		//     <div id="cards_container">
		//       <div idx="1" class="card">
		//         <div class="card_plane card_plane--front">Heedo</div>
		//         <div class="card_plane card_plane--back">ESTJ</div>
		//       </div>
		//       <div idx="2" class="card">
		//         <div class="card_plane card_plane--front">Kevin</div>
		//         <div class="card_plane card_plane--back">INTJ</div>
		//       </div>
		//       <div idx="3" class="card">
		//         <div class="card_plane card_plane--front">Dalmi</div>
		//         <div class="card_plane card_plane--back">INFJ</div>
		//       </div>
		//       <div idx="4" class="card">
		//         <div class="card_plane card_plane--front">Buzz</div>
		//         <div class="card_plane card_plane--back">INFP</div>
		//       </div>
		//       <div idx="5" class="card">
		//         <div class="card_plane card_plane--front">Edwin</div>
		//         <div class="card_plane card_plane--back">ISTJ</div>
		//       </div>
		//       <div idx="6" class="card">
		//         <div class="card_plane card_plane--front">Whale</div>
		//         <div class="card_plane card_plane--back">INTP</div>
		//       </div>
		//       <div idx="7" class="card">
		//         <div class="card_plane card_plane--front">Junho</div>
		//         <div class="card_plane card_plane--back">ENFJ</div>
		//       </div>
		//       <div idx="8" class="card">
		//         <div class="card_plane card_plane--front">Yumi</div>
		//         <div class="card_plane card_plane--back">ISFP</div>
		//       </div>
		//       <div idx="9" class="card">
		//         <div class="card_plane card_plane--front">Tom</div>
		//         <div class="card_plane card_plane--back">INTP</div>
		//       </div>
		//       <div idx="10" class="card">
		//         <div class="card_plane card_plane--front">Barbie</div>
		//         <div class="card_plane card_plane--back">INTJ</div>
		//       </div>
		//     </div>
		//   </main>
		// `;

		return $container;
	};

	return (target) => {
		const $homePage = render(target);
		return $homePage;
	};
};

export default HomePage;
