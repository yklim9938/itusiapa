<template>
    <div>
        <div v-if="!scriptReady" :style="containerStyle" class="skeleton"></div>
        <div v-if="scriptReady" :id="id" :style="containerStyle" class="qr_canvas"></div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const {$loadScript} = useNuxtApp()
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 96
    },
    content: {
        type: String,
        required: true
    }
})

const containerStyle = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`
    }
})

const scriptReady = ref(false)

let qrcode = null
const init = async () => {
    const scriptLoaded = await $loadScript(`/js/qrcode.min.js`, window.QRCode)
    if (!scriptLoaded) return

    scriptReady.value = true
    setTimeout(() => {
        qrcode = new window.QRCode(props.id, {
            width: props.size,
            height: props.size,
        })
        generateQR()
    }, 750) // need to wait for page transition (page out and in)
}

onMounted(() => {
    init()
})

const generateQR = () => {
    if (!qrcode || !props.content) return
    qrcode.makeCode(props.content)
}
watch(() => props.content, () => {
    generateQR()
})

onBeforeUnmount(() => {
    qrcode = null
})
</script>

<style scoped>
.qr_canvas canvas {
	max-width: 100%;
    margin: auto;
}
</style>