const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str.length){
		results = fruit.filter((item)=>{
			return item.toLowerCase().includes(str.toLowerCase())
		});
	}

	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ''; // Clear current suggestions
	if (results.length) {
	  const ul = document.createElement('ul');
	  results.forEach((item) => {
		const li = document.createElement('li');
		li.textContent = item;
		ul.appendChild(li);
	  });
	  suggestions.appendChild(ul);
	  suggestions.style.display = 'block'; // Make sure to show the suggestions
	} else {
	  suggestions.style.display = 'none'; // Hide the suggestions if no results
	}
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		const selectedValue = e.target.textContent;
		input.value = selectedValue;
		suggestions.querySelector('ul').innerHTML = '';
	  }
	
}

function hideSuggestions() {
	setTimeout(() => { // Use setTimeout to delay the hiding, allowing click events to be processed
	  suggestions.style.display = 'none';
	}, 200); // Delay hiding to allow selection of an item
  }
  
  input.addEventListener('blur', hideSuggestions);
  input.addEventListener('focus', () => suggestions.style.display = 'block');

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);