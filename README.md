# Atelier : Créer une application de chat avec Socket.IO, Node.js et React Native

Bienvenue dans cet atelier où nous allons créer ensemble une application de chat en utilisant Socket.IO, Node.js et React Native. Nous allons apprendre à rejoindre des salles, envoyer des messages dans une salle, envoyer des messages à un utilisateur spécifique et diffuser des messages à tous les utilisateurs.

Tout au long de cet atelier, nous allons compléter des fragments de code dans un projet fourni.

## Partie 1 : Préparation du serveur

Tout d'abord, ouvrez le fichier `utils/socketIo.js` dans le dossier du serveur.

1.1 Dans la fonction `SocketIo`, sous la ligne `console.log("new client connected");`, ajoutez une écoute pour l'événement `joinRoom` :

```javascript
socket.on("joinRoom", ({ username, room }) => {
  // Le code sera ajouté ici plus tard
});
```

1.2 Dans la même fonction, ajoutez une écoute pour l'événement `sendMessage` :

```javascript
socket.on("sendMessage", (message, room) => {
  // Le code sera ajouté ici plus tard
});
```

Maintenant, enregistrez le fichier et passons à la prochaine partie.

## Partie 2 : Configuration de l'application React Native

Ouvrez le fichier `contexts/SocketContext.jsx` dans le dossier de l'application.

2.1 Initialisation de la connexion Socket.IO :
Remplacez la ligne `// socket =` par le code suivant :

```javascript
const socket = io("http://localhost:3001"); // Remplacez localhost par l'adresse de votre serveur si nécessaire
```

2.2 Ajoutez `socket` à l'objet passé à `SocketContext.Provider` :

```javascript
<SocketContext.Provider value={{ socket, room, setRoom }}>
```

## Partie 3 : Rejoindre une salle

Ouvrez le fichier `components/Chat.jsx`.

3.1 Remplacez la fonction `joinChat` par le code suivant :

```javascript
const joinChat = () => {
  socket.emit("joinRoom", { username, room });
};
```

## Partie 4 : Envoyer des messages

Toujours dans le fichier `components/Chat.jsx`,

4.1 Remplacez la fonction `sendMessage` par le code suivant :

```javascript
const sendMessage = () => {
  if (message) {
    socket.emit("sendMessage", { username, message, room });
    setMessage("");
  }
};
```

## Partie 5 : Recevoir des messages

5.1 Dans la même fichier `components/Chat.jsx`, ajoutez le code suivant à l'intérieur de `useEffect` :

```javascript
useEffect(() => {
  socket.on("receiveMessage", (message) => {
    setMessages((messages) => [...messages, message]);
  });
}, []);
```

## Partie 6 : Finaliser le serveur

Retournez au fichier `utils/socketIo.js` dans le dossier du serveur.

6.1 Ajoutez le code suivant à l'intérieur de l'écouteur `joinRoom` :

```javascript
socket.join(room);

// broadcast to all clients in the room, except the sender
socket
  .to(room)
  .broadcast.emit("receiveMessage", {
    message: `${username} a rejoint la salle`,
    username: "Serveur",
  });
```

6.2 Ajoutez le code suivant à l'int

érieur de l'écouteur `sendMessage` :

```javascript
io.to(room).emit("receiveMessage", { username, message });
```

Bravo ! Vous avez maintenant une application de chat fonctionnelle.

N'hésitez pas à explorer davantage et à ajouter d'autres fonctionnalités à votre application. Bon codage !
