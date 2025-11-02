import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { tsParticles } from '@tsparticles/engine'
import { loadParticles } from '../lib/loaders'

export default defineNuxtPlugin(async () => {
    if (import.meta.server) {
        return
    }

    const runtimeConfig = useRuntimeConfig()
    const { mode } = runtimeConfig.public.particles

    await loadParticles(tsParticles, mode)
})
