import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
// piniaPersist(ζδΉε)
pinia.use(piniaPersist)

export default pinia
