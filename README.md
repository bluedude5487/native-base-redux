Todo app described in [Redux Basic Tutorial](https://redux.js.org/basics/basic-tutorial) implemented using `native-base` for UI.

#Setup
```
expo init native-base-redux --template blank@sdk-32 --yarn
cd native-base-redux
yarn add native-base --save
yarn add @expo/vector-icons --save
yarn start
```

#Step 1
Define actions in `actions.js` as described in [this section](https://redux.js.org/basics/actions).

We need to import `redux`:
```
yarn add redux --save
```
#Step 2
Define reducers in `reducers.js` as described in [this section](https://redux.js.org/basics/reducers).

## Shape of State
```
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
```

#Step 3
Setup redux store.
```
yarn add redux --save
```
