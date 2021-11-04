Vue.component('parent-data', {
    template: `
        <div>
            <h1> Acceder a data del componete padre </h1>
            <p> {{ $parent.textoParent }} </p>
        </div>
    `,
})