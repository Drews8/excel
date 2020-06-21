export class DOMListener {
  constructor($root) {
    console.log($root)
    if (!$root) {
      throw new Error('No $root provided from DOMListener')
    }
    this.$root = $root
  }
}
