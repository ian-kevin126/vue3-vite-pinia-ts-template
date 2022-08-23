import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()
// piniaPersist(持久化)
pinia.use(piniaPersist)

export default pinia
