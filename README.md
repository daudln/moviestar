# React Native App with TanStack Query, Zustand, Tamagui & Expo Router

This project is a React Native app using:

* **TanStack Query:** For efficient data fetching and caching.
* **Zustand:** For simple and centralized state management.
* **Tamagui:** For accessible and performant styling.
* **Expo Router:** For declarative routing management.

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. **Install dependencies:**

```bash
cd your-app-name
npm install
```

3. **Start the development server:**

```bash
npm start
```

4. **Scan the QR code or use the provided URL to open the app in your device or simulator.**

## Project Structure

```
your-app-name/
├── src/
│   ├── components/
│   │   └── ...
│   ├── screens/
│   │   └── ...
│   ├── hooks/
│   │   └── ...
│   ├── services/
│   │   └── ...
│   ├── store/
│   │   └── store.js
│   ├── styles/
│   │   └── ...
│   └── App.js
├── package.json
├── expo.config.js
└── README.md
```

* **src/:** Contains all your app's source code.
* **store/:** Defines the global state using Zustand.
* **styles/:** Houses your Tamagui components and styles.
* **App.js:** The main entry point of your app.
* **package.json:** Lists all project dependencies.
* **expo.config.js:** Configures your Expo project settings.

## Using TanStack Query

For data fetching, use TanStack Query hooks like `useQuery` and `useMutation`. Define your queries in appropriate hooks or services.

```js
// hooks/usePosts.js
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('/api/posts');
  return response.json();
};

export const usePosts = () => {
  return useQuery('posts', fetchPosts);
};
```

```js
// screens/PostsScreen.js
import { usePosts } from '../hooks/usePosts';

const PostsScreen = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItem post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
```

## Using Zustand

Store your global state in a single Zustand store. Access and update state using Zustand selectors and actions.

```js
// store/store.js
import create from 'zustand';

export const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));
```

```js
// components/Profile.js
import { useStore } from '../store/store';

const Profile = () => {
  const { user, setUser, isLoggedIn } = useStore();

  // ...

  return (
    <View>
      {isLoggedIn ? (
        <>
          <Text>Welcome, {user.name}</Text>
          <Button onPress={() => setUser(null)}>Logout</Button>
        </>
      ) : (
        <Button onPress={() => setIsLoggedIn(true)}>Login</Button>
      )}
    </View>
  );
};
```

## Using Tamagui

Define your components and styles using Tamagui's declarative syntax. Leverage pre-built themes and components for rapid development.

```jsx
// styles/global.css
import { config } from '@tamagui/core';

config({
  fonts: {
    heading: 'Roboto',
    body: 'Open Sans',
  },
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
});
```