<template>
    <div class="card shadow-sm">
        <img :src="product.image" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>

            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Ver mas</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Agregar</button>
                </div>
                <small class="text-muted">$ {{ product.price }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProducItem',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>