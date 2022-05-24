
/**
 * Setup Intersection Observer API
 * @param {array} elements 
 * @param {function} onEnter 
 * @param {function} onExit 
 * @param {object} options 
 */
const setIntersectionObserver = (elements, onEnter, onExit, options) => {
	options = {
		threshold: 0.5,
		...options
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const { target, isIntersecting } = entry

			if (isIntersecting) {			// If intersecting, run onEnter callback
				onEnter && onEnter(target)
			}
			else {							// Else, run onExit callback
				onExit && onExit(target)
			}
		})
	}, options)

	elements.forEach(element => {
		observer.observe(element)
	})
}

export {
	setIntersectionObserver
}