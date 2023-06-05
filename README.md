# Atelier : Créer une application de chat avec Socket.IO, Node.js et React Native

Bienvenue dans cet atelier où nous allons créer ensemble une application de chat en utilisant Socket.IO, Node.js et React Native. Nous allons apprendre à rejoindre des salles, envoyer des messages dans une salle, envoyer des messages à un utilisateur spécifique et diffuser des messages à tous les utilisateurs.

Tout au long de cet atelier, nous allons compléter des fragments de code dans un projet fourni.

## Partie 0 : Préparation de l'environnement

- installez Node.js et npm : https://nodejs.org/en/download/
- installez React Native : `npm install -g react-native-cli`
- installez expo-cli : `npm install -g expo-cli`
- installez les dépendances du projet dans le dossier app et serveur : `npm install`

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

3.1 Remplacez la fonction `joinChat` avec le code necéssaire pour envoyer un evenement en socket.io :

```javascript
const joinChat = () => {
  // verifier si le username et le room pin on bien été renseigné
  // si oui, envoyer un evenement socket.io "JoinRoom" avec les parametres {username, room}
};
```

## Partie 4 : Envoyer des messages

Toujours dans le fichier `components/Chat.jsx`,

4.1 Remplacez la fonction `sendMessage` par le code necessaire pour envoyer un evenement `sendMessage` en socket.io :

```javascript
const sendMessage = () => {
  // si le message existe, envoyer avec les parametres {username, message}
  // reset le message
};
```

## Partie 5 : Recevoir des messages

5.1 Dans la même fichier `components/Chat.jsx`, ajoutez un useEffect (fonction qui va se lancer à chaque fois que le composant est monté), qui va gerer la reception des messages :

```javascript
useEffect(() => {
  const onRecieveMessage = ({ username, message }) => {
    // ajouter le message à la liste des messages
  };

  socket.on("recieveMessage", onRecieveMessage);

  return () => {
    socket.off("recieveMessage", onRecieveMessage);
  };
}, []);
```

Ceci est un écouteur pour l'événement `recieveMessage` qui est déclenché par le serveur lorsqu'un utilisateur envoie un message. Le listener arrete d'écouter lorsque le composant est démonté.

## Partie 6 : Finaliser le serveur

Retournez au fichier `utils/socketIo.js` dans le dossier du serveur.

6.1 Ajoutez le code suivant à l'intérieur de l'écouteur `joinRoom` :

```javascript
socket.on("JoinRoom", ({ username, room }) => {
  // rejoindre la salle
  // envoyer un message à la salle que l'utilisateur a rejoint
  {
    message: `${username} a rejoint la salle`,
    username: "Serveur",
  };
});
```

6.2 Ajoutez le code suivant à l'intérieur de l'écouteur `sendMessage` :

```javascript
io.to(room).emit("receiveMessage", { username, message });
```

Bravo ! Vous avez maintenant une application de chat fonctionnelle.

## Partie 7 : Diffuser des messages à tous les utilisateurs

7.1 Dans le fichier `utils/socketIo.js`, ajoutez un listener pour l'événement `sendToAll` :

```javascript
socket.on("sendToAll", (message) => {
  // envoyer le message à tous les utilisateurs
});
```

7.2 Dans le fichier `components/Chat.jsx`, ajoutez le code necessaire pour envoyer l'evenement `sendToAll` en socket.io

Vous pouvez maintenant envoyer des messages à tous les utilisateurs en utilisant l'entrée de texte en haut de l'écran.

## Bonus :

Vous pouvez rajouter des fonctionalités a votre application tels que recevoir une notification lorsqu'un utilisateur quitte la salle, ou encore envoyer des images, etc...

N'hésitez pas à explorer davantage et à ajouter d'autres fonctionnalités à votre application. Bon codage !
