<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"
          ><i class="fas fa-headphones"></i>Games Opinion</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav move-right">
            <a class="nav-link active" aria-current="page" href="/"
              ><i class="fas fa-home"></i>Home</a
            >
            <a class="nav-link" href="/opinions"
              ><i class="fas fa-comments"></i>Opiniones</a
            >
            <a class="nav-link" href="/admin"
              ><i class="fas fa-users-cog"></i>Administracion</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.move-right {
  position: absolute;
  right: 0;
}
.navbar-nav {
  background-color: #212529;
}
</style>
