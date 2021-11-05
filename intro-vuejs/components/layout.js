Vue.component('layout', {
    template: `
        <div>
            <h1> Componente con slots </h1>
            <header class="header">
                <slot name="header"> </slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer class="footer">
                <slot name="footer"> </slot>
            </footer>
        </div>
    `,
})