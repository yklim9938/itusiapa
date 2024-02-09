export default defineNuxtPlugin(() => {
    let alertEl = null
    let removeTimer = null
    const alert = (msg, duration = 3000) => {
      if (!msg) return
      if (alertEl) {
        alertEl.remove()
        clearTimeout(removeTimer)
      }
      alertEl = document.createElement('div')
      alertEl.classList.add('alert-container')
      alertEl.innerText = msg
      window.document.body.appendChild(alertEl)
      removeTimer = setTimeout(() => {
        removeAlert()
        clearTimeout(removeTimer)
        removeTimer = null
      }, duration)
    }

    const removeAlert = () => {
      if (!alertEl) return
      alertEl.classList.add('out')
      setTimeout(() => {
        if (alertEl) {
          alertEl.remove()
          alertEl = null
        }
      }, 315)
    }
    
    return {
        provide: {
          alert
        }
      }
})