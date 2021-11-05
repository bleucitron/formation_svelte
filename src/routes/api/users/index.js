import users from '../../../users.json';

export async function get() {
  return {
    body: users.map(u => u.screen_name),
  };
}
