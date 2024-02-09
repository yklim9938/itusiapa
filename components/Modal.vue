<template>
    <Teleport to="body">
        <div class="fmodal-overlay" :class="{show: show}">
            <div class="fmodal-wrapper"  @click="closeModal" ref="wrapper">
                <div 
                    class="fmodal-content bg-white relative p-4 sm:p-5 rounded-t-[5px] md:rounded-b-[5px] w-full shadow-lg"
                    :class="containerClass"
                    :style="{maxWidth: `${maxWidth}px`}"
                >
                    <slot />

                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
const {disableScroll, enableScroll} = useBodyScroll()
const props = defineProps({
    show: Boolean,
    clickClose: Boolean,
    containerClass: String,
    maxWidth: {
        type: Number,
        default: 500
    }
})

const emit = defineEmits(['close'])
const wrapper = ref()
const closeModal = (e) => {
    if (props.clickClose && e.target == wrapper.value) {
        emit('close')
    }
}

const detectClose = (e) => {
    if (e.key == 'Escape') {
        emit('close')
    }
}


watch(() => props.show, (isShown) => {
    if (isShown) {
        document.addEventListener('keyup', detectClose)
        disableScroll()
    }
    else  {
        document.removeEventListener('keyup', detectClose)
        enableScroll()
    }
})

onBeforeUnmount(() => {
    if (props.show) {
        document.removeEventListener('keyup', detectClose)
        enableScroll()
    }
})
</script>


<style scoped>
.fmodal-overlay {
    height: var(--window-height);
    position: fixed;
    background-color: rgba(0,0,0,0.3);
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
    backdrop-filter: blur(5px);
}

.fmodal-wrapper {
    position: relative;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}

.fmodal-overlay.show {
    visibility: visible;
    opacity: 1;
}

.fmodal-content {
    overflow-y: auto;
    max-height: 100%;
    transition: all 0.1s;
    transform: translateY(70px);
    background-color: white;
    position: relative;
    padding: 16px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);;
}

.fmodal-overlay.show .fmodal-content {
    transform: translateY(0);
}

@media screen and (min-width: 640px) {
    .fmodal-content {
        padding: 20px;
    }
}

@media screen and (min-width: 768px) {
    .fmodal-content {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}

@media screen and (max-width: 767px) {
    .fmodal-wrapper {
        padding: 0;
        align-items: flex-end;
    }

    .fmodal-content {
        max-width: 100% !important;
    }
}
</style>