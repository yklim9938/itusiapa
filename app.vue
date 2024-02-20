<template>
	<div class="main-page">
		<div style="text-align: center;">
			<h1 class="title">Itu Siapa</h1>
			<h2 class="description">WhatsApp anyone without adding into contacts.</h2>
		</div>
		<div class="form-container">
			<Panda />
			<div class="instruction">Enter Phone Number</div>
			<input type="text" v-model="phoneNumber" class="phone-input" pattern="[0-9]*" inputmode="numeric" autocomplete="off" placeholder="e.g. 60196669999">
			<div class="btn-container">
				<button class="btn wa-btn" @click="sendMessage">
					<span style="line-height: 0;">👉</span><span>WhatsApp Now</span>
				</button>
				<button class="btn qr-btn" @click="showQR">
					<span style="line-height: 0;">👉</span><span>Show QR Code</span>
				</button>
			</div>
		</div>
		<div class="made-by">Made by <a href="https://github.com/yklim9938" target="_blank">YK Lim</a></div>
		<Modal :show="showQRModal" clickClose @close="showQRModal=false">
			<button class="qr-close-btn" @click="showQRModal=false">&times;</button>
			<div style="width:196px;margin:auto;margin-top: 24px;">
				<QRCode v-if="showQRModal" :content="qrContent" id="qrCode" :size="196" />
			</div>
			<div style="margin-top: 24px;text-align: center;">
				<div>Scan the QR code with normal scanner.</div>
				<!-- <div style="font-size: 14px;margin-top: 12px;"><b>NOT WHATSAPP SCANNER.</b></div> -->
			</div>
		</Modal>
	</div>
</template>

<script setup>
useSeoMeta({
  title: 'Itu Siapa - WhatsApp anyone without adding into contacts',
  ogTitle: 'Itu Siapa - WhatsApp anyone without adding into contacts',
  description: 'Send message to anyone through WhatsApp. No download, no registration required.',
  ogDescription: 'Send message to anyone through WhatsApp. No download, no registration required.',
  ogImage: 'https://itusiapa.web.app/card.png',
  twitterCard: 'summary_large_image',
})

let sizeTimer = null;
const syncHeight = () => {
	if (sizeTimer) {
		clearTimeout(sizeTimer);
	}
	sizeTimer = setTimeout(() => {
		document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
		clearTimeout(sizeTimer);
		sizeTimer = null;
	}, 200)
}
onMounted(() => {
	window.addEventListener('resize', syncHeight);
	syncHeight()
})

const {$alert} = useNuxtApp()
const phoneNumber = ref('')
const sendMessage = () => {
	let targetNumber = numberCheck()
	if (!targetNumber) {
		return
	}
	window.open(`https://api.whatsapp.com/send?phone=${targetNumber}`)
}

const showQRModal = ref(false)
const qrContent = ref('')
const showQR = () => {
	let targetNumber = numberCheck()
	if (!targetNumber) {
		return
	}
	qrContent.value = `https://api.whatsapp.com/send?phone=${targetNumber}`
	showQRModal.value = true
}

const numberCheck = () => {
	let targetNumber = phoneNumber.value.trim()
	if (targetNumber.length == 0) {
		$alert('Please enter phone number.')
		return ''
	}
	if (targetNumber[0] == '+') {
		targetNumber = targetNumber.slice(1)
	}
	return targetNumber
}
</script>

<style>
.main-page {
	min-height: var(--window-height);
	position: relative;
	padding: 16px;
}

.title {
	margin: 0;
	font-weight: 700;
	font-size: 22px;
	color: var(--primary);
}

.description {
	margin: 0;
	margin-top: 4px;
	font-size: 16px;
	font-weight: 500;
}

.form-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	text-align: center;
}

.instruction {
	font-size: 16px;
	font-weight: 500;
	margin-top: 4px;
}

.phone-input {
	padding: 10px 12px;
	border: 2px solid #000;
	border-radius: 6px;
	font-size: 16px;
	width: 100%;
	max-width: 280px;
	display: block;
	margin: auto;
	text-align: left;
	margin-top: 8px;
}

.btn {
	display: block;
	border-radius: 6px;
	width: 100%;
	padding: 10px 16px;
	font-size: 16px;
	border: 2px solid #161616;
	box-shadow: 0px 12px 10px -6px rgba(97, 97, 99, 0.75);
	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.wa-btn {
	background-color: var(--primary);
	color: #fff;
}

.qr-btn {
	display: none;
	background-color: #736b85;
	color: #fff;
}

.btn-container {
	margin: auto;
	margin-top: 16px;
	width: 100%;
	max-width: 280px;
}

@media screen and (min-width:768px) {
	.btn-container {
		display: flex;
		gap: 8px;
		flex-direction: column;
	}

	.qr-btn {
		display: flex;
	}
}

.qr-close-btn {
	background-color: transparent;
	font-size: 36px;
	line-height: 1;
	padding: 0;
	border: none;
	position: absolute;
	top: 4px;
	right: 12px;
	color: #736b85;
	cursor: pointer;
}

.made-by {
	position: absolute;
	bottom: 16px;
	font-size: 14px;
	left: 50%;
	transform: translateX(-50%);
}
</style>