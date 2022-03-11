import users from './users.json';

export function getProfile(name) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			if (name in users) {
				res(users[name]);
			} else {
				rej(`${name} n'existe pas`);
			}
		}, 200);
	});
}
