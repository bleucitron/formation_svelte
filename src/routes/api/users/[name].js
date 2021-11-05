import users from '../../../users.json';

export async function get({ params }) {
  const { name } = params;

  const user = users.find(u => u.screen_name === name);

  const p = new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

  await p;

  if (user) {
    return {
      body: user,
    };
  }
}
