<template>
  <div id="app">
    <p>Toll Management Application</p>
    <hr />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 10px 70px 70px;
  font-size: 14px;
}

.form-input-fields {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #b4b4b4;
  margin: 10px 0 20px 0;
}

.button-common {
  background: rgb(0 82 204);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  cursor: pointer;
  border: none;
}

.button-nav {
  padding: 7px 10px;
  margin: 0 5px;
}

::placeholder {
  color: #b4b4b4;
}

.add-new-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

button:disabled,
button[disabled]{
  /* border: 1px solid #999999; */
  background-color: #cccccc;
  color: #666666;
  cursor:not-allowed
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
