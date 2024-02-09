export default defineNuxtPlugin(nuxtApp => {
    /**
   * Load third party script
   * @param {string} url - URL of the script 
   * @param {Boolean} loadedCheck - Condition to check if script is already load. If set to true, will skip loading. 
   * @returns 
   */
    const loadScript = (url, loadedCheck) => {
        return new Promise((resolve) => {
            if (loadedCheck) {
                return resolve(true)
            }
            const script = document.createElement('script')
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            script.src = url
            document.head.appendChild(script)
        })
  }

  return {
    provide: {
      loadScript
    }
  };
})