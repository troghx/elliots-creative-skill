#!/usr/bin/env node

function usage() {
  console.error(
    'Usage: node contrast-check.mjs [--min <ratio>] <foreground-hex> <background-hex> [more pairs...]',
  )
}

function parseHex(input) {
  const value = input.trim().replace(/^#/, '')
  const expanded =
    value.length === 3
      ? value
          .split('')
          .map((character) => character + character)
          .join('')
      : value

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    throw new Error(`Unsupported color "${input}". Use #RGB or #RRGGBB.`)
  }

  return [0, 2, 4].map((offset) => Number.parseInt(expanded.slice(offset, offset + 2), 16))
}

function linearize(channel) {
  const normalized = channel / 255
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4
}

function luminance(hex) {
  const [red, green, blue] = parseHex(hex).map(linearize)
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrast(foreground, background) {
  const first = luminance(foreground)
  const second = luminance(background)
  const lighter = Math.max(first, second)
  const darker = Math.min(first, second)
  return (lighter + 0.05) / (darker + 0.05)
}

const args = process.argv.slice(2)
let minimum = 4.5

if (args[0] === '--min') {
  minimum = Number(args[1])
  args.splice(0, 2)
}

if (!Number.isFinite(minimum) || minimum <= 1 || args.length === 0 || args.length % 2 !== 0) {
  usage()
  process.exit(2)
}

let failed = false

for (let index = 0; index < args.length; index += 2) {
  const foreground = args[index]
  const background = args[index + 1]

  try {
    const ratio = contrast(foreground, background)
    const passes = ratio >= minimum
    failed ||= !passes

    console.log(`${foreground} on ${background}: ${ratio.toFixed(2)}:1`)
    console.log(
      `  ${ratio >= 7 ? 'PASS' : 'FAIL'} AAA normal (7:1) | ` +
        `${ratio >= 4.5 ? 'PASS' : 'FAIL'} AA normal / AAA large (4.5:1) | ` +
        `${ratio >= 3 ? 'PASS' : 'FAIL'} AA large / UI (3:1) | ` +
        `${passes ? 'PASS' : 'FAIL'} selected minimum (${minimum}:1)`,
    )
  } catch (error) {
    console.error(error.message)
    failed = true
  }
}

process.exit(failed ? 1 : 0)
