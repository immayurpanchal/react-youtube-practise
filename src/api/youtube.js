import axios from 'axios';

export const KEY = 'AIzaSyCWIHCLZOc8rgGf-lz0h6Vs03Fj19ieg4E';

export default axios.create({
	baseURL : 'https://www.googleapis.com/youtube/v3'
});
