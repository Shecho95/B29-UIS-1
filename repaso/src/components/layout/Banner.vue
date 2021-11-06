<template>
    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">{{ textTitle }}</h1>
                <p class="lead text-muted"> {{ subText }} </p>
                <p>
                    <a v-if="btn1" :href="btn1.url" class="btn btn-primary my-2">{{ btn1.text }}</a>
                    <a v-if="btn2" :href="btn2.url" class="btn btn-secondary my-2">{{ btn2.text }}</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        textTitle: {
            type: String,
            required: true
        },
        subText: {
            type: String,
            required: false
        },
        btn1: {
            type: Object,
            required: false
        },
        btn2: {
            type: Object,
            required: false
        }
    }
}
</script>