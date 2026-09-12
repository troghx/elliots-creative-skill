# Elliot’s Creative Skill

**Dirección creativa y rediseño de productos para Astra en Codex.**

Este paquete está pensado para usarse con **Astra**. Selecciona ese modelo en Codex; las skills aportan criterio de diseño y no cambian el modelo por su cuenta.

La versión actual separa dos trabajos:

| Skill | Cuándo usarla |
| --- | --- |
| [`elliots-creative-skill`](elliots-creative-skill/SKILL.md) | Dirección visual original para un proyecto nuevo: sitios, landing pages, campañas o experiencias interactivas. |
| [`elliots-creative-redesign`](elliots-creative-redesign/SKILL.md) | Rediseñar una app, sitio o flujo existente, mejorando su composición y uso sin perder su propósito ni sus funciones. |

## Dale contexto a Codex primero

Antes de invocar una skill, explica de qué va la app, sitio o experiencia que quieres crear o rediseñar. Comparte:

- **Propósito y usuarios:** qué resuelve, para quién y con qué frecuencia se usa.
- **Tarea principal:** qué debe poder hacer la persona y qué información necesita ver.
- **Estado actual:** repo, archivos, URL o capturas que permitan entender el producto real.
- **Objetivo y alcance:** qué quieres mejorar, qué puede cambiar y qué funciones, datos o reglas deben conservarse.
- **Restricciones y referencias:** marca, stack, dispositivos y referencias visuales, cuando apliquen.

Puede ser un párrafo breve. El contexto permite que Codex elija una dirección adecuada al producto y a su uso.

### Ejemplo para rediseñar una app

```text
Usa $elliots-creative-redesign.

Esta app ayuda a un equipo de soporte a revisar y asignar tickets durante
todo el día. Su tarea principal es comparar prioridad, responsable y estado.
El repo es [ruta] y la app actual está en [URL].

Quiero mejorar la distribución y la claridad de la lista en escritorio.
Puedes reagrupar controles y replantear la composición. Conserva los filtros,
permisos y reglas de asignación. La referencia visual es [referencia opcional].

Revisa primero el flujo real y desarrolla una dirección que facilite ese trabajo.
```

Para un proyecto nuevo, usa `$elliots-creative-skill` y describe el público, el contenido y la acción que quieres facilitar.

## Instalar

Pídele a Codex:

```text
Instala las skills de este repositorio:
https://github.com/troghx/elliots-creative-skill/tree/main/elliots-creative-skill
https://github.com/troghx/elliots-creative-skill/tree/main/elliots-creative-redesign
```

También puedes copiar las carpetas `elliots-creative-skill/` y `elliots-creative-redesign/` dentro de `~/.codex/skills/`.

## Filosofía

- Contexto antes que composición.
- Una dirección visual deliberada, adecuada al producto y a sus usuarios.
- En software de uso frecuente, los controles, datos y acciones tienen prioridad.
- Hugeicons como referencia principal; Lucide como alternativa válida.
- Verificar la interfaz real, su accesibilidad y sus interacciones.

## Licencia

MIT.
