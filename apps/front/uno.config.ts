import transformerCompileClass from '@unocss/transformer-compile-class'
import { defineConfig, presetMini, presetTypography, presetWind3, presetWind4 } from 'unocss'
import transform from "@unocss/transformer-variant-group"
export default defineConfig({
  // ...
  transformers: [
    transform(),
    transformerCompileClass({
      classPrefix: 's-',
    }),
  ],
  shortcuts: [
    {
      container: 'px-4 mx-auto max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl',
      'btn':
        ':uno: bg-gray-500 hover:bg-gray-600 transition-all p-2 rounded text-white px-5 text-sm',
        "btn-primary" : "bg-blue-500 hover:bg-blue-600",
    },

  ],
  presets: [
    presetTypography(),
    presetWind3(),
    presetMini({
      dark: 'media',
    }),
  ],
})

function transformerVariantGroup(): import('unocss').SourceCodeTransformer {
  throw new Error('Function not implemented.')
}
