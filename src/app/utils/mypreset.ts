import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}', 
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{blue.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{blue.600}',
                    activeColor: '{blue.700}'
                },
                surface: {
                  0: '#ff0000ff', // Para mudar a cor de fundo padrão altere aqui
                  50: '#f8fafc',
                  100: '#f1f5f9',
                  200: '#e2e8f0'
                }
            },
            dark: {
                primary: {
                    color: '{indigo.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{indigo.600}',
                    activeColor: '{indigo.700}'
                },
                formField: {
                    hoverBorderColor: '{primary.color}'
                }
            }
        }
    }
});
