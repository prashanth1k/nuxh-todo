<template>
  <div>
    <header class="container">
      <nav>
        <NuxtLink>
          <h4>Nuxh</h4>
        </NuxtLink>
        <ul>
          <li>
            <NuxtLink href="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/about">
              About
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container">
      <!-- <ImageGallery />
    <RedirectsPanel />
    <MessagesPanel /> -->
      <TodoList />
    </main>
  </div>
</template>
