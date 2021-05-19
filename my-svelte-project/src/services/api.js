async function getUsers() {
    const res = await fetch(`http://localhost:3000/messages`);
    const messages = await res.json();

    if (res.ok) {
      return messages;
    } else {
      throw new Error(users);
    }
  }
