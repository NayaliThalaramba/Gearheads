const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const userFilePath = path.join(__dirname, 'data', 'users.json');

// Helper to read user data
function getUsers() {
  if (!fs.existsSync(userFilePath)) return [];
  const data = fs.readFileSync(userFilePath);
  return JSON.parse(data);
}

// Helper to save user data
function saveUsers(users) {
  fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
}

// Register a new user
async function registerUser(username, password) {
  const users = getUsers();
  const existing = users.find(u => u.username === username);
  if (existing) return { error: 'User already exists' };

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  saveUsers(users);
  return { success: true };
}

// Authenticate user
async function loginUser(username, password) {
  const users = getUsers();
  const user = users.find(u => u.username === username);
  if (!user) return { error: 'User not found' };

  const match = await bcrypt.compare(password, user.password);
  return match ? { success: true } : { error: 'Incorrect password' };
}

module.exports = { registerUser, loginUser };
